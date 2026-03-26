import { Link } from "react-router-dom";

export default function ListNavigasiBar() {
  return (
    <>
      <li>
        <Link to="/Beranda">Beranda</Link>
      </li>
      <li>
        <Link to="/DaftarTiketBus">Daftar Tiket</Link>
      </li>
      <li>
        <Link to="/RutePopuler">Rute Populer</Link>
      </li>
      <li>
        <Link to="/Tentang">Tentang</Link>
      </li>
    </>
  );
}
