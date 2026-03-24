import React, { useState } from "react";
import CariJadwalBus from "../../components/local/cariJadwalBus/content";
import { Slider } from "../../components/ui/slider";
import RootLayout from "../../layout/rootLayout/content";
import { Checkbox } from "../../components/ui/checkbox";

export default function DaftarBus() {
  // const MIN_PRICE = 50_000;
  // const MAX_PRICE = 10_000_000;
  // const [rangePriceValue, setRangePriceValue] = useState<number>(100_000);
  // //   const [editabelMinPrice, setEditabelMinPrice] = useState<number>(MIN_PRICE);
  // function formatRupiah(value: number): string {
  //   return new Intl.NumberFormat("id-ID", {
  //     style: "currency",
  //     currency: "IDR",
  //     minimumFractionDigits: 0,
  //   }).format(value);
  // }

  return (
    <RootLayout>
      <div className="pt-32">
        <div className="bg-white p-5 mx-auto rounded-md shadow-lg">
          <CariJadwalBus />
        </div>
        <div className="mt-8 flex gap-5">
          <div className="bg-white rounded-md p-3 w-1/4 shadow-lg">
            <h1>Filter Berdasarkan:</h1>
            <div className="flex flex-col gap-y-3">
              <div>
                <h1 className="mb-5">Harga</h1>
                <Slider />
                {/* <Slider
                  min={MIN_PRICE}
                  max={MAX_PRICE}
                  step={50_000}
                  value={rangePriceValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRangePriceValue(Number(e.target.value))
                  }
                  className="max-w-xs bg-amber-600"
                />
                <h2 className="mt-3">{formatRupiah(rangePriceValue)}</h2> */}
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
                <h1 className="mb-3">Waktu Pemberangkatan</h1>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-x-2">
                    <Checkbox /> <span>Pagi</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Checkbox /> <span>Siang</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Checkbox /> <span>Sore</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Checkbox /> <span>Malam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md p-3 w-3/4 shadow-lg">
            <h1>Sort:</h1>
            <div className="flex items-center justify-around mt-3">
              <h2 className="bg-primary text-white py-1.5 px-3 rounded-xl">
                Harga Termurah
              </h2>
              <h2>Harga Tertinggi</h2>
              <h2>Keberangkatan Paling Awal</h2>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
