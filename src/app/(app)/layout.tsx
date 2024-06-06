/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

import { db } from "@/server/db";
import { user } from "@/server/db/schema";
import { type User, currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import AppHeader from "./_components/app-header";
import { AppSidebar } from "./_components/app-sidebar";
import { createUser } from "@/actions/userActions";

async function AppLayout({ children }: { children: React.ReactNode }) {
  // check if current user has a database profile
  const loggedInUser = await currentUser();

  async function getUser(loggedInUser: User) {
    const result = await db.select().from(user).where(eq(user.providerId, loggedInUser.id));
    const dbUser = result[0];
    return dbUser;
  }

  if (loggedInUser) {
    const dbUser = await getUser(loggedInUser);
    if (!dbUser) {
      const formData = new FormData();
      const result = await createUser(formData);
      if (result) {
        console.log("New User profile created...")
      }
    };
  }
  
  return (
    <div className="h-screen overflow-hidden w-full">
      <AppHeader />
      <div className="overflow-hidden grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] w-full h-full">
        <AppSidebar />
        <div className="bg-gray-100 h-full overflow-scroll p-8 pb-32">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AppLayout;