import { useState } from 'react';
import type { ProductDetails } from '../../../types/product';
import Step1 from './Step1_Details';
import ProductCardPreview from './ProductCardPreview';

// El componente principal que gestiona el estado del formulario y la navegación entre pasos.

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
    <div className="flex flex-col h-full lg:flex-row p-4 gap-8 max-w-7xl mx-auto">
      {/* ⬅️ COLUMNA DEL FORMULARIO (AHORA MÁS ESTRECHA) */}
      <div className="lg:w-1/3 order-1 lg:order-1">
        <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-400 pb-2">📋 Detalles del Producto</h3>
        {/* Renderizado condicional del paso */}
        {currentStep === 1 && <Step1 data={productData} onChange={setProductData} />}
      </div>
      {/* ➡️ COLUMNA DE LA VISTA PREVIA (AHORA MÁS ANCHA) */}
      <div className="lg:w-2/3 sticky  top-4 order-2 lg:order-2">
        <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-400 pb-2">
          ✨ Vista Previa de la Card
        </h3>
        {/* Componente de Previsualización */}
        <ProductCardPreview data={productData} />
      </div>
    </div>
  );
};

export default ProductCreationFlow;
