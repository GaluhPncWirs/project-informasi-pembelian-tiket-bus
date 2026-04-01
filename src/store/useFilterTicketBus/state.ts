import { create } from "zustand";
import { daftarTiket } from "../../data/dataTiketBus/data";
import type { dataTicket } from "../../types/typeDataTicket";

type FilterTicketBus = {
  dataTicketBus: dataTicket[];
  allDataTicketBus: dataTicket[];
  setHandleSearchTicketBus: (
    kotaYangDipilih: string[],
    tanggalBerangkat: string,
  ) => void;
  setApplyAllFilters: (filters) => void;
};

export const useFilterTicketBus = create<FilterTicketBus>((set) => ({
  allDataTicketBus: [...daftarTiket],
  dataTicketBus: [...daftarTiket],

  setApplyAllFilters: (filters) => {
    set((prev) => {
      let filtered = [...prev.allDataTicketBus];

      const {
        rangePriceVal,
        MIN_PRICE,
        selectedTypeBus,
        timeOfDepature,
        sortFindTicketBus,
      } = filters;

      // filter harga
      if (rangePriceVal > MIN_PRICE) {
        filtered = filtered.filter((price) => price.harga >= rangePriceVal);
      }

      // filter tipe bus
      if (selectedTypeBus && selectedTypeBus.length > 0) {
        filtered = filtered.filter((typeBus) =>
          selectedTypeBus.includes(typeBus.typeBus),
        );
      }

      // filter waktu keberangkatan
      if (timeOfDepature) {
        filtered = filtered.filter(
          (depature) => depature.waktuKeberangkatan === timeOfDepature,
        );
      }

      // SortTicketBus
      if (sortFindTicketBus === "Harga Tertinggi") {
        filtered.sort((a, b) => b.harga - a.harga);
      } else {
        filtered.sort((a, b) => a.harga - b.harga);
      }

      return { dataTicketBus: filtered };
    });
  },

  setHandleSearchTicketBus: (kotaYangDipilih, tanggalBerangkat) => {
    set((prev) => {
      const searchCity = prev.dataTicketBus.filter((item) => {
        const ruteArray = item.rute
          .split(" - ")
          .map((s) => s.trim().toLowerCase());
        const selectedCityLowerCase = kotaYangDipilih.map((s) =>
          s.trim().toLowerCase(),
        );

        const isRuteMatch =
          selectedCityLowerCase.length === ruteArray.length &&
          selectedCityLowerCase.every((val, index) => val === ruteArray[index]);

        if (!isRuteMatch) return false;
        if (!tanggalBerangkat) return true;

        const [year, month, day] = tanggalBerangkat.split("-");
        const date = new Date(Number(year), Number(month) - 1, Number(day));

        if (Number.isNaN(date.getTime())) {
          return false;
        }

        const resultDate = new Intl.DateTimeFormat("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(date);

        return item.tglBerangkat === resultDate;
      });

      return {
        dataTicketBus: searchCity,
      };
    });
  },
}));
