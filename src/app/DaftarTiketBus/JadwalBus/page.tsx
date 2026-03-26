import { useState } from "react";
import CariJadwalBus from "../../../components/local/cariJadwalBus/content";
import { Slider } from "../../../components/ui/slider";
import RootLayout from "../../../layout/rootLayout/content";
import { Checkbox } from "../../../components/ui/checkbox";
import PilihTiketBus from "../../../components/local/pilihTiketBus/content";
import { Link } from "react-router-dom";

export default function JadwalBus() {
  const MIN_PRICE = 50_000;
  const MAX_PRICE = 10_000_000;
  const [rangePriceValue, setRangePriceValue] = useState<number>(MIN_PRICE);
  function formatRupiah(value: number): string {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  }

  return (
    <RootLayout>
      <div className="bg-white p-5 mx-auto rounded-md shadow-lg">
        <CariJadwalBus />
      </div>
      <div className="mt-8 flex gap-5">
        <div className="bg-white rounded-md p-5 w-1/4 shadow-lg h-fit">
          <h1>Filter Berdasarkan:</h1>
          <div className="flex flex-col gap-y-3">
            <div>
              <h1>Harga</h1>
              <Slider
                min={MIN_PRICE}
                max={MAX_PRICE}
                step={50_000}
                value={[rangePriceValue]}
                onValueChange={(value) => setRangePriceValue(value[0])}
                className="max-w-xs my-3"
              />
              <h2>{formatRupiah(rangePriceValue)}</h2>
            </div>
            <div className="bg-slate-200 h-0.5 rounded-md w-full" />
            <div>
              <h1 className="mb-3">Tipe Bus</h1>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-x-2">
                  <Checkbox /> <span>Bus Double Decker</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Checkbox /> <span>Elf</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Checkbox /> <span>Bus Original</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-200 h-0.5 rounded-md w-full" />
            <div>
              <h1 className="mb-3">Waktu Keberangkatan</h1>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="timeOfDepature"
                    className="size-4"
                  />{" "}
                  <span>Pagi</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="timeOfDepature"
                    className="size-4"
                  />{" "}
                  <span>Siang</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="timeOfDepature"
                    className="size-4"
                  />{" "}
                  <span>Sore</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    name="timeOfDepature"
                    className="size-4"
                  />{" "}
                  <span>Malam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md p-5 w-3/4 shadow-lg">
          <div className="flex items-center mt-3 gap-2">
            <h2 className="text-lg font-semibold tracking-wide">Sort:</h2>
            <div className="flex items-center justify-around w-full">
              <Link
                to="#"
                className="color-primary text-white py-2 px-4 rounded-lg"
              >
                Harga Termurah
              </Link>
              <Link to="#">Harga Tertinggi</Link>
              <Link to="#">Keberangkatan Paling Awal</Link>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5">
            <PilihTiketBus
              srcImg="/images/local/jadwalBus/bus_double_decker.webp"
              typeBus="Double Decker"
              rute="Jakarta - Bandung"
              waktuBerangkat="18:00"
              waktuEstimasi="1 jam"
              waktuKeberangkatan="malam"
              tglBerangkat="15 April 2026"
              harga="150.000"
              detailTiket="/DaftarTiketBus/Detail/lkafhasdf"
            />
            <PilihTiketBus
              srcImg="/images/local/jadwalBus/bus_double_decker.webp"
              typeBus="Bus Original"
              rute="Jakarta - Sumedang"
              waktuBerangkat="09:00"
              waktuEstimasi="2 jam 40 menit"
              waktuKeberangkatan="pagi"
              tglBerangkat="25 April 2026"
              harga="350.000"
              detailTiket="#"
            />
            <PilihTiketBus
              srcImg="/images/local/jadwalBus/bus_double_decker.webp"
              typeBus="Bus Original"
              rute="Jakarta - Sumedang"
              waktuBerangkat="09:00"
              waktuEstimasi="2 jam 40 menit"
              waktuKeberangkatan="pagi"
              tglBerangkat="25 April 2026"
              harga="350.000"
              detailTiket="#"
            />
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
