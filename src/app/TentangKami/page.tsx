import RootLayout from "@/layout/rootLayout/content";
import { Eye, HelpingHand, Target } from "lucide-react";

export default function TentangKami() {
  return (
    <RootLayout>
      <h1 className="text-4xl">Tentang Kami</h1>
      <h3 className="text-slate-600 tracking-wider text-xl text-right">
        Mitra Perjalanan Anda
      </h3>
      <div className="flex justify-between">
        <div className="max-w-lg">
          <img
            src="/images/local/tentangKita/bus.png"
            alt="Bus"
            className="w-64 h-40 object-cover"
          />
          <p className="tracking-wide text-justify mt-3">
            MF Rent Car Tour and Travel hadir untuk memudahkan anda dalam
            menemukan rute, jadwal, dan perjalanan. kami bersedia berkomitmen
            untuk transparansi dan layanan berkualitas.
          </p>
        </div>
        <img
          src="/images/local/tentangKita/travel.png"
          alt="Travel"
          className="w-md h-72 object-contain"
        />
      </div>
      <div className="grid grid-cols-3 gap-5 my-10">
        <div className="flex flex-col items-center gap-3 bg-slate-50 rounded-md p-5 shadow-lg shadow-slate-400">
          <div className="p-4 bg-emerald-100 rounded-md">
            <Eye className="size-8 text-[#2E7D32]" />
          </div>
          <h1 className="text-xl font-semibold tracking-wider">Visi</h1>
          <p className="text-justify">
            MF Rent Car Tour and Travel hadir untuk memudahkan anda menemukan
            rute dan jadawa bus serta menyediakan kenyamanan terbaik bagi
            penumpang.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 bg-slate-50 rounded-md p-5 shadow-lg shadow-slate-400">
          <div className="p-4 bg-emerald-100 rounded-md">
            <Target className="size-8 text-[#2E7D32]" />
          </div>
          <h1 className="text-xl font-semibold tracking-wider">Misi</h1>
          <p className="text-justify">
            Kami buatkan anda menemukan jadwal dan kenyamanan terbaik bagi
            setiap perjalanan dengan pelayanan kami.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 bg-slate-50 rounded-md p-5 shadow-lg shadow-slate-400">
          <div className="p-4 bg-emerald-100 rounded-md">
            <HelpingHand className="size-8 text-[#2E7D32]" />
          </div>
          <h1 className="text-xl font-semibold tracking-wider">Nilai</h1>
          <p className="text-justify">
            MF Rent Car Tour and Travel hadir untuk memudahkan anda menemukan
            rute dan jadawa bus serta menyediakan kenyamanan terbaik bagi
            penumpang.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-2xl tracking-wider mb-5">Kantor Kami</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31729.25826480949!2d106.99741071127735!3d-6.242992599690391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698e85671cc023%3A0x68a9d9fdba23a7e7!2sKec.%20Bekasi%20Tim.%2C%20Kota%20Bks%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1775828568155!5m2!1sid!2sid"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-56 rounded-md"
        ></iframe>
        <h3 className="text-right text-md mt-3">
          Jl Jend. Sudirman, Bekasi Timur
        </h3>
      </div>
    </RootLayout>
  );
}
