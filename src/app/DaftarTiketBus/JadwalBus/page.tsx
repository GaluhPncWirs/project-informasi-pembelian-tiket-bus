import React, { useEffect, useState } from "react";
import CariJadwalBus from "../../../components/local/cariJadwalBus/content";
import { Slider } from "../../../components/ui/slider";
import RootLayout from "../../../layout/rootLayout/content";
import { Checkbox } from "../../../components/ui/checkbox";
import PilihTiketBus from "../../../components/local/pilihTiketBus/content";
import { Button } from "../../../components/ui/button";
import type { dataTicket } from "../../../types/typeDataTicket";

const daftarTiket = [
  {
    srcImg: "/images/local/jadwalBus/bus_double_decker.webp",
    typeBus: "Double Decker",
    rute: "Jakarta - Bandung",
    waktuBerangkat: "18:00",
    waktuEstimasi: "1 jam",
    waktuKeberangkatan: "malam",
    tglBerangkat: "15 April 2026",
    harga: 150000,
    detailTiket: "/DaftarTiketBus/Detail/lkafhasdf",
  },
  {
    srcImg: "/images/local/jadwalBus/bus_double_decker.webp",
    typeBus: "Bus Original",
    rute: "Jakarta - Sumedang",
    waktuBerangkat: "09:00",
    waktuEstimasi: "2 jam 40 menit",
    waktuKeberangkatan: "pagi",
    tglBerangkat: "25 April 2026",
    harga: 350000,
    detailTiket: "/DaftarTiketBus/Detail/lkafhasdf",
  },
  {
    srcImg: "/images/local/jadwalBus/bus_double_decker.webp",
    typeBus: "Bus Original",
    rute: "Bekasi - Pangandaran",
    waktuBerangkat: "15:30",
    waktuEstimasi: "2 jam 40 menit",
    waktuKeberangkatan: "sore",
    tglBerangkat: "25 April 2026",
    harga: 100000,
    detailTiket: "/DaftarTiketBus/Detail/lkafhasdf",
  },
  {
    srcImg: "/images/local/jadwalBus/bus_double_decker.webp",
    typeBus: "Bus Original",
    rute: "Bandung - Ciamis",
    waktuBerangkat: "07:00",
    waktuEstimasi: "2 jam 40 menit",
    waktuKeberangkatan: "pagi",
    tglBerangkat: "25 April 2026",
    harga: 200000,
    detailTiket: "/DaftarTiketBus/Detail/lkafhasdf",
  },
];

export default function JadwalBus() {
  const MIN_PRICE = 50_000;
  const MAX_PRICE = 10_000_000;
  const [rangePriceValue, setRangePriceValue] = useState<number>(MIN_PRICE);
  const [sortFindTicketBus, setSortFindTicketBus] =
    useState<string>("Harga Termurah");
  const [sortDataTicketBus, setSortDataTicketBus] = useState<dataTicket[]>([]);

  function formatRupiah(value: number): string {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  }

  useEffect(() => {
    if (sortFindTicketBus === "Harga Termurah") {
      const sortDataCheapTicket = [...daftarTiket].sort(
        (a, b) => a.harga - b.harga,
      );
      setSortDataTicketBus(sortDataCheapTicket);
    }
  }, [sortFindTicketBus]);

  function handleSortTicketBus(event: React.MouseEvent<HTMLButtonElement>) {
    const clickedButton = (event.target as HTMLElement).id;
    setSortFindTicketBus(clickedButton);

    if (clickedButton === "Harga Tertinggi") {
      const sortDataExpensiveTicket = [...daftarTiket].sort(
        (a, b) => b.harga - a.harga,
      );
      setSortDataTicketBus(sortDataExpensiveTicket);
    } else if (clickedButton === "Keberangkatan Awal") {
      const earlyDepature = daftarTiket.filter(
        (data) => data.waktuKeberangkatan === "pagi",
      );
      setSortDataTicketBus(earlyDepature);
    } else if (clickedButton === "Harga Termurah") {
      const sortDataCheapTicket = [...daftarTiket].sort(
        (a, b) => a.harga - b.harga,
      );
      setSortDataTicketBus(sortDataCheapTicket);
    }
  }

  return (
    <RootLayout>
      <div className="bg-white p-5 mx-auto rounded-md shadow-lg">
        <CariJadwalBus />
      </div>
      <div className="mt-8 flex gap-5 flex-col lg:flex-row">
        <div className="bg-white rounded-md p-5 shadow-lg h-fit w-full lg:w-1/4">
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
        <div className="bg-white rounded-md p-5 shadow-lg w-full lg:w-3/4">
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
                    onClick={(e) => handleSortTicketBus(e)}
                  >
                    {item}
                  </Button>
                ),
              )}
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5">
            {sortDataTicketBus.map((item, i) => (
              <PilihTiketBus
                key={i}
                srcImg={item.srcImg}
                typeBus={item.typeBus}
                rute={item.rute}
                waktuBerangkat={item.waktuBerangkat}
                waktuEstimasi={item.waktuEstimasi}
                waktuKeberangkatan={item.waktuKeberangkatan}
                tglBerangkat={item.tglBerangkat}
                harga={item.harga}
                detailTiket={item.detailTiket}
              />
            ))}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
