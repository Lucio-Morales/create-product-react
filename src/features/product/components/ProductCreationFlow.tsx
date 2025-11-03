import { useState } from 'react';
import type { ProductDetails } from '../../../types/product';
import Step1 from './Step1_Details';
import ProductCardPreview from './ProductCardPreview';

const ProductCreationFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [productData, setProductData] = useState<ProductDetails>({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    images: [],
  });
  return (
    <div className="pt-6 max-w-6xl mx-auto space-y-2">
      {/* <div className="border-b bg-gray-300">
        <span>aqui debe ir la barra de progreso</span>
      </div> */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl ">
        {/* PRODUCT FORM */}
        <div className="lg:w-1/3 order-1 lg:order-1 h-full">
          <h3 className="text-lg font-medium text-gray-800 mb-4 border-b border-gray-400 pb-2">
            Detalles del producto
          </h3>
          {currentStep === 1 && <Step1 data={productData} onChange={setProductData} />}
        </div>
        {/* PRODUCT PREVIEW */}
        <div className="lg:w-2/3 order-2 lg:order-2 h-full ">
          <h3 className="text-lg font-medium text-gray-800 mb-4 border-b border-gray-400 pb-2">
            Vista previa del producto:
          </h3>
          <ProductCardPreview data={productData} />
        </div>
      </div>
    </div>
  );
};

export default ProductCreationFlow;
