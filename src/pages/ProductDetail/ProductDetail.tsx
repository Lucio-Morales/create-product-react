import { Truck } from 'lucide-react';
import ImagePlaceholder from '../../components/common/ImagePlaceholder';

const ProductDetail = () => {
  return (
    <div className="bg-white max-w-5xl p-6">
      <h2 className="font-light">Product detail</h2>
      <div className="w-full mx-auto">
        {/* CONTENT */}
        <div className="flex gap-16">
          {/* images section */}
          <div className="w-1/2">
            <div className="w-full flex flex-col gap-2">
              <ImagePlaceholder width="w-full" height="h-100" />
              <div className="flex justify-between w-full mt-4 gap-2">
                <ImagePlaceholder width="w-32" height="h-24" />
                <ImagePlaceholder width="w-32" height="h-24" />
                <ImagePlaceholder width="w-32" height="h-24" />
                <ImagePlaceholder width="w-32" height="h-24" />
                <div className="w-32 h-24 border rounded-sm border-gray-400 flex items-center justify-center">
                  <p className="text-gray-400">+3 more</p>
                </div>
              </div>
            </div>
          </div>
          {/* info section */}
          <div className="w-1/2">
            <div className="flex flex-col h-full justify-between">
              <img src="/reebok.svg" alt="Logo reebok" className="w-10 h-10" />
              <h3>Shoes Reebok Zig Kinetica 3</h3>
              <div className="flex items-center gap-1">
                <img src="/star.svg" alt="Star rating" className="w-4 h-4" />
                <img src="/star.svg" alt="Star rating" className="w-4 h-4" />
                <img src="/star.svg" alt="Star rating" className="w-4 h-4" />
                <img src="/star.svg" alt="Star rating" className="w-4 h-4" />
                <img src="/star.svg" alt="Star rating" className="w-4 h-4" />
                <p className="ml-2 text-sm text-gray-500">46 reviews</p>
              </div>
              <span className="text-5xl font-semibold mt-4">$199.00</span>
              <div className="mt-4">
                <span className="font-semibold">Color:</span>
                <span>White</span>
                <div className="flex gap-2 mt-1">
                  <ImagePlaceholder width="w-10" height="h-16" />
                  <ImagePlaceholder width="w-10" height="h-16" />
                  <ImagePlaceholder width="w-10" height="h-16" />
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-1">Size</h4>
                <div className="flex gap-2">
                  <span className="border border-gray-400 p-2 text-sm cursor-pointer hover:bg-gray-100 rounded-md">
                    38
                  </span>
                  <span className="border border-gray-400 p-2 text-sm cursor-pointer hover:bg-gray-100 rounded-md">
                    39
                  </span>
                  <span className="border border-gray-400 p-2 text-sm cursor-pointer hover:bg-gray-100 rounded-md">
                    40
                  </span>
                  <span className="border border-gray-400 p-2 text-sm cursor-pointer hover:bg-gray-100 rounded-md">
                    41
                  </span>
                  <span className="border border-gray-400 p-2 text-sm cursor-pointer hover:bg-gray-100 rounded-md">
                    42
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full bg-black text-white py-3 font-semibold rounded-lg hover:bg-zinc-900 transition cursor-pointer">
                  Add to Cart
                </button>

                <p className="flex items-center font-bold gap-2 text-sm mt-2">
                  <Truck className=" w-5 h-5" />
                  Free delivery on orders over $50.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
