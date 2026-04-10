import { Link, useLocation, useParams } from "react-router-dom";

export default function ListNavigasiBar() {
  const { pathname } = useLocation();
  const { idTiketBus } = useParams();
  return (
    <>
      <li className={`${pathname === `/Beranda` && `textUnderline`}`}>
        <Link to="/Beranda">Beranda</Link>
      </li>
      <li
        className={`${pathname === `/DaftarTiketBus` || pathname === `/DaftarTiketBus/Detail/${idTiketBus}` ? `textUnderline` : ``}`}
      >
        <Link to="/DaftarTiketBus">Tiket Bus</Link>
      </li>
      <li className={`${pathname === `/TentangKami` && `textUnderline`}`}>
        <Link to="/TentangKami">Tentang</Link>
      </li>
    </>
  );
}
