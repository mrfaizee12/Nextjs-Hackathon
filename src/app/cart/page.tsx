import React from "react";

export default function CartPage() {
  return (
    <div className="bg-white w-full max-w-7xl mx-auto px-6 py-8">
      {/* Main Cart */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side - Bag */}
        <div className="lg:col-span-2">
          <div className="border-b pb-3">
            {/* Free Delivery at Top */}
            <div className="flex justify-between items-center text-sm text-gray-800 mb-1">
              <span className="font-semibold">Free Delivery</span>
              <a href="#" className="underline text-gray-950 hover:text-gray-800">
                View details
              </a>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Applies to orders of ₹ 14,000.00 or more.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-4 mb-6">Bag</h2>

          {/* Cart Item 1 */}
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <div className="flex">
              <img
                src="/images/gearman.png"
                alt="Product Image"
                className="w-24 h-24 object-cover rounded"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h3>
                <p className="text-sm text-gray-500">
                  {`Men's Short-Sleeve Running Top`}
                </p>
                <p className="text-sm text-gray-500">
                  Ashen Slate/Cobalt Bliss
                </p>
                <p className="text-sm mt-1">
                  Size <span className="font-medium">L</span> | Quantity{" "}
                  <span className="font-medium">1</span>
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-700">MRP: ₹ 3 895.00</p>
              <div className="mt-3 flex items-center justify-end space-x-4">
                <button className="text-gray-600 hover:text-black">♥</button>
                <button className="text-gray-600 hover:text-red-500">🗑️</button>
              </div>
            </div>
          </div>

          {/* Cart Item 2 */}
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <div className="flex">
              <img
                src="/images/br1.png"
                alt="Product Image"
                className="w-24 h-24 object-cover rounded"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Nike Air Max 97 SE</h3>
                <p className="text-sm text-gray-500">{`Men's Shoes`}</p>
                <p className="text-sm text-gray-500">
                  Flat Pewter/Light Bone/Black/White
                </p>
                <p className="text-sm mt-1">
                  Size <span className="font-medium">8</span> | Quantity{" "}
                  <span className="font-medium">1</span>
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-700">MRP: ₹ 16 995.00</p>
              <div className="mt-3 flex items-center justify-end space-x-4">
                <button className="text-gray-600 hover:text-black">♥</button>
                <button className="text-gray-600 hover:text-red-500">🗑️</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Summary */}
        <div className="bg-gray-100 p-6 rounded-md">
          <h2 className="text-xl font-bold mb-6">Summary</h2>
          <div className="flex justify-between text-sm mb-4">
            <span>Subtotal</span>
            <span className="font-medium">₹ 20 890.00</span>
          </div>
          <div className="flex justify-between text-sm mb-4">
            <span>Estimated Delivery & Handling</span>
            <span className="font-medium text-green-600">Free</span>
          </div>
          <div className="flex justify-between text-lg font-bold border-t pt-4">
            <span>Total</span>
            <span>₹ 20 890.00</span>
          </div>
          <button className="w-full mt-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
