import { Link, useParams } from "react-router-dom";
import RootLayout from "../../../layout/rootLayout/content";
import { AirVentIcon, Armchair, Plug2, Toilet, Wifi } from "lucide-react";

export default function DetailTiketBus() {
  const { idTiketBus } = useParams();
  return (
    <RootLayout>
      <div className="mb-10">
        <div>
          <img
            src="/images/local/daftarBus/bus_double_decker.webp"
            alt="tiket bus detail"
            className="rounded-lg w-full max-h-96 object-cover mb-5 shadow-md shadow-slate-700"
          />
          <div className="flex items-center justify-between">
            {Array.from({ length: 5 }).map((_, i: number) => (
              <img
                key={i}
                src="/images/local/daftarBus/bus_double_decker.webp"
                alt="tiket bus detail"
                className="w-1/6 rounded-lg"
              />
            ))}
          </div>
        </div>
        <div className="mt-7 flex flex-col gap-5">
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl">Double Decker</h1>
              <h2 className="text-sm text-slate-600">
                Lorem ipsum dolor, sit amet consectetur
              </h2>
            </div>
            <h3 className="text-[#2E7D32] text-xl font-bold tracking-wide">
              RP 150.000
            </h3>
          </div>
          <div className="flex items-center gap-10">
            <div>
              <h4>Tipe Bus</h4>
              <h3 className="font-bold tracking-wide text-xl">Executive</h3>
            </div>
            <div>
              <h4>Rute</h4>
              <h3 className="font-bold tracking-wide text-xl">
                Jakarta - Bandung
              </h3>
            </div>
            <div>
              <h4>Waktu Keberangkatan</h4>
              <h3 className="font-bold tracking-wide text-xl">18:00 Malam</h3>
            </div>
          </div>
          <div className="w-full h-1 bg-slate-300 rounded-md" />
          <div>
            <h1 className="text-xl mb-5">Fasilitas Bus</h1>
            <div className="grid grid-cols-5 gap-5 place-items-center">
              <div className="flex flex-col gap-3 items-center">
                <div className="bg-slate-200 p-5 rounded-md">
                  <AirVentIcon className="size-10 text-[#1A237E]" />
                </div>
                <h2>AC</h2>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <div className="bg-slate-200 p-5 rounded-md">
                  <Wifi className="size-10 text-[#1A237E]" />
                </div>
                <h2>WI-FI</h2>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <div className="bg-slate-200 p-5 rounded-md">
                  <Armchair className="size-10 text-[#1A237E]" />
                </div>
                <h2>Kursi Empuk</h2>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <div className="bg-slate-200 p-5 rounded-md">
                  <Plug2 className="size-10 text-[#1A237E]" />
                </div>
                <h2>Soket</h2>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <div className="bg-slate-200 p-5 rounded-md">
                  <Toilet className="size-10 text-[#1A237E]" />
                </div>
                <h2>Toilet</h2>
              </div>
            </div>
          </div>
          <div className="w-full h-1 bg-slate-300 rounded-md" />
          <div>
            <h1 className="text-xl mb-3">Deskripsi</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              hic pariatur dolorem autem natus nisi suscipit, labore soluta
              recusandae, voluptas maiores repudiandae aperiam quas. Hic earum
              inventore doloremque fugit obcaecati? Tempore quibusdam optio sed
              fugit eveniet quod nulla voluptate inventore blanditiis. Vitae quo
              cum, quas quod, nobis debitis quaerat obcaecati itaque voluptate
              sunt odit similique quasi consectetur quam repellat expedita. Enim
              maiores est asperiores aspernatur quia recusandae reprehenderit
              vero minus quod ipsum, aliquam voluptatem illo ex ea aperiam et
              mollitia nam, animi iste optio autem distinctio! Nemo officiis
              placeat blanditiis? Odit magni voluptates, facilis eum repudiandae
              quae delectus, ad laboriosam consequatur saepe totam maxime.
              Repudiandae, praesentium distinctio, corrupti id illum aspernatur
              sequi voluptates, debitis porro nobis sunt exercitationem vitae
              officiis?
            </p>
          </div>
          <div>
            <h1 className="text-xl mb-3">Kebijakan</h1>
            <ul className="list-disc list-inside">
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum dolor</li>
            </ul>
          </div>
        </div>
      </div>
      <Link to="/DaftarBus">Kembali</Link>
    </RootLayout>
  );
}
