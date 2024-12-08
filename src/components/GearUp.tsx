import Image from 'next/image';

export default function GearUp() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Gear Up</h2>

        {/* Sliders */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Men's Section */}
          <div className="w-full md:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{`Shop Men's`}</h3>
              <div className="flex space-x-2">
                <button className="p-2 bg-gray-200 rounded-full">
                  &#8249;
                </button>
                <button className="p-2 bg-gray-200 rounded-full">
                  &#8250;
                </button>
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {/* Card 1 */}
              <div className="flex-shrink-0 w-48">
                <Image
                  src="/images/gearman.png"
                  alt="Men's Item"
                  width={200}
                  height={200}
                  className="rounded-md"
                />
                <h4 className="text-sm font-semibold mt-2">Nike Dri-FIT ADV TechKnit Ultra</h4>
                <p className="text-gray-600 text-sm">{`Men's Short-Sleeve Running Top`}</p>
                <p className="text-lg font-bold mt-1">₹ 3,895</p>
              </div>

              {/* Card 2 */}
              <div className="flex-shrink-0 w-48">
                <Image
                  src="/images/gearman2.png"
                  alt="Men's Item"
                  width={200}
                  height={200}
                  className="rounded-md"
                />
                <h4 className="text-sm font-semibold mt-2">Nike Dri-FIT Challenger</h4>
                <p className="text-gray-600 text-sm">{ `Men's 18cm (approx.) 2-in-1 Shorts`}</p>
                <p className="text-lg font-bold mt-1">₹ 2,495</p>
              </div>
            </div>
          </div>

          {/* Women's Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{`Shop Women's`}</h3>
              <div className="flex space-x-2">
                <button className="p-2 bg-gray-200 rounded-full">
                  &#8249;
                </button>
                <button className="p-2 bg-gray-200 rounded-full">
                  &#8250;
                </button>
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {/* Card 3 */}
              <div className="flex-shrink-0 w-48">
                <Image
                  src="/images/gearwoman.png"
                  alt="Women's Item"
                  width={200}
                  height={200}
                  className="rounded-md"
                />
                <h4 className="text-sm font-semibold mt-2">Nike Dri-FIT ADV Run Division</h4>
                <p className="text-gray-600 text-sm">{`Women's Long-Sleeve Running Top`}</p>
                <p className="text-lg font-bold mt-1">₹ 5,295</p>
              </div>

              {/* Card 4 */}
              <div className="flex-shrink-0 w-48">
                <Image
                  src="/images/gearwoman2.png"
                  alt="Women's Item"
                  width={200}
                  height={200}
                  className="rounded-md"
                />
                <h4 className="text-sm font-semibold mt-2">Nike Fast</h4>
                <p className="text-gray-600 text-sm">
                  {`Women's Mid-Rise 7/8 Running Leggings with Pockets`}
                </p>
                <p className="text-lg font-bold mt-1">₹ 3,795</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
