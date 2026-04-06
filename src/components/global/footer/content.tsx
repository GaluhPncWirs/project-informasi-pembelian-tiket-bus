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
    <footer className="bg-blue-50 shadow-lg shadow-slate-900">
      <div className="w-11/12 mx-auto pt-10 md:w-10/12">
        <div className="flex items-center gap-x-4">
          <img
            src="/images/global/full_logo.png"
            alt="Logo"
            className="size-40 object-contain"
          />
          <div className="h-28 w-0.5 bg-slate-500 rounded-lg" />
          <h1 className="max-w-xs">
            Portal Informasi Tiket Bus Terlengkap dan Terpercaya
          </h1>
        </div>

        <div className="grid gap-y-10 gap-x-5 py-5 grid-cols-2 md:grid-cols-3">
          <div>
            <h1>Navigasi Utama</h1>
            <ul className="flex flex-col gap-1.5">
              <li>
                <Home className="size-5 inline-block mr-2" />
                <Link to="#" className="texsClickable">
                  Beranda
                </Link>
              </li>
              <li>
                <ClipboardList className="size-5 inline-block mr-2" />
                <Link to="#" className="texsClickable">
                  Daftar Tiket
                </Link>
              </li>
              <li>
                <Route className="size-5 inline-block mr-2" />
                <Link to="#" className="texsClickable">
                  Rute Populer
                </Link>
              </li>
              <li>
                <Building2 className="size-5 inline-block mr-2" />
                <Link to="#" className="texsClickable">
                  Tentang
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1>Layanan & Bantuan</h1>
            <ul className="flex flex-col gap-1.5">
              <li>
                <MessageCircleQuestion className="size-5 inline-block mr-2" />
                <Link to="#" className="texsClickable">
                  FAQ
                </Link>
              </li>
              <li>
                <HelpingHand className="size-5 inline-block mr-2" />
                <Link to="#" className="texsClickable">
                  Pusat Bantuan
                </Link>
              </li>
              <li>
                <Lightbulb className="size-5 inline-block mr-2" />
                <Link to="#" className="texsClickable">
                  Panduan Pemesanan
                </Link>
              </li>
              <li>
                <ScrollText className="size-5 inline-block mr-2" />
                <Link to="#" className="texsClickable">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <ShieldCheck className="size-5 inline-block mr-2" />
                <Link to="#" className="texsClickable">
                  Kebijakan Privasi
                </Link>
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
                <span>Email : MFTravel@inform.com</span>
              </li>
              <li>
                <MapPin className="size-5 inline-block mr-2" />
                <span>Alamat : Jl Jend. Sudirman, Bekasi Timur</span>
              </li>
            </ul>
          </div>
          <div>
            <h1>Media Sosial</h1>
            <ul className="flex flex-col gap-1.5">
              <li className="flex items-center gap-2">
                <Instagram className="size-5" />
                <Link to="#" className="texsClickable">
                  @MFTravel_id
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="size-5" />
                <Link to="#" className="texsClickable">
                  @MFTravel_id
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <XIcon className="size-5" />
                <Link to="#" className="texsClickable">
                  @MFTravel_id
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="bg-slate-300 w-full h-1 rounded-md" />
          <h3 className="py-2 text-sm">
            Copyright{" "}
            <span className="text-blue-800 font-semibold">{currentYear} </span>|{" "}
            <span>MF Rent Car Bus, Tour and Travel All rights reserved</span>
          </h3>
        </div>
      </div>
    </footer>
  );
}
