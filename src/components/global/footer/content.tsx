import {
  Building2,
  ClipboardList,
  Facebook,
  HelpingHand,
  Home,
  Instagram,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircleQuestion,
  Phone,
  Route,
  ScrollText,
  ShieldCheck,
  XIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-blue-100">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-3 gap-y-10 gap-x-5 pt-10 pb-5">
          <div className="flex items-center gap-x-3">
            <img src="/images/global/logo.png" alt="Logo" className="size-40" />
            <div className="h-4/5 w-1 bg-slate-700 rounded-lg" />
            <h1>Portal Informasi Tiket Bus Terpercaya</h1>
          </div>

          <div>
            <h1>Navigasi Utama</h1>
            <ul className="flex flex-col gap-1.5">
              <li>
                <Home className="size-5 inline-block mr-2" />
                <Link to="#">Beranda</Link>
              </li>
              <li>
                <ClipboardList className="size-5 inline-block mr-2" />
                <Link to="#">Daftar Bus</Link>
              </li>
              <li>
                <Route className="size-5 inline-block mr-2" />
                <Link to="#">Rute Populer</Link>
              </li>
              <li>
                <Building2 className="size-5 inline-block mr-2" />
                <Link to="#">Tentang</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1>Layanan & Bantuan</h1>
            <ul className="flex flex-col gap-1.5">
              <li>
                <MessageCircleQuestion className="size-5 inline-block mr-2" />
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <HelpingHand className="size-5 inline-block mr-2" />
                <Link to="#">Pusat Bantuan</Link>
              </li>
              <li>
                <Lightbulb className="size-5 inline-block mr-2" />
                <Link to="#">Panduan Pemesanan</Link>
              </li>
              <li>
                <ScrollText className="size-5 inline-block mr-2" />
                <Link to="#">Syarat & Ketentuan</Link>
              </li>
              <li>
                <ShieldCheck className="size-5 inline-block mr-2" />
                <Link to="#">Kebijakan Privasi</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1>Kontak Kami</h1>
            <ul className="flex flex-col gap-1.5">
              <li>
                <Phone className="size-5 inline-block mr-2" />
                <span>No tlp : 081255725312</span>
              </li>
              <li>
                <Mail className="size-5 inline-block mr-2" />
                <span>
                  Email : <Link to="#">info@siBusTiket.com</Link>
                </span>
              </li>
              <li>
                <MapPin className="size-5 inline-block mr-2" />
                <span>Alamat : Jl Jend. Sudirman, Jakarta Selatan</span>
              </li>
            </ul>
          </div>
          <div>
            <h1>Media Sosial</h1>
            <ul className="flex flex-col gap-1.5">
              <li className="flex items-center gap-2">
                <Instagram className="size-5" />
                <Link to="#">@SiBusTiket_id</Link>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="size-5" />
                <Link to="#">@SiBusTiket_id</Link>
              </li>
              <li className="flex items-center gap-2">
                <XIcon className="size-5" />
                <Link to="#">@SiBusTiket_id</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="bg-slate-400 w-full h-1 rounded-md" />
          <h3 className="py-2 text-sm">
            Copyright{" "}
            <span className="text-blue-800 font-semibold">{currentYear} </span>|{" "}
            <span>Portal tiket informasi terpercaya</span>
          </h3>
        </div>
      </div>
    </footer>
  );
}
