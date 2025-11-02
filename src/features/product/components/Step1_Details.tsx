//Para ingresar el nombre, descripción, precio, etc.
const Step1 = ({ data, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: name === 'price' || name === 'stock' ? Number(value) : value });
  };

  return (
    <div className="bg-white p-6 shadow-xl rounded-xl border border-gray-100 space-y-6">
      {/* Nombre del producto */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
          Nombre del Producto <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500 transition duration-150"
          placeholder="Ej: Remera oversize nike"
        />
      </div>

      {/* Descripcion del producto  */}
      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
          Descripción
        </label>
        <textarea
          name="description"
          id="description"
          rows={4}
          value={data.description}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500 transition duration-150"
          placeholder="Detalles que el compador debe saber..."
        />
      </div>

      {/* Precio y Stock (en una fila) */}
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label htmlFor="price" className="block text-sm font-semibold text-gray-700">
            Precio ($) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="price"
            id="price"
            value={data.price}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500 transition duration-150"
          />
        </div>

        <div className="w-1/2">
          <label htmlFor="stock" className="block text-sm font-semibold text-gray-700">
            Stock inicial <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="stock"
            id="stock"
            value={data.stock}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring-blue-500 transition duration-150"
          />
        </div>
      </div>

      {/* Botón Siguiente */}
      <div className="pt-4 border-t border-gray-100">
        <button
          className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
          onClick={() => alert('Simulando ir al Paso 2...')}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Step1;
