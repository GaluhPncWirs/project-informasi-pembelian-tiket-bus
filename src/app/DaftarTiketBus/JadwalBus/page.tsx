import React, { useMemo, useState } from "react";
import CariJadwalBus from "../../../components/local/cariJadwalBus/content";
import { Slider } from "../../../components/ui/slider";
import RootLayout from "../../../layout/rootLayout/content";
import { Checkbox } from "../../../components/ui/checkbox";
import PilihTiketBus from "../../../components/local/pilihTiketBus/content";
import { Button } from "../../../components/ui/button";
import { formatRupiah } from "../../../hooks/convertRupiah";

const daftarTiket = [
  {
    srcImg: "/images/local/jadwalBus/bus_double_decker.webp",
    typeBus: "Double Decker",
    rute: "Jakarta - Bandung",
    waktuBerangkat: "18:00",
    waktuEstimasi: "1 jam",
    waktuKeberangkatan: "Malam",
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
    waktuKeberangkatan: "Pagi",
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
    waktuKeberangkatan: "Sore",
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
    waktuKeberangkatan: "Pagi",
    tglBerangkat: "25 April 2026",
    harga: 200000,
    detailTiket: "/DaftarTiketBus/Detail/lkafhasdf",
  },
];

export default function JadwalBus() {
  const MIN_PRICE = 50_000;
  const MAX_PRICE = 5_000_000;
  const [rangePriceValue, setRangePriceValue] = useState<number>(MIN_PRICE);
  const [sortFindTicketBus, setSortFindTicketBus] =
    useState<string>("Harga Termurah");
  const [selectedTypeBus, setSelectedTypeBus] = useState<string[]>([]);
  const [timeOfDepature, setTimeOfDepature] = useState<string | null>(null);

  function handleTypeBusChange(
    busType: string,
    checked: boolean | "indeterminate",
  ) {
    setSelectedTypeBus((prev) => {
      if (checked) {
        return prev.includes(busType) ? prev : [...prev, busType];
      }

      return prev.filter((item) => item !== busType);
    });
  }

  const sortDataTicketBus = useMemo(() => {
    let filteredTickets = [...daftarTiket];

    if (rangePriceValue > MIN_PRICE) {
      filteredTickets = filteredTickets.filter(
        (data) => data.harga === rangePriceValue,
      );
    }

    if (selectedTypeBus.length > 0) {
      filteredTickets = filteredTickets.filter((data) =>
        selectedTypeBus.includes(data.typeBus),
      );
    }

    if (timeOfDepature !== null) {
      filteredTickets = filteredTickets.filter(
        (data) => data.waktuKeberangkatan === timeOfDepature,
      );
    }

    if (sortFindTicketBus === "Keberangkatan Awal") {
      return filteredTickets.filter(
        (data) => data.waktuKeberangkatan === "pagi",
      );
    }

    if (sortFindTicketBus === "Harga Tertinggi") {
      return filteredTickets.sort((a, b) => b.harga - a.harga);
    }

    return filteredTickets.sort((a, b) => a.harga - b.harga);
  }, [selectedTypeBus, sortFindTicketBus, timeOfDepature, rangePriceValue]);

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
                {["Bus Double Decker", "Elf", "Bus Original"].map((item) => (
                  <div className="flex items-center gap-x-2" key={item}>
                    <Checkbox
                      id={item}
                      name={item}
                      checked={selectedTypeBus.includes(item)}
                      onCheckedChange={(checked) =>
                        handleTypeBusChange(item, checked)
                      }
                    />{" "}
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-200 h-0.5 rounded-md w-full" />
            <div>
              <h1 className="mb-3">Waktu Keberangkatan</h1>
              <div className="flex flex-col gap-1">
                {["Pagi", "Siang", "Sore", "Malam"].map((item) => (
                  <div className="flex items-center gap-x-2" key={item}>
                    <input
                      type="radio"
                      name="timeOfDepature"
                      className="size-4"
                      id={item}
                      onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                        setTimeOfDepature((e.target as HTMLInputElement).id)
                      }
                    />{" "}
                    <span>{item}</span>
                  </div>
                ))}
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
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                      setSortFindTicketBus(e.currentTarget.id)
                    }
                  >
                    {item}
                  </Button>
                ),
              )}
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5">
            {sortDataTicketBus.length > 0 ? (
              sortDataTicketBus.map((item, i) => (
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
              ))
            ) : (
              <h1>Tidak Ada Tiketnya</h1>
            )}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
