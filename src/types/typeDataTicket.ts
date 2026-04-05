export type dataTicket = {
  id: string;
  srcImg: string;
  typeBus: string;
  typeTiket: string;
  rute: string;
  waktuBerangkat: string;
  waktuEstimasi: string;
  waktuKeberangkatan: string;
  tglBerangkat: string;
  harga: number;
  detailTiket: string;
  description: string;
  policy: string[];
  fasilitas: {
    label: string;
    icon: string;
  }[];
};
