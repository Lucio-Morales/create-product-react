import NavBar from './NavBar';

const Header: React.FC = () => {
  return (
    <header className="shadow-md sticky top-0 z-50 backdrop-blur-md">
      <NavBar />
    </header>
  );
};

export default Header;
