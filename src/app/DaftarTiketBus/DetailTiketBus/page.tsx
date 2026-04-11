import { useParams } from "react-router-dom";
import RootLayout from "../../../layout/rootLayout/content";
import {
  Accessibility,
  AirVent,
  AirVentIcon,
  Armchair,
  Bath,
  BedDouble,
  Coffee,
  Cookie,
  Crown,
  Gem,
  Luggage,
  Plug2,
  ShieldCheck,
  Tv,
  Users2,
  Utensils,
  Wifi,
  Wind,
} from "lucide-react";
import LinkButton from "../../../components/global/linkButton/content";
import { useFilterTicketBus } from "@/store/useFilterTicketBus/state";
import { formatRupiah } from "@/hooks/convertRupiah";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function DetailTiketBus() {
  const { idTiketBus } = useParams();
  const allDataTicketBus = useFilterTicketBus(
    (state) => state.allDataTicketBus,
  );
  const isDetailTicketBus = allDataTicketBus.find(
    (idTicket) => idTicket.id === idTiketBus,
  );
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
                    <Dialog>
                      <DialogTrigger>
                        <img
                          src="/images/local/jadwalBus/bus_double_decker.webp"
                          alt={`tiket bus detail ${i}`}
                          className="size-full object-cover rounded-lg"
                        />
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Gambar ke-{i + 1}</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                          <img
                            src="/images/local/jadwalBus/bus_double_decker.webp"
                            alt={`gambar ke-${i}`}
                          />
                        </DialogDescription>
                      </DialogContent>
                    </Dialog>

                    {gambarTerakhir && sisaGambar > 0 && (
                      <Dialog>
                        <DialogTrigger>
                          <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center hover:bg-black/50 transition">
                            <span className="text-white font-bold text-sm md:text-lg">
                              +{sisaGambar}
                            </span>
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Gambar Selanjutnya</DialogTitle>
                          </DialogHeader>
                          <div>
                            <Carousel>
                              <CarouselContent>
                                {Array.from({ length: i }).map(
                                  (_, indexImg) => (
                                    <CarouselItem key={indexImg}>
                                      <img
                                        src="/images/local/jadwalBus/bus_double_decker.webp"
                                        alt={`gambar ke-${i}`}
                                      />
                                    </CarouselItem>
                                  ),
                                )}
                              </CarouselContent>
                              <CarouselPrevious />
                              <CarouselNext />
                            </Carousel>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
        {!isDetailTicketBus ? (
          <h1>Loading...</h1>
        ) : (
          <div className="mt-7 flex flex-col gap-5">
            <div className="flex justify-between">
              <div className="flex items-center gap-5">
                <div className="flex flex-col items-center">
                  {isDetailTicketBus.typeTiket === "Economy" ? (
                    <Users2 className="text-[#1A237E]" />
                  ) : isDetailTicketBus.typeTiket === "Executive" ? (
                    <Gem className="text-[#1A237E]" />
                  ) : (
                    <Crown className="text-[#1A237E]" />
                  )}
                  <img
                    src="/images/local/detailBus/double-decker-bus.png"
                    alt="icon"
                    className="size-12"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-wide">
                    {isDetailTicketBus?.typeTiket}
                  </h2>
                  <h2 className="text-sm text-slate-600">
                    MF Rent Car, Tour and Travel
                  </h2>
                </div>
              </div>
              <h3 className="text-[#2E7D32] text-xl font-bold">
                {formatRupiah(isDetailTicketBus?.harga)}
              </h3>
            </div>
            <div className="flex flex-wrap gap-8 md:justify-between md:gap-0">
              <div>
                <h4>Tipe Bus</h4>
                <h3 className="font-bold tracking-wide text-xl">
                  {isDetailTicketBus?.typeBus}
                </h3>
              </div>
              <div>
                <h4>Rute</h4>
                <h3 className="font-bold tracking-wide text-xl">
                  {isDetailTicketBus?.rute}
                </h3>
              </div>
              <div>
                <h4>Waktu Keberangkatan</h4>
                <h3 className="font-bold tracking-wide text-xl">
                  {isDetailTicketBus?.waktuBerangkat}{" "}
                  {isDetailTicketBus?.waktuKeberangkatan}
                </h3>
              </div>
              <div>
                <h4>Estimasi Sampai</h4>
                <h3 className="font-bold tracking-wide text-xl">
                  {isDetailTicketBus?.waktuEstimasi} Jam
                </h3>
              </div>
            </div>
            <div className="w-full h-1 bg-slate-300 rounded-md" />
            <div>
              <h1 className="text-xl mb-5">Fasilitas Bus</h1>
              <div className="grid grid-cols-4 gap-5 place-items-center md:grid-cols-5">
                {isDetailTicketBus?.fasilitas.map((item, i) => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const facilityIcons: Record<string, any> = {
                    AC: AirVent,
                    WiFi: Wifi,
                    "Reclining Seat": Armchair,
                    "USB Charger": Plug2,
                    Toilet: Bath,
                    "Sleeper Seat": BedDouble,
                    "Servis Makan": Utensils,
                    "Personal TV": Tv,
                    Snack: Cookie,
                    Bagasi: Luggage,
                    "Leg Rest": Accessibility,
                    Ventilasi: Wind,
                    Asuransi: ShieldCheck,
                    Kopi: Coffee,
                  };

                  const Icon = facilityIcons[item] ?? AirVentIcon;

                  return (
                    <div
                      className="flex flex-col gap-3 items-center hover:scale-105 transition-all"
                      key={i}
                    >
                      <div className="bg-slate-200 p-5 rounded-md">
                        <Icon className="size-10 text-[#1A237E]" />
                      </div>
                      <h2 className="text-center">{item}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full h-1 bg-slate-300 rounded-md" />
            <div>
              <h1 className="text-xl mb-3">Deskripsi</h1>
              <p className="text-justify">{isDetailTicketBus?.description}</p>
            </div>
            <div>
              <h1 className="text-xl mb-3">Kebijakan</h1>
              <ul className="list-disc list-inside">
                {isDetailTicketBus.policy.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <LinkButton href="/DaftarTiketBus" textButton="Kembali" />
    </RootLayout>
  );
}
