import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center px-14 justify-between h-24 fixed top-0 w-full bg-white z-50 shadow-md">
      <img src="/images/global/logo.png" alt="Logo" className="size-20" />
      <ul className="flex items-center justify-around text-lg font-medium gap-10">
        <li>
          <Link to="/Beranda">Beranda</Link>
        </li>
        <li>
          <Link to="/DaftarBus">Daftar Bus</Link>
        </li>
        <li>
          <Link to="/RutePopuler">Rute Populer</Link>
        </li>
        <li>
          <Link to="/Tentang">Tentang</Link>
        </li>
      </ul>
    </nav>
  );
}
