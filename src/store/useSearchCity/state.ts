import { create } from "zustand";
import { kotaDiPulauJawa } from "../../data/dataPulauJawa/data";

type SearchCityState = {
  hasilCariKotaAsal: string[];
  hasilCariKotaTujuan: string[];
  setHandleInputCariTiketBus: (value: string, type: "asal" | "tujuan") => void;
};

function searchCity(value: string) {
  const query = value.trim().toLowerCase();
  if (!query) return [];

  return kotaDiPulauJawa.filter((item) => item.toLowerCase().startsWith(query));
}

export const useSearchCity = create<SearchCityState>((set) => ({
  hasilCariKotaAsal: [],
  hasilCariKotaTujuan: [],

  setHandleInputCariTiketBus: (value, type) => {
    const result = searchCity(value);
    set((prev) => ({
      ...prev,
      [type === "asal" ? "hasilCariKotaAsal" : "hasilCariKotaTujuan"]: result,
    }));
  },
}));
