import SiteHeader from "./_components/site-header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SiteHeader />
      {children}
    </div>
  );
}
