import {
  BellIcon,
  HomeIcon,
  UsersIcon,
  StarIcon,
  Bars3Icon as BarsIcon,
  XMarkIcon as CloseIcon,
  InboxStackIcon as BoxIcon,
  MagnifyingGlassIcon as SearchIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../images/celetel-logo.png";
import Dropdown from "./Dropdown";

export default function NavDrawer({ usersData, setFilteredUsers }) {
  const [searchInput, setSearchInput] = useState("");
  const [navOpen, setNavOpen] = useState();
  const handleToggle = () => {
    setNavOpen((prev) => !prev);
  };
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
      let filteredData = usersData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredUsers(filteredData);
  };
  return (
    <div className="">
      <header className="relative bg-white xl:bg-transparent flex justify-between px-4 xl:px-12 py-[10px] xl:py-3">
        <div className="w-full max-w-[200px] flex items-center gap-3">
          <BarsIcon
            className="h-6 w-6 sm:h-7 sm:w-7 text-black cursor-pointer"
            onClick={handleToggle}
          />

          <Image
            className="w-24 sm:w-28 object-contain"
            src={logo}
            alt=""
            width={585}
            height={215}
          />
        </div>

        <div className="w-[92%] xl:w-full max-w-xl xl:max-w-3xl mx-auto absolute top-24 sm:top-28 xl:top-3 left-1/2 -translate-x-1/2">
          <div className="relative flex items-center w-full h-12 rounded-lg shadow-lg bg-white overflow-hidden px-2">
            <SearchIcon className="h-5 w-12 text-gray-500" />
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => searchItems(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <BellIcon className="h-6 w-6 text-gray-500" />
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex justify-center items-center">
            A
          </div>
        </div>
      </header>
      <aside
        className={`absolute top-0 left-0 z-10 w-full max-w-[250px] text-gray-500 bg-white p-5 pt-3 text-xs md:text-sm transform h-screen xl:translate-x-0 transition-all ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full max-w-[250px] flex items-center justify-between mb-12">
          <Image
            className="w-24 xl:w-32 object-contain"
            src={logo}
            alt=""
            width={585}
            height={215}
          />
          <CloseIcon
            className="h-6 w-6 sm:h-7 sm:w-7 text-black cursor-pointer xl:hidden"
            onClick={handleToggle}
          />
        </div>
        <div className="space-y-6">
          <Link href="#" className="flex items-center gap-6 hover:text-white">
            <HomeIcon className="h-5 w-5" />
            <div>Home</div>
          </Link>
          <Link href="#" className="flex items-center gap-6">
            <UsersIcon className="h-5 w-5" />
            <div>Matches</div>
          </Link>
          <Link href="#" className="flex items-center gap-6">
            <BoxIcon className="h-5 w-5" />
            <div>Manage sources</div>
          </Link>
          <Link href="#" className="flex items-center gap-6">
            <BoxIcon className="h-5 w-5" />
            <div>Integration</div>
          </Link>
          <Link href="#" className="flex items-center gap-6">
            <BoxIcon className="h-5 w-5" />
            <div>Alerts</div>
          </Link>
          <Link href="#" className="flex items-center gap-6 mt-3 text-base">
            <StarIcon className="h-5 w-5" />
            <div className="text-black w-full flex items-center relative justify-between">
              <div>Settings</div>
              <Dropdown />
            </div>
          </Link>
        </div>
      </aside>
    </div>
  );
}
