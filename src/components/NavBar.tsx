import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center py-4 px-6">
      {/* Logo */}
      <NavLink to="/" className="text-xl font-bold tracking-wide">
        MiApp
      </NavLink>

      {/* Links de navegación */}
      <ul className="flex gap-6">
        <li>
          <NavLink to="/" className="hover:text-gray-700 transition">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="hover:text-gray-700 transition">
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="hover:text-gray-700 transition">
            Ingresar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
