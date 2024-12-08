import Image from 'next/image';
import Link from 'next/link';

export default function DontMiss() {
  return (
    <section className="dont-miss w-full">
      {/* Header Section */}
      <div className="w-full px-6 py-4">
        <h1 className="text-xl md:text-2xl font-bold text-black">
          Don’t Miss
        </h1>
      </div>

      {/* Full-Screen Image Centered */}
      <div className="relative w-full h-[400px] md:h-[600px] flex justify-center items-center overflow-hidden">
        <Image
          src="/images/dontmiss.png" // Replace with your actual image path
          alt="Don't Miss Out"
          layout="fill"
          objectFit="contain" // Ensure the image is fully visible
          objectPosition="center" // Keep the image centered
          className="rounded-none"
        />
      </div>

      {/* Centered Content Below the Image */}
      <div className="text-center py-10 px-4 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
          FLIGHT ESSENTIALS
        </h2>
        <p className="text-base text-gray-600 mb-6">
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
        </p>
        <Link href="/products">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
}
