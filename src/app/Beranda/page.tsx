import RootLayout from "../../layout/rootLayout/content";
import { Bus, SlidersHorizontal, TicketPercent, Verified } from "lucide-react";
import { Link } from "react-router-dom";
import CariJadwalBus from "../../components/local/cariJadwalBus/content";
import RutePopuler from "@/components/local/rutePopuler/content";
import { ruteTerpopuler } from "@/data/dataRuteBusPopuler/data";
import { useState } from "react";
import PaginationListTicketBus from "@/layout/pagination/content";

export default function Beranda() {
  const ITEM_PER_PAGE = 2;
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <>
      <header className="heroSection">
        <div className="absolute h-full flex justify-center mx-7 flex-col max-w-md gap-y-3.5 drop-shadow-sm drop-shadow-blue-200 md:mx-10 lg:mx-16">
          <h3 className="text-xl tracking-wide font-medium text-[#1A237E]">
            Tour & Travel di Kota Bekasi
          </h3>
          <h1 className="text-4xl font-semibold tracking-wider">
            Temukan Informasi Harga Tiket Bus dengan Mudah, di{" "}
            <span className="text-[#1A237E]">MF Rent Car Tour and Travel!</span>
          </h1>
          <h5 className="tracking-wide">
            Rencanakan Perjalanan Anda Bersama Kami!
          </h5>
        </div>
      </header>
      <RootLayout>
        <div className="bg-white p-5 mx-auto -mt-48 rounded-md shadow-lg relative md:w-11/12 lg:w-10/12">
          <CariJadwalBus />
        </div>
        <div className="mt-8">
          <h1 className="text-2xl">Rute Populer</h1>
          <p className="text-justify">
            Jelajahi rute-rute favorit pilihan jutaan penumpang dengan jadwal
            keberangkatan paling lengkap dan layanan armada terbaik setiap
            harinya.
          </p>
          <div>
            <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-7">
              {ruteTerpopuler
                .slice(
                  (currentPage - 1) * ITEM_PER_PAGE,
                  currentPage * ITEM_PER_PAGE,
                )
                .map((item) => (
                  <RutePopuler item={item} />
                ))}
            </div>
            <PaginationListTicketBus
              dataTicketBus={ruteTerpopuler}
              ITEM_PER_PAGE={ITEM_PER_PAGE}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl">Mitra Operator</h1>
          <div className="flex flex-col items-baseline md:items-center md:flex-row md:justify-around mt-5 gap-y-5">
            <img
              src="/images/global/full_logo.png"
              alt="Logo"
              className="w-1/3 object-contain md:w-1/6"
            />
            <p className="md:w-1/2 text-justify">
              Satu-satunya mitra operator untuk rute ini menawarkan kenyamanan
              dan keandalan armada bus terbaru. Armanda PO nusantara mas selalu
              siap melayani perjalanan anda dengan layanan terbaik.
            </p>
            <Link
              to="/TentangKami"
              className="py-2 px-5 rounded-md text-white color-primary"
            >
              Lihat Informasi Detail
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl">Kenapa Memilih siBusTiket?</h1>
          <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 md:grid-cols-3">
            <div className="border border-slate-400 rounded-md p-3">
              <div className="flex gap-3 mb-2">
                <SlidersHorizontal className="size-10" />
                <Bus className="size-10" />
              </div>
              <h2 className="font-semibold text-lg tracking-wide">
                Beragam Pilihan Bus
              </h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem eligendi et velit cumque consequatur eius!
              </p>
            </div>
            <div className="border border-slate-400 rounded-md p-3">
              <TicketPercent className="size-10 mb-2" />

              <h2 className="font-semibold text-lg tracking-wide">
                Harga Termurah
              </h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem eligendi et velit cumque consequatur eius!
              </p>
            </div>
            <div className="border border-slate-400 rounded-md p-3">
              <Verified className="size-10 mb-2" />
              <h2 className="font-semibold text-lg tracking-wide">
                Sertifikasi Mitra Terverifikasi
              </h2>
              <p className="text-justify">
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
