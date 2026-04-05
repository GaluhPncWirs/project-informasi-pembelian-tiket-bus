import React, { useEffect, useState } from "react";
import CariJadwalBus from "../../../components/local/cariJadwalBus/content";
import { Slider } from "../../../components/ui/slider";
import RootLayout from "../../../layout/rootLayout/content";
import { Checkbox } from "../../../components/ui/checkbox";
import PilihTiketBus from "../../../components/local/pilihTiketBus/content";
import { Button } from "../../../components/ui/button";
import { formatRupiah } from "../../../hooks/convertRupiah";
import { useFilterTicketBus } from "../../../store/useFilterTicketBus/state";
import { useShallow } from "zustand/shallow";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../components/ui/pagination";

export default function JadwalBus() {
  const MIN_PRICE = 50_000;
  const MAX_PRICE = 5_000_000;
  const [rangePriceValue, setRangePriceValue] = useState<number>(MIN_PRICE);
  const [sortFindTicketBus, setSortFindTicketBus] =
    useState<string>("Harga Termurah");
  const [selectedTypeTiket, setselectedTypeTiket] = useState<string[]>([]);
  const [timeOfDepature, setTimeOfDepature] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  function handleTypeBusChange(
    busType: string,
    checked: boolean | "indeterminate",
  ) {
    setselectedTypeTiket((prev) => {
      if (checked) {
        return prev.includes(busType) ? prev : [...prev, busType];
      }

      return prev.filter((item) => item !== busType);
    });
  }

  const { dataTicketBus, setApplyAllFilters, setHandleResetFilter } =
    useFilterTicketBus(
      useShallow((state) => ({
        dataTicketBus: state.dataTicketBus,
        setApplyAllFilters: state.setApplyAllFilters,
        searchCriteria: state.searchCriteria,
        setHandleResetFilter: state.setHandleResetFilter,
      })),
    );

  useEffect(() => {
    setApplyAllFilters({
      rangePriceVal: rangePriceValue,
      MIN_PRICE: MIN_PRICE,
      selectedTypeTiket: selectedTypeTiket,
      timeOfDepature: timeOfDepature,
      sortFindTicketBus: sortFindTicketBus,
    });
  }, [rangePriceValue, selectedTypeTiket, timeOfDepature, sortFindTicketBus]);

  function handleResetFilter() {
    setRangePriceValue(MIN_PRICE);
    setselectedTypeTiket([]);
    setTimeOfDepature(null);
    setSortFindTicketBus("Harga Termurah");
    setCurrentPage(1);
    setHandleResetFilter();
  }

  const ITEM_PER_PAGE = 4;
  const totalPages = Math.ceil(dataTicketBus.length / ITEM_PER_PAGE);

  function getPaginationRange(current: number, total: number) {
    const range: number[] = [];
    const rangeWithDots: (number | "...")[] = [];
    let lastNum: number | undefined;

    if (total <= 0) return [];

    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - 1 && i <= current + 1)) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (lastNum && i - lastNum > 1) {
        rangeWithDots.push("...");
      }
      rangeWithDots.push(i);
      lastNum = i;
    }

    return rangeWithDots;
  }

  return (
    <RootLayout>
      <div className="bg-white p-5 mx-auto rounded-md shadow-lg">
        <CariJadwalBus />
      </div>
      <div className="mt-8 flex gap-5 flex-col lg:flex-row">
        <div className="bg-white rounded-md p-5 shadow-lg h-fit w-full lg:w-1/4">
          <h1 className="mb-5">Filter Berdasarkan:</h1>
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
              <h1 className="mb-3">Tipe Tiket</h1>
              <div className="flex flex-col gap-1">
                {["Economy", "Executive", "Luxury"].map((item) => (
                  <div className="flex items-center gap-x-2" key={item}>
                    <Checkbox
                      id={item}
                      name={item}
                      checked={selectedTypeTiket.includes(item)}
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
                {["pagi", "siang", "sore", "malam"].map((item) => (
                  <div className="flex items-center gap-x-2" key={item}>
                    <input
                      type="radio"
                      name="timeOfDepature"
                      className="size-4"
                      id={item}
                      checked={timeOfDepature === item}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setTimeOfDepature(e.target.id)
                      }
                    />{" "}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              className="text-white px-7 tracking-wide color-primary h-10"
              onClick={handleResetFilter}
            >
              Reset
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-md p-5 shadow-lg w-full lg:w-3/4">
          <div className="flex flex-col mt-3 gap-3 md:flex-row md:items-center">
            <h2 className="text-lg font-semibold tracking-wide shrink-0">
              Sort:
            </h2>
            <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full md:pb-0 md:overflow-visible">
              {["Harga Termurah", "Harga Tertinggi"].map((item, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  id={item}
                  className={`px-5 rounded-lg whitespace-nowrap text-sm hover:text-blue-900 ${sortFindTicketBus === item && `color-primary text-white`}`}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    setSortFindTicketBus(e.currentTarget.id)
                  }
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5">
            {dataTicketBus.length > 0 ? (
              <>
                {dataTicketBus
                  .slice(
                    (currentPage - 1) * ITEM_PER_PAGE,
                    currentPage * ITEM_PER_PAGE,
                  )
                  .map((item) => (
                    <PilihTiketBus
                      key={item.id}
                      srcImg={item.srcImg}
                      typeTiket={item.typeTiket}
                      rute={item.rute}
                      waktuBerangkat={item.waktuBerangkat}
                      waktuEstimasi={item.waktuEstimasi}
                      waktuKeberangkatan={item.waktuKeberangkatan}
                      tglBerangkat={item.tglBerangkat}
                      harga={item.harga}
                      detailTiket={`${item.detailTiket}/${item.id}`}
                    />
                  ))}
                <Pagination className="mt-3 flex justify-around items-center">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        size="default"
                        onClick={() =>
                          setCurrentPage((page) => Math.max(page - 1, 1))
                        }
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                    {getPaginationRange(currentPage, totalPages).map(
                      (item, i) => (
                        <PaginationItem key={i}>
                          {item === "..." ? (
                            <PaginationEllipsis />
                          ) : (
                            <PaginationLink
                              size="default"
                              isActive={currentPage === item}
                              onClick={() => setCurrentPage(item)}
                            >
                              {item}
                            </PaginationLink>
                          )}
                        </PaginationItem>
                      ),
                    )}
                    <PaginationItem>
                      <PaginationNext
                        size="default"
                        onClick={() =>
                          setCurrentPage((page) =>
                            Math.min(page + 1, totalPages),
                          )
                        }
                        className={
                          currentPage === totalPages
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </>
            ) : (
              <h1 className="flex justify-center items-center h-90">
                Tiket Tidak Tersedia
              </h1>
            )}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
