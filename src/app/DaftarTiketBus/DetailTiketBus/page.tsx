// import { useParams } from "react-router-dom";
import RootLayout from "../../../layout/rootLayout/content";
import { AirVentIcon, Armchair, Plug2, Toilet, Wifi } from "lucide-react";
import LinkButton from "../../../components/global/linkButton/content";

export default function DetailTiketBus() {
  // const { idTiketBus } = useParams();
  return (
    <RootLayout>
      <div className="mb-10">
        <div>
          <img
            src="/images/local/jadwalBus/bus_double_decker.webp"
            alt="tiket bus detail"
            className="rounded-lg w-full max-h-96 object-cover mb-5 shadow-md shadow-slate-700"
          />
          <div className="flex items-center gap-3">
            {Array.from({ length: 10 })
              .slice(0, 5)
              .map((_, i: number) => {
                const gambarTerakhir = i === 4;
                const sisaGambar = 10 - 4;
                return (
                  <div
                    key={i}
                    className="relative w-1/3 aspect-video cursor-pointer"
                  >
                    <img
                      src="/images/local/jadwalBus/bus_double_decker.webp"
                      alt={`tiket bus detail ${i}`}
                      className="size-full object-cover rounded-lg"
                    />

                    {gambarTerakhir && sisaGambar > 0 && (
                      <div
                        className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center hover:bg-black/50 transition"
                        onClick={() => console.log("buka selengkapnya")}
                      >
                        <span className="text-white font-bold text-sm md:text-lg">
                          +{sisaGambar}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="mt-7 flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <img
                src="/images/local/detailBus/double-decker-bus.png"
                alt="icon"
                className="size-12"
              />
              <div>
                <h2 className="text-2xl font-bold tracking-wide">
                  Double Decker
                </h2>
                <h2 className="text-sm text-slate-600">Lorem ipsum dolor</h2>
              </div>
            </div>
            <h3 className="text-[#2E7D32] text-xl font-bold">RP 150.000</h3>
          </div>
          <div className="grid grid-cols-2 gap-7 md:gap-0 md:grid-cols-3">
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
            <div className="grid grid-cols-4 gap-5 place-items-center md:grid-cols-5">
              <div className="flex flex-col gap-3 items-center hover:scale-105 transition-all">
                <div className="bg-slate-200 p-5 rounded-md">
                  <AirVentIcon className="size-10 text-[#1A237E]" />
                </div>
                <h2>AC</h2>
              </div>
              <div className="flex flex-col gap-3 items-center hover:scale-105 transition-all">
                <div className="bg-slate-200 p-5 rounded-md">
                  <Wifi className="size-10 text-[#1A237E]" />
                </div>
                <h2>WI-FI</h2>
              </div>
              <div className="flex flex-col gap-3 items-center hover:scale-105 transition-all">
                <div className="bg-slate-200 p-5 rounded-md">
                  <Armchair className="size-10 text-[#1A237E]" />
                </div>
                <h2>Kursi Rebah</h2>
              </div>
              <div className="flex flex-col gap-3 items-center hover:scale-105 transition-all">
                <div className="bg-slate-200 p-5 rounded-md">
                  <Plug2 className="size-10 text-[#1A237E]" />
                </div>
                <h2>Soket</h2>
              </div>
              <div className="flex flex-col gap-3 items-center hover:scale-105 transition-all">
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
      <LinkButton href="/DaftarTiketBus" textButton="Kembali" />
    </RootLayout>
  );
}
