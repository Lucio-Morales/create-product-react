import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

function PublicLayout() {
  return (
    <div className="bg-gray-300 flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-6 border-l border-r border-gray-500">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PublicLayout;
