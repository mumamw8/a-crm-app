import AppHeader from "./_components/app-header";
import { AppSidebar } from "./_components/app-sidebar";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-hidden w-full">
      <AppHeader />
      <div className="overflow-hidden grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] w-full h-full">
        <AppSidebar />
        <div className="bg-gray-100 h-full overflow-scroll p-8">
          {children}
        </div>
      </div>
    </div>
  )
  // return (
  //   <div className="grid h-screen overflow-hidden w-full md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr]">
  //     <AppSidebar />
  //     <div className="flex flex-col h-full overflow-hidden">
  //       <AppHeader />
  //       <div className="h-full overflow-scroll">
  //         {children}
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default AppLayout;