import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface pro {
  productName: string;
  price: number;
  category: string;
  imageUrl?: string; // Optional
  colors: string[];
}

async function getData() {
  const fetchData = client.fetch(`*[_type == "product"]{
    productName,price,colors,category,
      "imageUrl": image.asset->url
  }`);
  return fetchData;
}

export default async function Products() {
    const data = await getData();
    console.log(data);
    return (
      <div className="grid grid-cols-3 gap-6 p-12 bg-gray-100">
        {data.map((val: pro, i:any) => {
          return (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <a href="#">
                {val.imageUrl ? (
                  <Image
                    className="rounded-lg mx-auto"
                    src={val.imageUrl}
                    alt={val.productName}
                    width={250}
                    height={250}
                  />
                ) : (
                  <div className="bg-gray-300 rounded-lg w-[250px] h-[250px] mx-auto flex items-center justify-center">
                    <span className="text-gray-600">Image not available</span>
                  </div>
                )}
              </a>
              <div className="mt-4">
                <a href="#">
                  <h5 className="text-lg font-semibold text-gray-900">
                    {val.productName}
                  </h5>
                </a>
                <div className="flex items-center mt-3">
                  <span className="text-sm text-gray-600">{val.colors}</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold text-gray-900">
                    MRP: ₹ {val.price}
                  </span>
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    {val.category}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  