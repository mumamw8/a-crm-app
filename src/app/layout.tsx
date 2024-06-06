import { ClerkProvider } from '@clerk/nextjs';
import { SFLicenseProvider } from "@/providers/sf-license-provider";
import { Toaster } from 'react-hot-toast';
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "RealtyAgentCRM",
  description: "CRM for real-estsate",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <SFLicenseProvider>
            <Toaster />
            {children}
          </SFLicenseProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
