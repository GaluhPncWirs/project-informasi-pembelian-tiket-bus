import { create } from "zustand";
import { kotaDiPulauJawa } from "../../data/kotaPulauJawa";

type SearchCityState = {
  hasilCariKotaAsal: string[];
  hasilCariKotaTujuan: string[];
  setHandleInputCariKota: (value: string) => void;
  setHandleCariInputKotaTujuan: (value: string) => void;
};

function searchCity(value: string) {
  if (value !== "") {
    return kotaDiPulauJawa.filter((item) =>
      item.toLowerCase().startsWith(value),
    );
  } else {
    return [];
  }
}

export const useSearchCity = create<SearchCityState>((set) => ({
  hasilCariKotaAsal: [],
  hasilCariKotaTujuan: [],

  setHandleInputCariKota: (value: string) => {
    set({ hasilCariKotaAsal: searchCity(value.toLowerCase()) });
  },

  setHandleCariInputKotaTujuan: (value: string) => {
    set({ hasilCariKotaTujuan: searchCity(value.toLowerCase()) });
  },
}));
