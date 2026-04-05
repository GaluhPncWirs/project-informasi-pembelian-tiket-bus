import { CalendarClock } from "lucide-react";
import { formatRupiah } from "../../../hooks/convertRupiah";
import LinkButton from "../../global/linkButton/content";

type dataTicket = {
  srcImg: string;
  typeTiket: string;
  rute: string;
  waktuBerangkat: string;
  waktuEstimasi: string;
  waktuKeberangkatan: string;
  tglBerangkat: string;
  harga: number;
  detailTiket: string;
};

export default function PilihTiketBus(props: dataTicket) {
  const {
    srcImg,
    typeTiket,
    rute,
    waktuBerangkat,
    waktuEstimasi,
    waktuKeberangkatan,
    tglBerangkat,
    harga,
    detailTiket,
  } = props;
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-6 p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full md:w-1/4">
        <img
          src={srcImg}
          alt="Bus"
          className="rounded-lg w-full h-full object-cover min-h-30"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0 md:pr-6">
        <span className="text-sm font-bold uppercase traczking-wider text-[#2E7D32] mb-1">
          {typeTiket}
        </span>
        <h3 className="text-lg font-bold text-slate-800">{rute}</h3>

        <div className="mt-2 space-y-1 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900 flex items-center gap-1.5">
              <CalendarClock /> <span>{waktuBerangkat}</span>
            </span>
            <span className="text-slate-400 text-xs">|</span>
            <span>
              Estimasi{" "}
              <span className="font-bold text-[#2E7D32]">
                {waktuEstimasi} jam
              </span>
            </span>
          </div>
          <p className="flex items-center gap-1.5 mt-2.5">
            <span className="px-2 py-0.5 bg-slate-100 rounded text-[10px] font-bold uppercase">
              {waktuKeberangkatan}
            </span>
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/4 flex flex-col justify-between text-right">
        <div className="mb-3">
          <p className="text-xs text-slate-500 mb-1">{tglBerangkat}</p>
          <p className="text-xs font-medium text-slate-400">Harga mulai dari</p>
          <p className="text-2xl font-bold text-[#2E7D32]">
            {formatRupiah(harga)}
          </p>
        </div>

        <LinkButton href={detailTiket} textButton="Lihat Detail" />
      </div>
    </div>
  );
}
