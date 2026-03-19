import { Facebook, Instagram, Mail, MapPin, Phone, XIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-100">
      <div className="grid grid-cols-3 w-10/12 mx-auto py-10 gap-y-10 gap-x-5">
        <div className="flex items-center gap-x-3">
          <img src="/images/global/logo.png" alt="Logo" className="size-40" />
          <div className="h-4/5 w-1 bg-slate-700 rounded-lg" />
          <h1>Portal Informasi Tiket Bus Terpercaya</h1>
        </div>

        <div>
          <h1>Navigasi Utama</h1>
          <ul>
            <li>
              <Link to="#">Beranda</Link>
            </li>
            <li>
              <Link to="#">Daftar Bus</Link>
            </li>
            <li>
              <Link to="#">Rute Populer</Link>
            </li>
            <li>
              <Link to="#">Syarat & Ketentuan</Link>
            </li>
            <li>
              <Link to="#">Kebijakan Privasi</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>Layanan & Bantuan</h1>
          <ul>
            <li>
              <Link to="#">FAQ</Link>
            </li>
            <li>
              <Link to="#">Pusat Bantuan</Link>
            </li>
            <li>
              <Link to="#">Panduan Pemesanan</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>Kontak Kami</h1>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <Phone className="size-5" />
              <span>No tlp : 081255725312</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-5" />
              <span>
                Email : <Link to="#">info@siBusTiket.com</Link>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-5" />
              <span>Alamat : Jl Jend. Sudirman, Jakarta Selatan</span>
            </li>
          </ul>
        </div>
        <div>
          <h1>Media Sosial</h1>
          <ul className="flex flex-col gap-2">
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
    </footer>
  );
}
