import type React from "react";
import Navbar from "../../components/navbar/content";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F8F9FA]">
      <Navbar />
      <div className="w-4/5 mx-auto pb-20">{children}</div>
    </div>
  );
}
