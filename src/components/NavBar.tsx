import { NavLink } from 'react-router-dom';
import { UserPlus, LogIn } from "lucide-react";

const NavBar: React.FC = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <img src="/favicon.svg" alt="Logo" className="w-8 h-8" />
          <NavLink to="/" className="text-2xl font-bold tracking-tight">
            Services.find
          </NavLink>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <NavLink
          to="/register"
          className="inline-flex items-center gap-2 text-zinc-700 bg-gray-100 px-4 py-2 rounded transition transform hover:scale-105 hover:bg-indigo-50 hover:text-indigo-700">
          <UserPlus className="w-4 h-4" />
          <span>Crear cuenta</span>
        </NavLink>

        <NavLink
          to="/login"
          className="inline-flex items-center gap-2 text-zinc-700 bg-gray-100 px-4 py-2 rounded transition transform hover:scale-105 hover:bg-indigo-50 hover:text-indigo-700"
        >
          <LogIn className="w-4 h-4" />
          <span>Iniciar sesión</span>
        </NavLink>
      </div>
      {/* Mobile menu button */}
      <div className="md:hidden">{/* <MobileMenuButton /> */}</div>
    </nav>
  );
};

export default NavBar;
