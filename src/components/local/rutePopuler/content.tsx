import { useGetDataTicketBus } from "@/store/useGetDataTiketBus/state";
import type { dataRutePopuler } from "@/types/typeDataRutePopuler";
import { ArrowRight, Bus, Clock } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/shallow";

export default function RutePopuler({ item }: { item: dataRutePopuler }) {
  const push = useNavigate();
  const { dataTicketBus, handleGetDataTicketBus } = useGetDataTicketBus(
    useShallow((state) => ({
      dataTicketBus: state.dataTicketBus,
      handleGetDataTicketBus: state.handleGetDataTicketBus,
    })),
  );

  useEffect(() => {
    handleGetDataTicketBus();
  }, [handleGetDataTicketBus]);

  function handleToDetailTicket() {
    const convertToArray = [item.dari, item.sampai].join(" - ");
    const toDetailTicket = dataTicketBus.find(
      (nameRute) => nameRute.rute === convertToArray,
    );
    if (toDetailTicket) {
      push(`/DaftarTiketBus/Detail/${toDetailTicket.id}`);
    }
  }
  return (
    <div
      className="group relative bg-white border border-slate-200 rounded-3xl p-6 transition-all duration-300 hover:border-[#1A237E] hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
      onClick={handleToDetailTicket}
    >
      {/* Badge Kategori */}
      <div className="absolute -top-3 left-6">
        <span className="bg-[#1A237E] text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg">
          {item.kategori}
        </span>
      </div>

      <div className="flex flex-col h-full">
        {/* Header: Rute */}
        <div className="flex items-center gap-3 truncate max-w-56 mt-2">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            <Bus size={24} />
          </div>
          <div>
            <h4 className="text-xs text-slate-400 tracking-wider">
              Dari {item.dari}
            </h4>
            <h3 className="font-bold text-slate-800 text-lg leading-snug tracking-wide">
              {item.sampai}
            </h3>
          </div>
        </div>

        <div className="text-sm text-slate-400 flex items-center gap-1.5 my-2">
          <Clock size={14} />{" "}
          <span>{item.totalJadwal} Jadwal tersedia hari ini</span>
        </div>

        {/* Info Layanan (Chip/Tags) */}
        <div className="flex flex-wrap gap-3 mb-6 max-w-56">
          {item.fasilitas.map((label, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"
            >
              {label}
            </span>
          ))}
        </div>

        {/* gambar kotanya */}
        <div className="absolute right-6 w-1/3 h-50">
          <img
            src="/images/local/beranda/bandung.webp"
            className="size-full object-cover rounded-lg"
          />
        </div>

        {/* Footer: Harga & Action */}
        <div className="pt-3 border-t border-slate-50 flex items-center justify-between mx-2">
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-semibold">
              Mulai Dari
            </p>
            <p className="text-xl font-extrabold text-[#2E7D32]">
              Rp {item.harga.toLocaleString()}
            </p>
          </div>

          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-400 group-hover:bg-[#1A237E] group-hover:text-white transition-all z-50 opacity-70 group-hover:opacity-100">
            <ArrowRight className="size-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
