import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { RiStore2Line } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="bg-white border-b border-gray-300 px-4 md:px-8 py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo2.png" // Replace this with your logo path
            alt="Logo"
            width={50} // Updated size
            height={50}
          />
        </div>

        {/* Center - Navigation Links */}
        <nav className="hidden md:flex space-x-6 ml-4">
          <Link href="#" className="text-sm font-medium text-black hover:text-gray-800">
            New & Featured
          </Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-gray-800">
            Men
          </Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-gray-800">
            Women
          </Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-gray-800">
            Kids
          </Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-gray-800">
            Sale
          </Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-gray-800">
            SNKRS
          </Link>
        </nav>

        {/* Right Side - Search and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full py-1 px-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <IoIosSearch
              className="absolute left-3 text-gray-500 text-lg" // Position icon inside input
            />
          </div>

          {/* Heart Icon */}
          <button
            className="text-gray-600 hover:text-black focus:outline-none text-lg"
            aria-label="Wishlist"
          >
            <CiHeart />
          </button>

          {/* Bag/Cart Icon */}
          <button
            className="text-gray-600 hover:text-black focus:outline-none text-lg"
            aria-label="Cart"
          >
            <RiStore2Line />
          </button>
        </div>
      </div>
    </header>
  );
}
