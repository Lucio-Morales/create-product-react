import HeroImg from "../assets/hero-image.svg";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-12 px-6 lg:px-20">
      {/* Texto */}
      <div className="flex-1 mb-12 lg:mb-0 lg:pr-12">
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
          Haz crecer tu <span className="text-indigo-600">marca personal</span> ofreciendo tus servicios online
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg">
          Conecta con clientes, muestra tus habilidades y lleva tu negocio al siguiente nivel con nuestra plataforma.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-3 rounded-xl font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer">
            Crear mi perfil
          </button>
          <button className="px-8 py-3 rounded-xl font-semibold border border-gray-500 text-gray-700 hover:bg-gray-100 transition cursor-pointer">
            Explorar servicios
          </button>
        </div>
      </div>

      {/* Imagen */}
      <div className="flex-1 flex justify-center">
        <img
          src={HeroImg}
          alt="Ilustración de servicios online"
          className="w-80 lg:w-[28rem] h-auto drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
