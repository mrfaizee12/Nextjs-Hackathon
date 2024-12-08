import Image from "next/image";

export default function Essentials() {
  const categories = [
    {
      title: "Men's",
      image: "/images/men.png", // Replace with your men's image path
    },
    {
      title: "Women's",
      image: "/images/women.png", // Replace with your women's image path
    },
    {
      title: "Kids'",
      image: "/images/kid.png", // Replace with your kids' image path
    },
  ];

  return (
    <div className="bg-white py-10">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-center mb-8">The Essentials</h2>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-16">
        {categories.map((category, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            {/* Image */}
            <div className="h-[300px] md:h-[400px] relative">
              <Image
                src={category.image}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Button */}
            <div className="absolute bottom-4 left-4">
              <button className="bg-white px-4 py-2 rounded-full shadow-md text-sm font-semibold hover:bg-gray-100">
                {category.title}
              </button>
            </div>
            
          </div>
          
        ))}
      </div>
    </div>
    
  );
}