import { inter } from "@/utils/fonts";
import Sidebar from "./_components/sidebar/sidebar";
import Navbar from "./_components/topbar/topbar";
import "../globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Navbar />
        <div className="flex flex-row">
          <Sidebar />
          <div className="p-5 ">{children}</div>
        </div>
      </body>
    </html>
  );
}
