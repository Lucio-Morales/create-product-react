const Hero: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-6 lg:px-20">
      {/* Columna izquierda: texto */}
      <div className="flex-1 mb-10 lg:mb-0 lg:pr-10">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          {/* Headline */}
          Ofrece tus servicios, deja que las personas te encuentren y crece tu negocio online
        </h1>
        <p className="text-lg mb-8">
          {/* Subtítulo */}
          Crea tu perfil, muestra tus habilidades y conecta con clientes interesados.
        </p>
        <div className="flex flex-wrap gap-4">
          {/* CTA buttons */}
          <button className="px-6 py-3 rounded-lg font-semibold border">Crear mi perfil</button>
          <button className="px-6 py-3 rounded-lg font-semibold border">Explorar servicios</button>
        </div>
      </div>

      {/* Columna derecha: imagen o ilustración */}
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-zinc-400 w-full h-64 lg:h-96 border rounded-lg flex justify-center items-center">
          {/* Placeholder para imagen/illustración */}
          <span>Imagen o ilustración aquí</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
