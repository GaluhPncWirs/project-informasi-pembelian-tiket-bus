import RootLayout from "../../layout/rootLayout/content";
import { SlidersHorizontal, TicketPercent, Verified } from "lucide-react";
import RutePopulerLayout from "../../components/local/rutePopulerLayout/content";
import { Link } from "react-router-dom";
import CariJadwalBus from "../../components/local/cariJadwalBus/content";

export default function Beranda() {
  return (
    <>
      <header className="heroSection">
        <div className="absolute bottom-0 h-full flex items-center mx-16">
          <h1 className="text-4xl font-bold tracking-wide max-w-sm">
            Temukan Informasi Harga Tiket Bus dengan Mudah
          </h1>
        </div>
      </header>
      <RootLayout>
        <div className="bg-white p-5 w-4/5 mx-auto -mt-16 rounded-md shadow-lg relative">
          <CariJadwalBus />
        </div>
        <div className="mt-8">
          <h1 className="text-2xl">Rute Populer</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            veniam dignissimos ab asperiores esse recusandae aperiam dolores
            necessitatibus facere.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-5">
            <RutePopulerLayout rute="Jakarta - Bandung" harga="250.000" />
            <RutePopulerLayout rute="Surabaya - Malang" harga="500.000" />
            <RutePopulerLayout rute="Palembang - Lampung" harga="350.000" />
            <RutePopulerLayout rute="Bandung - Ciamis" harga="150.000" />
            <RutePopulerLayout rute="Medan - Aceh" harga="650.000" />
            <RutePopulerLayout rute="Solo - Trenggalek" harga="400.000" />
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl">Mitra Operator</h1>
          <div className="flex items-center justify-around mt-5">
            <img src="/images/global/logo.png" alt="Logo" className="w-1/6" />
            <p className="w-1/2 text-justify">
              Satu-satunya mitra operator untuk rute ini menawarkan kenyamanan
              dan keandalan armada bus terbaru. Armanda PO nusantara mas selalu
              siap melayani perjalanan anda dengan layanan terbaik.
            </p>
            <Link
              to="/Tentang"
              className="py-2 px-5 rounded-md text-white color-primary"
            >
              Lihat Informasi Detail
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl">Kenapa Memilih siBusTiket?</h1>
          <div className="grid grid-cols-3 gap-5 mt-5">
            <div className="border border-slate-400 rounded-md p-3">
              <SlidersHorizontal className="size-12 mb-2" />
              <h2 className="font-semibold text-lg tracking-wide">
                Beragam Pilihan Bus
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem eligendi et velit cumque consequatur eius!
              </p>
            </div>
            <div className="border border-slate-400 rounded-md p-3">
              <TicketPercent className="size-12 mb-2" />
              <h2 className="font-semibold text-lg tracking-wide">
                Harga Termurah
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem eligendi et velit cumque consequatur eius!
              </p>
            </div>
            <div className="border border-slate-400 rounded-md p-3">
              <Verified className="size-12 mb-2" />
              <h2 className="font-semibold text-lg tracking-wide">
                Sertifikasi Mitra Terverifikasi
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem eligendi et velit cumque
              </p>
            </div>
          </div>
        </div>
      </RootLayout>
    </>
  );
}
