import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
      {/* IZQUIERDA: Logo + nombre + navegación */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <img src="/favicon.svg" alt="Logo" className="w-8 h-8" />
          <NavLink to="/" className="text-2xl font-bold tracking-tight">
            Services.find
          </NavLink>
        </div>
        <NavLink to="#" className="px-3 py-2 rounded hover:underline">
          Cómo funciona
        </NavLink>
        <NavLink to="#" className=" px-3 py-2 rounded hover:underline">
          Servicios
        </NavLink>
      </div>

      {/* DERECHA: botones */}
      <div className="flex items-center space-x-4">
        <NavLink
          to="/register"
          className="bg-zinc-800 text-zinc-300 hover:text-zinc-50 hover:bg-zinc-700 px-4 py-2 rounded transition"
        >
          Registrarse
        </NavLink>
        <NavLink to="/login" className="border border-zinc-700 px-4 py-2 rounded transition">
          Iniciar sesión
        </NavLink>
      </div>
      {/* Mobile menu button */}
      <div className="md:hidden">{/* <MobileMenuButton /> */}</div>
    </nav>
  );
};

export default NavBar;
