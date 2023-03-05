import Image from "next/image";
import {
  MagnifyingGlassIcon,
  UserIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="p-5 grid grid-cols-3 sticky top-0 z-50 bg-white shadow-md md:px-10k">
      {/* Logo */}
      <div className="h-10 relative my-auto cursor-pointer">
        <Image
          fill
          style={{ objectFit: "contain", objectPosition: "left" }}
          src="https://links.papareact.com/qd3"
          alt="logo"
        />
      </div>

      {/* Search Bar */}
      <div className="py-2 flex items-center rounded-full md:border-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your Search"
          className="pl-5 flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden p-2 h-8 bg-red-400 text-white rounded-full cursor-pointer md:inline-flex md:mx-2" />
      </div>

      {/* Menu */}
      <div className="flex justify-end items-center space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="p-2 flex items-center space-x-2 border-2 rounded-full">
          <UserCircleIcon className="h-6" />
          <Bars3Icon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
