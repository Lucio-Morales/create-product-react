import type { ProductDetails } from '../../../types/product';

const ProductCardPreview = ({ data }: { data: ProductDetails }) => {
  const imageUrl = data.images.length > 0 ? URL.createObjectURL(data.images[0]) : './remera-nike.png';

  return (
    <div className="p-6 flex flex-col gap-6 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 ">
      {/* CONTENEDOR DE IMAGENES */}
      <div className="flex gap-5">
        {/* Imagen principal */}
        <div className="relative lg:-h-60 w-1/3 ">
          {/* <h3 className="font-normal text-base mb-4 text-zinc-500 ">Imagen principal</h3> */}
          <div>
            <img
              src={imageUrl}
              alt={data.name || 'Previsualización del producto'}
              className="border-2 border-dashed border-gray-400 h-full object-contain"
            />
            {data.stock > 0 ? (
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                En stock
              </span>
            ) : (
              <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                Sin stock
              </span>
            )}
          </div>
        </div>
        {/* Imagenes secundarias */}
        <div className="flex flex-col w-2/3">
          <div className="flex justify-between w-full">
            <img src={imageUrl} className="border border-dashed border-gray-400 w-24 h-auto" alt="" />
            <img src={imageUrl} className="border border-dashed border-gray-400 w-24 h-auto" alt="" />
            <img src={imageUrl} className="border border-dashed border-gray-400 w-24 h-auto" alt="" />
            <img src={imageUrl} className="border border-dashed border-gray-400 w-24 h-auto" alt="" />
          </div>
          <div className="mt-2 gap-4 flex  h-full ">
            <div className="w-1/2 p-1 border border-dotted">
              <h4 className="text-xs text-gray-500 font-semibold">Sección de talles</h4>
            </div>
            <div className="w-1/2 p-1 border border-dotted">
              <h4 className="text-xs text-gray-500 font-semibold ">Sección de colores</h4>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENEDOR DE CONTENIDO */}
      <div className="space-y-4">
        {/* titulo y precio */}
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">{data.name || '(Nombre del producto)'}</h2>
          <p className="text-3xl font-bold text-zinc-900 ml-4">${data.price.toFixed(2)}</p>
        </div>

        {/* Descripción */}
        <p className="text-gray-600 text-base max-w-xl leading-relaxed line-clamp-3">
          {data.description || 'La descripción aparecerá aquí. Intenta escribir una para ver cómo queda.'}
        </p>

        {/* Detalles Adicionales */}
        <div className="flex justify-between items-center text-sm pt-2 border-t border-gray-100">
          <span className="text-gray-500 text-lg font-medium">
            Categorías: <span className="font-semibold text-gray-700">{data.category || 'N/A'}</span>
          </span>
          <span className={`font-bold text-lg ${data.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {data.stock != 0 ? `Stock: ${data.stock}` : `Sin stock`}
          </span>
        </div>

        {/* Botón de Acción Simulado */}
        <button
          className="w-full mt-4 bg-orange-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-orange-600 transition duration-200 transform hover:-translate-y-0.5 cursor-pointer"
          disabled={!data.stock}
        >
          Guardar producto
        </button>
      </div>
    </div>
  );
};

export default ProductCardPreview;
