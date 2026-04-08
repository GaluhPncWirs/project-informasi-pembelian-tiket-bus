import { Button } from "@/components/ui/button";
import type { dataRutePopuler } from "@/types/typeDataRutePopuler";
import { ArrowRight, Bus, Clock } from "lucide-react";

type PropsRutePopuler = {
  item: dataRutePopuler;
  key: number;
};

export default function RutePopuler({ item, key }: PropsRutePopuler) {
  return (
    <div
      className="group relative bg-white border border-slate-200 rounded-3xl p-6 transition-all duration-300 hover:border-[#1A237E] hover:shadow-xl hover:shadow-blue-500/10"
      key={key}
    >
      {/* Badge Kategori */}
      <div className="absolute -top-3 left-6">
        <span className="bg-[#1A237E] text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg">
          {item.kategori}
        </span>
      </div>

      <div className="flex flex-col h-full">
        {/* Header: Rute */}
        <div className="flex items-center justify-between mb-4 mt-2">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Bus size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg leading-tight">
                {item.rute}
              </h3>
              <p className="text-sm text-slate-400 flex items-center gap-1 mt-1">
                <Clock size={14} /> {item.totalJadwal} Jadwal tersedia hari ini
              </p>
            </div>
          </div>
        </div>

        {/* Info Layanan (Chip/Tags) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {item.layanan.map((label, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Footer: Harga & Action */}
        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-semibold">
              Mulai Dari
            </p>
            <p className="text-xl font-extrabold text-[#2E7D32]">
              Rp {item.harga.toLocaleString()}
            </p>
          </div>

          <Button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
