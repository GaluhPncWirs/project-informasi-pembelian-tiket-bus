import { Link } from "react-router-dom";

export default function PilihTiketBus() {
  return (
    <div className="flex items-center gap-3 px-3 py-4 bg-slate-200 rounded-md">
      <img
        src="images/local/daftarBus/bus_double_decker.webp"
        alt="Bus"
        className="rounded-md w-1/3 object-cover"
      />
      <div>
        <h1>Bis Double Decker</h1>
        <h3 className="font-semibold tracking-wide">Jakarta - Bandung</h3>
        <h3>19:00 Estimasi Perjalanan 25 Menit</h3>
        <h4 className="mt-1.5 font-semibold tracking-wide">Malam</h4>
      </div>
      <div className="bg-white w-0.5 rounded-md h-32" />
      <div>
        <h2 className="text-end mb-3">15 April 2026</h2>
        <h3 className="font-semibold">Harga</h3>
        <h1 className="text-2xl text-[#2E7D32] mb-3">Rp 100.000</h1>
        <Link to="#" className="bg-primary py-1.5 px-8 text-white rounded-md">
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}
