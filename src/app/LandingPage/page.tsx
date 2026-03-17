import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import RootLayout from "../../layout/rootLayout/content";
import { MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <header className="heroSection">
        <div className="absolute bottom-0 h-full flex items-center mx-16">
          <h1 className="text-4xl font-bold tracking-wide max-w-sm">
            Temukan Informasi Harga Tiket Bus dengan Mudah
          </h1>
        </div>
      </header>
      <RootLayout>
        <div className="bg-[#FFFFFF] p-5 w-3/4 mx-auto -mt-16 rounded-md shadow-lg relative">
          <h1 className="text-xl font-semibold tracking-wide">
            Cari Jadwal Bus
          </h1>
          <div className="flex items-center gap-5 p-2 mt-2">
            <div className="relative flex items-center justify-end basis-1/3 ">
              <MapPin className="absolute right-2 size-5" />
              <Input placeholder="Masukkan kota asal" />
            </div>
            <div className="relative flex items-center justify-end basis-1/3">
              <MapPin className="absolute right-2 size-5" />
              <Input placeholder="Masukkan kota tujuan" />
            </div>
            <div className="basis-1/3">
              <Input type="date" placeholder="Pilih tanggal keberangkatan" />
            </div>
            <Button className="text-white px-5 text-base">Cari</Button>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-semibold tracking-wide">Rute Populer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            veniam dignissimos ab asperiores esse recusandae aperiam dolores
            necessitatibus facere.
          </p>
        </div>
      </RootLayout>
    </>
  );
}
