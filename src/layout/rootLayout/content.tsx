import type React from "react";
import Navbar from "../../components/global/navbar/content";
import Footer from "../../components/global/footer/content";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F8F9FA]">
      <Toaster />
      <Navbar />
      <div className="w-11/12 mx-auto pb-20 pt-32 lg:w-10/12">{children}</div>
      <Footer />
    </div>
  );
}
