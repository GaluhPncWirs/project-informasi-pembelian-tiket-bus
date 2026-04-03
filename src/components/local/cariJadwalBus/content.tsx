import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useEffect, useState } from "react";
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
import { useFilterTicketBus } from "../../../store/useFilterTicketBus/state";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function CariJadwalBus() {
  const [kotaAsal, setKotaAsal] = useState<string>("");
  const [kotaTujuan, setKotaTujuan] = useState<string>("");
  const [isOpenSuggest, setIsOpenSuggest] = useState<boolean>(false);
  const [kotaYangDipilih, setKotaYangDipilih] = useState<string[]>([]);
  const [tanggalBerangkat, setTanggalBerangkat] = useState<string>("");
  const { pathname } = useLocation();
  const redirect = useNavigate();

  const { setHandleInputCariTiketBus, hasilCariKotaAsal, hasilCariKotaTujuan } =
    useSearchCity(
      useShallow((state) => ({
        setHandleInputCariTiketBus: state.setHandleInputCariTiketBus,
        hasilCariKotaAsal: state.hasilCariKotaAsal,
        hasilCariKotaTujuan: state.hasilCariKotaTujuan,
      })),
    );

  const setHandleSearchTicketBus = useFilterTicketBus(
    (state) => state.setHandleSearchTicketBus,
  );
  const dataTicketBus = useFilterTicketBus((prev) => prev.dataTicketBus);
  const searchAttempted = useFilterTicketBus((prev) => prev.searchAttempted);
  const setSearchAttempted = useFilterTicketBus(
    (prev) => prev.setSearchAttempted,
  );

  useEffect(() => {
    if (searchAttempted && dataTicketBus.length === 0) {
      toast("❌ Terjadi Kesalahan", {
        description: "Jadwal tiket bus yang dicari tidak ada",
      });
      setSearchAttempted(false);
    }
  }, [dataTicketBus, searchAttempted]);

  function handleKlikKota(tipeKota: "asal" | "tujuan", item: string) {
    if (tipeKota === "asal") {
      setKotaAsal(item);
    } else {
      setKotaTujuan(item);
    }

    setKotaYangDipilih((prev) => {
      const newSelection = [...prev];
      if (tipeKota === "asal") {
        newSelection[0] = item;
      } else {
        newSelection[1] = item;
      }

      return newSelection.slice(0, 2);
    });

    setIsOpenSuggest(false);
  }

  function handleInputCariKota(tipeKota: "asal" | "tujuan", value: string) {
    setHandleInputCariTiketBus(value, tipeKota);
    if (tipeKota === "asal") {
      setKotaAsal(value);
      if (value === "") {
        setIsOpenSuggest(false);
        return;
      }
    } else {
      setKotaTujuan(value);
      if (value === "") {
        setIsOpenSuggest(false);
        return;
      }
    }

    setIsOpenSuggest(true);
  }

  function handleSearchScheduleBus() {
    setSearchAttempted(true);
    setHandleSearchTicketBus(kotaYangDipilih, tanggalBerangkat);

    if (pathname === "/Beranda") {
      redirect("/DaftarTiketBus");
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
            onValueChange={(value) => handleInputCariKota("asal", value)}
          />
          {isOpenSuggest && (
            <div>
              {kotaAsal !== "" && (
                <CommandList className="p-2 bg-white absolute z-10 max-h-36 overflow-y-auto rounded-b-lg">
                  {hasilCariKotaAsal.length > 0 ? (
                    <CommandGroup heading="Kota Asal">
                      {hasilCariKotaAsal.map((item, i) => (
                        <CommandItem
                          className="cursor-pointer mb-1"
                          key={i}
                          onSelect={() => handleKlikKota("asal", item)}
                        >
                          {item}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  ) : (
                    <CommandEmpty className="px-5">
                      Kota Tidak Tersedia.
                    </CommandEmpty>
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
            onValueChange={(value) => handleInputCariKota("tujuan", value)}
          />
          {isOpenSuggest && (
            <div>
              {kotaTujuan !== "" && (
                <CommandList className="p-2 bg-white shadow-md absolute z-10 max-h-36 overflow-y-auto rounded-b-md">
                  {hasilCariKotaTujuan.length > 0 ? (
                    <CommandGroup heading="Kota Tujuan">
                      {hasilCariKotaTujuan.map((item, i) => (
                        <CommandItem
                          className="cursor-pointer mb-1"
                          key={i}
                          onSelect={() => handleKlikKota("tujuan", item)}
                        >
                          {item}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  ) : (
                    <CommandEmpty className="px-5">
                      Kota Tidak Tersedia.
                    </CommandEmpty>
                  )}
                </CommandList>
              )}
            </div>
          )}
        </Command>

        <Input
          type="date"
          placeholder="Pilih tanggal keberangkatan"
          onChange={(e) => setTanggalBerangkat(e.target.value)}
        />
        <Button
          className="text-white px-7 text-lg tracking-wide color-primary h-10"
          onClick={handleSearchScheduleBus}
        >
          Cari
        </Button>
      </div>
    </>
  );
}
