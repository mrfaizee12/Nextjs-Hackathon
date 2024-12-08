import Image from 'next/image';

export default function BestOfAir() {
  return (
    <section className="best-of-air w-full py-10 bg-white flex flex-col items-center md:flex-row md:items-start justify-between">
      {/* Left Side Heading */}
      <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
        <h2 className="text-xl md:text-2xl font-bold leading-tight">
          Best of Air Max
        </h2>
      </div>

      {/* Right Side Slider with Images */}
      <div className="relative w-full md:w-3/4 flex items-center">
        {/* Left Arrow */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10">
          &#8249;
        </button>

        {/* Image Cards + Shop */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide w-full px-4 md:px-0">
          {/* Image Card 1 */}
          <div className="flex-shrink-0 w-[90%] md:w-1/3">
            <Image
              src="/images/br1.png" // Replace with the actual path
              alt="Nike Air Max Pulse"
              width={480}
              height={480}
              className="object-cover rounded-md w-full"
            />
            <h2 className="text-base font-semibold mt-2 text-center">Nike Air Max Pulse</h2>
            <p className="text-sm text-gray-600 text-center">{`Men's Shoes`}</p>
            <p className="text-lg font-bold mt-1 text-center">₹ 13 995</p>
          </div>

          {/* Image Card 2 */}
          <div className="flex-shrink-0 w-[90%] md:w-1/3">
            <Image
              src="/images/br2.png" // Replace with the actual path
              alt="Nike Air Max 97"
              width={480}
              height={480}
              className="object-cover rounded-md w-full"
            />
            <h2 className="text-base font-semibold mt-2 text-center">Nike Air Max 97</h2>
            <p className="text-sm text-gray-600 text-center">{`Women's Shoes`}</p>
            <p className="text-lg font-bold mt-1 text-center">₹ 13 995</p>
          </div>

          {/* Image Card 3 */}
          <div className="flex-shrink-0 w-[90%] md:w-1/3">
            <Image
              src="/images/br3.png" // Replace with the actual path
              alt="Nike Air Max 97 SE"
              width={480}
              height={480}
              className="object-cover rounded-md w-full"
            />
            <h2 className="text-base font-semibold mt-2 text-center">Nike Air Max 97 SE</h2>
            <p className="text-sm text-gray-600 text-center">Unisex Shoes</p>
            <p className="text-lg font-bold mt-1 text-center">₹ 13 995</p>
          </div>

          {/* Shop Section */}
          <div className="flex-shrink-0 w-[90%] md:w-1/3 flex flex-col justify-center items-center bg-gray-100 rounded-md p-6">
            <h2 className="text-2xl font-bold">Shop Now</h2>
            <p className="text-gray-600 mt-2">Discover more products in our store!</p>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10">
          &#8250;
        </button>
      </div>
    </section>
  );
}