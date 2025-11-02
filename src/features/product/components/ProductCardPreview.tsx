import type { ProductDetails } from '../../../types/product';

const ProductCardPreview = ({ data }: { data: ProductDetails }) => {
  const imageUrl = data.images.length > 0 ? URL.createObjectURL(data.images[0]) : './remera-nike.png';

  return (
    <div className="p-4 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="flex items-start gap-4 ">
        {/* Imagen principal */}
        <div className="relative lg:-h-92 flex flex-col justify-center items-center w-1/3">
          <h3 className="text-lg">Imagen principal</h3>
          <div>
            <img
              src={imageUrl}
              alt={data.name || 'Previsualización del producto'}
              className="border-2 border-dashed border-gray-400 w-auto h-full object-contain"
            />
            {data.stock > 0 && (
              <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                En Stock
              </span>
            )}
          </div>
        </div>
        {/* Imagenes secundarias */}
        <div className="flex flex-col justify-center items-center w-2/3">
          <h3 className="text-lg">Imagenes secundarias</h3>
          <div className="flex w-full gap-2 flex-wrap">
            <img src="" className="border border-dashed border-gray-300 w-28 h-auto" alt="" />
            <img src={imageUrl} className="border border-dashed border-gray-300 w-28 h-auto" alt="" />
            <img src={imageUrl} className="border border-dashed border-gray-300 w-28 h-auto" alt="" />
            <img src={imageUrl} className="border border-dashed border-gray-300 w-28 h-auto" alt="" />
            <img src={imageUrl} className="border border-dashed border-gray-300 w-28 h-auto" alt="" />
          </div>
        </div>
      </div>

      {/* Contenido de la Card */}
      <div className="space-y-4">
        {/* titulo y precio */}
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">{data.name || 'Nombre (vacío)'}</h2>
          <p className="text-4xl font-bold text-blue-600 ml-4">${data.price.toFixed(2)}</p>
        </div>

        {/* Descripción */}
        <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
          {data.description || 'La descripción aparecerá aquí. Intenta escribir una para ver cómo queda.'}
        </p>

        {/* Detalles Adicionales */}
        <div className="flex justify-between items-center text-sm pt-2 border-t border-gray-100">
          <span className="text-gray-500">
            Categoría: <span className="font-semibold text-gray-700">{data.category || 'N/A'}</span>
          </span>
          <span className={`font-bold ${data.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>Stock: {data.stock}</span>
        </div>

        {/* Botón de Acción Simulado */}
        <button
          className="w-full mt-4 bg-orange-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-orange-600 transition duration-200 transform hover:-translate-y-0.5"
          disabled={data.stock === 0}
        >
          Guardar producto
        </button>
      </div>
    </div>
  );
};

export default ProductCardPreview;
