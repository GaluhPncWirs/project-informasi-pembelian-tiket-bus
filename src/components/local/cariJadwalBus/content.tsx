import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useEffect, useState } from "react";
import { kotaDiPulauJawa } from "../../../data/kotaPulauJawa";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../ui/command";

export default function CariJadwalBus() {
  const [kotaAsal, setKotaAsal] = useState<string>("");
  const [kotaTujuan, setKotaTujuan] = useState<string>("");
  const [hasilCariKotaAsal, sethasilCariKotaAsal] = useState<string[]>([]);
  const [hasilCariKotaTujuan, sethasilCariKotaTujuan] = useState<string[]>([]);
  const [isOpenSuggest, setIsOpenSuggest] = useState<boolean>(false);
  const [kotaAsalYangDipilih, setKotaAsalYangDipilih] = useState<string | null>(
    null,
  );
  const [kotaTujuanYangDipilih, setKotaTujuanYangDipilih] = useState<
    string | null
  >(null);

  function handleCariInputKotaAsal(value: string) {
    setKotaAsal(value);
    if (value !== "") {
      const cariKota = kotaDiPulauJawa.filter((item) =>
        item.toLowerCase().startsWith(value.toLowerCase()),
      );
      sethasilCariKotaAsal(cariKota);
    } else {
      sethasilCariKotaAsal([]);
    }
  }

  function handleCariInputKotaTujuan(value: string) {
    setKotaTujuan(value);
    if (value !== "") {
      const cariKota = kotaDiPulauJawa.filter((item) =>
        item.toLowerCase().startsWith(value.toLowerCase()),
      );
      sethasilCariKotaTujuan(cariKota);
    } else {
      sethasilCariKotaTujuan([]);
    }
  }

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

  useEffect(() => {
    if (kotaAsal === "" || kotaTujuan === "") {
      setKotaAsalYangDipilih(null);
      setKotaTujuanYangDipilih(null);
      setIsOpenSuggest(true);
    }
  }, [kotaAsal, kotaTujuan]);

  return (
    <>
      <h1 className="text-xl">Cari Jadwal Bus</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-3">
        <Command>
          <CommandInput
            placeholder="Kota asal"
            value={kotaAsal}
            onValueChange={(value) => handleCariInputKotaAsal(value)}
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
            onValueChange={(value) => handleCariInputKotaTujuan(value)}
          />
          {isOpenSuggest && (
            <div>
              {kotaTujuan !== "" && (
                <CommandList className="p-2 bg-slate-50 absolute z-10 max-h-36 overflow-y-auto rounded-b-lg">
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
