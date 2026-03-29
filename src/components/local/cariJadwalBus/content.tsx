import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../ui/command";
import { useSearchCity } from "../../../store/useSearchCity/state";
import { useShallow } from "zustand/shallow";

export default function CariJadwalBus() {
  const [kotaAsal, setKotaAsal] = useState<string>("");
  const [kotaTujuan, setKotaTujuan] = useState<string>("");
  const [isOpenSuggest, setIsOpenSuggest] = useState<boolean>(false);
  const [kotaAsalYangDipilih, setKotaAsalYangDipilih] = useState<string | null>(
    null,
  );
  const [kotaTujuanYangDipilih, setKotaTujuanYangDipilih] = useState<
    string | null
  >(null);

  const {
    setHandleInputCariKota,
    setHandleCariInputKotaTujuan,
    hasilCariKotaAsal,
    hasilCariKotaTujuan,
  } = useSearchCity(
    useShallow((state) => ({
      setHandleInputCariKota: state.setHandleInputCariKota,
      setHandleCariInputKotaTujuan: state.setHandleCariInputKotaTujuan,
      hasilCariKotaAsal: state.hasilCariKotaAsal,
      hasilCariKotaTujuan: state.hasilCariKotaTujuan,
    })),
  );

  function handleKlikKotaAsal(item: string) {
    setKotaAsalYangDipilih(item);
    setKotaAsal(item);
    setIsOpenSuggest(false);
  }

  function handleKlikKotaTujuan(item: string) {
    setKotaTujuanYangDipilih(item);
    setKotaTujuan(item);
    setIsOpenSuggest(false);
  }

  function setHandleInputCariKotaAsal(value: string) {
    setKotaAsal(value);
    setHandleInputCariKota(value);
    if (value === "") {
      setKotaAsalYangDipilih(null);
      setIsOpenSuggest(false);
    } else {
      setIsOpenSuggest(true);
    }
  }

  function setHandleInputCariKotaTujuan(value: string) {
    setKotaTujuan(value);
    setHandleCariInputKotaTujuan(value);
    if (value === "") {
      setKotaTujuanYangDipilih(null);
      setIsOpenSuggest(false);
    } else {
      setIsOpenSuggest(true);
    }
  }

  return (
    <>
      <h1 className="text-xl">Cari Jadwal Bus</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-3">
        <Command>
          <CommandInput
            placeholder="Kota asal"
            value={kotaAsal}
            onValueChange={(value) => setHandleInputCariKotaAsal(value)}
          />
          {isOpenSuggest && (
            <div>
              {kotaAsal !== "" && (
                <CommandList className="p-2 bg-slate-50 absolute z-10 max-h-36 overflow-y-auto rounded-b-lg">
                  {hasilCariKotaAsal.length > 0 ? (
                    <CommandGroup>
                      {hasilCariKotaAsal.map((item, i) => (
                        <CommandItem
                          className="cursor-pointer mb-1"
                          key={i}
                          onSelect={() => handleKlikKotaAsal(item)}
                        >
                          {item}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  ) : (
                    <CommandEmpty>Kota Tidak Tersedia.</CommandEmpty>
                  )}
                </CommandList>
              )}
            </div>
          )}
        </Command>
        <Command>
          <CommandInput
            placeholder="Kota Tujuan"
            value={kotaTujuan}
            onValueChange={(value) => setHandleInputCariKotaTujuan(value)}
          />
          {isOpenSuggest && (
            <div>
              {kotaTujuan !== "" && (
                <CommandList className="p-2 bg-white shadow-md absolute z-10 max-h-36 overflow-y-auto rounded-b-md">
                  {hasilCariKotaTujuan.length > 0 ? (
                    <CommandGroup>
                      {hasilCariKotaTujuan.map((item, i) => (
                        <CommandItem
                          className="cursor-pointer mb-1"
                          key={i}
                          onSelect={() => handleKlikKotaTujuan(item)}
                        >
                          {item}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  ) : (
                    <CommandEmpty>Kota Tidak Tersedia.</CommandEmpty>
                  )}
                </CommandList>
              )}
            </div>
          )}
        </Command>

        <Input type="date" placeholder="Pilih tanggal keberangkatan" />
        <Button className="text-white px-7 text-lg tracking-wide color-primary h-10">
          Cari
        </Button>
      </div>
    </>
  );
}
