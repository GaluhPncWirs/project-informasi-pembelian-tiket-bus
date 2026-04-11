import { create } from "zustand";
import type { dataTicket } from "../../types/typeDataTicket";
import { toast } from "sonner";
import { getDatasTicketBus } from "@/lib/firebase/services";

type ApplyAllFilters = {
  rangePriceVal: number;
  MIN_PRICE: number;
  selectedTypeTiket: string[];
  timeOfDepature: string | null;
  sortFindTicketBus: string;
};

type FilterTicketBus = {
  allDataTicketBus: dataTicket[] | [];
  dataTicketBus: dataTicket[] | [];
  searchCriteria: {
    kotaYangDipilih: string[];
    tanggalBerangkat: string;
  };
  setFetchAllDataTicketBus: () => void;
  setApplyAllFilters: (filters: ApplyAllFilters) => void;
  setHandleSearchTicketBus: (
    kotaYangDipilih: string[],
    tanggalBerangkat: string,
  ) => void;
  setHandleResetFilter: () => void;
};

export const useFilterTicketBus = create<FilterTicketBus>((set) => ({
  allDataTicketBus: [],
  dataTicketBus: [],
  searchCriteria: {
    kotaYangDipilih: [],
    tanggalBerangkat: "",
  },

  setFetchAllDataTicketBus: async () => {
    try {
      const getData = await getDatasTicketBus();
      if (getData.status) {
        set({
          allDataTicketBus: getData.data as dataTicket[],
          dataTicketBus: getData.data as dataTicket[],
        });
      } else {
        toast.error("Gagal mengambil data tiket bus");
      }
    } catch {
      toast.error("Terjadi kesalahan saat mengambil data");
    }
  },

  setApplyAllFilters: (filters) => {
    set((prev) => {
      let filtered: dataTicket[] = [];

      if (
        prev.searchCriteria.kotaYangDipilih.length > 0 &&
        prev.searchCriteria.tanggalBerangkat
      ) {
        filtered = [...prev.dataTicketBus];
      } else {
        filtered = [...prev.allDataTicketBus];
      }

      const {
        rangePriceVal,
        MIN_PRICE,
        selectedTypeTiket,
        timeOfDepature,
        sortFindTicketBus,
      } = filters;

      // filter harga
      if (rangePriceVal > MIN_PRICE) {
        filtered = filtered.filter((price) => price.harga >= rangePriceVal);
      }

      // filter tipe bus
      if (selectedTypeTiket && selectedTypeTiket.length > 0) {
        filtered = filtered.filter((typeBus) =>
          selectedTypeTiket.includes(typeBus.typeTiket),
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
      if (!kotaYangDipilih || kotaYangDipilih.length === 0) {
        return {
          dataTicketBus: [...prev.allDataTicketBus],
          searchCriteria: { kotaYangDipilih: [], tanggalBerangkat },
        };
      }

      const searchCity = prev.allDataTicketBus.filter((item) => {
        const ruteArrayLowerCase = item.rute
          .split(" - ")
          .map((s) => s.trim().toLowerCase());
        const selectedCityLowerCase = kotaYangDipilih.map((s) =>
          s.trim().toLowerCase(),
        );

        const isRuteMatch =
          selectedCityLowerCase.length === ruteArrayLowerCase.length &&
          selectedCityLowerCase.every(
            (val, index) => val === ruteArrayLowerCase[index],
          );

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

      if (searchCity.length === 0) {
        toast("❌ Terjadi Kesalahan", {
          description: "Jadwal tiket bus yang dicari tidak ada",
        });
      }

      return {
        dataTicketBus: searchCity,
        searchCriteria: { kotaYangDipilih, tanggalBerangkat },
      };
    });
  },

  setHandleResetFilter: () => {
    set((prev) => ({
      dataTicketBus: [...prev.allDataTicketBus],
      searchCriteria: { kotaYangDipilih: [], tanggalBerangkat: "" },
    }));
  },
}));
