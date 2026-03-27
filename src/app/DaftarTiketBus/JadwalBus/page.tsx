import { useState } from "react";
import CariJadwalBus from "../../../components/local/cariJadwalBus/content";
import { Slider } from "../../../components/ui/slider";
import RootLayout from "../../../layout/rootLayout/content";
import { Checkbox } from "../../../components/ui/checkbox";
import PilihTiketBus from "../../../components/local/pilihTiketBus/content";
import { Button } from "../../../components/ui/button";

export default function JadwalBus() {
  const MIN_PRICE = 50_000;
  const MAX_PRICE = 10_000_000;
  const [rangePriceValue, setRangePriceValue] = useState<number>(MIN_PRICE);
  const [sortFindTicketBus, setSortFindTicketBus] =
    useState<string>("Harga Termurah");

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
      <div className="mt-8 flex gap-5 flex-col md:flex-row">
        <div className="bg-white rounded-md p-5 shadow-lg h-fit w-full md:w-1/4">
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
                className="my-3"
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
        <div className="bg-white rounded-md p-5 shadow-lg w-full md:w-3/4">
          <div className="flex flex-col mt-3 gap-3 md:flex-row md:items-center">
            <h2 className="text-lg font-semibold tracking-wide shrink-0">
              Sort:
            </h2>
            <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full md:pb-0 md:overflow-visible">
              {["Harga Termurah", "Harga Tertinggi", "Keberangkatan Awal"].map(
                (item, i) => (
                  <Button
                    key={i}
                    variant="ghost"
                    id={item}
                    className={`px-5 rounded-lg whitespace-nowrap md:text-base hover:text-blue-900 ${sortFindTicketBus === item && `color-primary text-white`}`}
                    onClick={(e) =>
                      setSortFindTicketBus((e.target as HTMLElement).id)
                    }
                  >
                    {item}
                  </Button>
                ),
              )}
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
