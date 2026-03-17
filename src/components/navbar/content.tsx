import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center px-14 justify-between h-24 fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <img src="/images/global/logo.png" alt="Logo" className="size-20" />
      <ul className="flex items-center justify-around text-lg font-medium gap-10">
        <li>
          <Link to="/LandingPage">Home</Link>
        </li>
        <li>
          <Link to="/daftarBus">Daftar Bus</Link>
        </li>
        <li>
          <Link to="/rutePopuler">Rute Populer</Link>
        </li>
        <li>
          <Link to="/tentang">Tentang</Link>
        </li>
      </ul>
    </nav>
  );
}
