import { BusFront } from "lucide-react";

type RutePopuler = {
  rute: string;
  harga: string;
};

export default function RutePopulerLayout(props: RutePopuler) {
  const { rute, harga } = props;
  return (
    <div className="border border-slate-400 rounded-md p-3 flex flex-col-reverse justify-center gap-y-2 md:gap-y-0 md:flex-row md:items-center md:justify-between">
      <div>
        <h1>{rute}</h1>
        <h2 className="text-sm">Harga Mulai Dari IDR {harga}</h2>
      </div>
      <BusFront className="size-7" />
    </div>
  );
}
