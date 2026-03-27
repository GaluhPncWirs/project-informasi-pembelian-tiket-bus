import { MapPin } from "lucide-react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

export default function CariJadwalBus() {
  return (
    <>
      <h1 className="text-xl">Cari Jadwal Bus</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-3">
        <div className="relative flex items-center justify-end">
          <MapPin className="absolute right-2 size-5" />
          <Input placeholder="Kota asal" className="pr-8" />
        </div>
        <div className="relative flex items-center justify-end">
          <MapPin className="absolute right-2 size-5" />
          <Input placeholder="Kota tujuan" className="pr-8" />
        </div>
        <Input type="date" placeholder="Pilih tanggal keberangkatan" />
        <Button className="text-white px-7 text-lg tracking-wide color-primary h-10">
          Cari
        </Button>
      </div>
    </>
  );
}
