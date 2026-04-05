import HamburgerMenu from "../hamburgerMenu/content";
import ListNavigasiBar from "../listNavigasiBar/content";

export default function Navbar() {
  return (
    <nav className="flex items-center px-14 justify-between h-24 fixed top-0 w-full bg-white z-9999 shadow-md">
      <img
        src="/images/global/full_logo.png"
        alt="Logo"
        className="size-24 object-contain"
      />
      <ul className="hidden md:flex items-center justify-around text-lg font-medium gap-10">
        <ListNavigasiBar />
      </ul>
      <HamburgerMenu />
    </nav>
  );
}
