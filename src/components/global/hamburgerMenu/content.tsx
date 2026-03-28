import { useEffect, useRef, useState } from "react";
import ListNavigasiBar from "../listNavigasiBar/content";

export default function HamburgerMenu() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const containerHamburgerMenu = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!isChecked) return;
    function handleClickOutsideNavbar(event: MouseEvent) {
      if (
        containerHamburgerMenu.current &&
        !containerHamburgerMenu.current.contains(event.target as Node)
      ) {
        setIsChecked(false);
      }
    }

    document.addEventListener("click", handleClickOutsideNavbar);

    return () => {
      document.removeEventListener("click", handleClickOutsideNavbar);
    };
  }, [isChecked]);

  return (
    <div className="md:hidden" ref={containerHamburgerMenu}>
      <div className="absolute top-9 right-7 hamburgerMenu">
        <input
          type="checkbox"
          className="absolute cursor-pointer z-20 size-5 opacity-0"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <div className="flex flex-col h-5 justify-between">
          <span className="block w-5 h-1 bg-black rounded-md transition-all"></span>
          <span className="block w-5 h-1 bg-black rounded-md transition-all"></span>
          <span className="block w-5 h-1 bg-black rounded-md transition-all"></span>
        </div>
      </div>
      <ul
        className={`absolute grid grid-cols-2 bg-white gap-y-7 h-60 top-0 right-0 left-0 -z-50 place-content-center place-items-center transition-all duration-300 text-lg font-medium ${isChecked ? `translate-y-0 pt-16` : `-translate-y-full`}`}
      >
        <ListNavigasiBar />
      </ul>
    </div>
  );
}
