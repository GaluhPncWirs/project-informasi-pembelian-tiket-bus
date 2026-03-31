import { create } from "zustand";
import { daftarTiket } from "../../data/dataTiketBus/data";
import type { dataTicket } from "../../types/typeDataTicket";

type FilterTicketBus = {
  dataTicketBus: dataTicket[];
  searchTicketBus: dataTicket[] | null;
  rangePriceValue: string[] | null;
  typeBus: string[] | null;
  timeOfDepature: string[] | null;
  sortForm: string[] | null;

  setHandleSearchTicketBus: (
    kotaYangDipilih: string[],
    tanggalBerangkat: string,
  ) => void;
};

export const useFilterTicketBus = create<FilterTicketBus>((set) => ({
  dataTicketBus: [...daftarTiket],
  searchTicketBus: null,
  rangePriceValue: null,
  typeBus: null,
  timeOfDepature: null,
  sortForm: null,

  setHandleSearchTicketBus: (kotaYangDipilih, tanggalBerangkat) => {
    set((prev) => {
      const searchCity = prev.dataTicketBus.filter((item) => {
        const ruteArray = item.rute.split(" - ");
        const isRuteMatch =
          kotaYangDipilih.length === ruteArray.length &&
          kotaYangDipilih.every((val, index) => val === ruteArray[index]);

        if (!tanggalBerangkat) {
          return isRuteMatch;
        }

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

        return isRuteMatch && item.tglBerangkat === resultDate;
      });

      return {
        searchTicketBus: searchCity,
      };
    });
  },
}));
