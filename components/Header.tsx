"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  MagnifyingGlassIcon,
  UsersIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Header() {
  const router = useRouter();
  // SearchBar 관련 상태
  const [searchInput, setSearchInput] = useState("");
  const [numOfGuests, setNumOfGuests] = useState(1);
  // DateRangePicker 관련 상태
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = ({ selection }: RangeKeyDict) => {
    setStartDate(selection.startDate!);
    setEndDate(selection.endDate!);
  };

  const handleSearch = () => {
    router.push(
      `/search?location=${searchInput}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`
    );
  };

  return (
    <header className="p-5 grid grid-cols-3 sticky top-0 z-50 bg-white shadow-md md:px-10k">
      {/* Logo */}
      <Link href="/" className="h-10 relative my-auto cursor-pointer">
        <Image
          fill
          style={{ objectFit: "contain", objectPosition: "left" }}
          src="https://links.papareact.com/qd3"
          alt="logo"
        />
      </Link>

      {/* Search Bar */}
      <div className="py-2 flex items-center rounded-full md:border-2 md:shadow-sm">
        <input
          type="text"
          value={searchInput}
          placeholder="Start your Search"
          onChange={e => setSearchInput(e.target.value)}
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

      {/* Calendar */}
      {searchInput && (
        <div className="mx-auto col-span-3 flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
          />
          <div className="mb-4 flex items-center border-b">
            <h2 className="flex-grow text-2xl font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              min={1}
              value={numOfGuests}
              onChange={e => setNumOfGuests(+e.target.value)}
              className="pl-2 w-12 outline-none text-red-400 text-md"
            />
          </div>
          <div className="flex">
            <button
              onClick={() => setSearchInput("")}
              className="flex-grow text-gray-400"
            >
              Cancel
            </button>
            <button onClick={handleSearch} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
