import { MapPin } from "lucide-react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

export default function CariJadwalBus() {
  return (
    <>
      <h1 className="text-xl">Cari Jadwal Bus</h1>
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
        <Button className="text-white px-7 text-base color-primary">
          Cari
        </Button>
      </div>
    </>
  );
}
