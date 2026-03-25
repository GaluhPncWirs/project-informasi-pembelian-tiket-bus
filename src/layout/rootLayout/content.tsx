import type React from "react";
import Navbar from "../../components/global/navbar/content";
import Footer from "../../components/global/footer/content";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F8F9FA]">
      <Navbar />
      <div className="w-4/5 mx-auto pb-20 pt-32">{children}</div>
      <Footer />
    </div>
  );
}
