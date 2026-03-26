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
      <div className="w-11/12 mx-auto pb-20 pt-32 md:w-4/5">{children}</div>
      <Footer />
    </div>
  );
}
