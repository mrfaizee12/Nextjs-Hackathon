import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-300 px-4 md:px-8 py-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png" // Replace this with your logo path
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        {/* Center - Skip to main content */}
        <div className="hidden sm:block">
          <Link
            href="#main-content"
            className="text-xs md:text-sm text-black hover:text-gray-800 focus:text-gray-800"
          >
            Skip to main content
          </Link>
        </div>

        {/* Right Side - Links */}
        <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-black">
          <Link
            href="/"
            className="hover:text-gray-800 focus:text-gray-800 transition"
          >
            Find a Store
          </Link>
          <span className="hidden sm:block">|</span>
          <Link
            href="/help-us"
            className="hover:text-gray-800 focus:text-gray-800 transition"
          >
            Help
          </Link>
          <span className="hidden sm:block">|</span>
          <Link
            href="/join-us"
            className="hover:text-gray-800 focus:text-gray-800 transition"
          >
            Join Us
          </Link>
          <span className="hidden sm:block">|</span>
          <Link
            href="/sign-in"
            className="hover:text-gray-800 focus:text-gray-800 transition"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
