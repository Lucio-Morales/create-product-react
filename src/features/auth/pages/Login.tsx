import { NavLink } from 'react-router-dom';
import { DynamicForm } from '../components/DynamicForm';

const loginFields = [
  {
    name: 'email',
    label: 'Correo electrónico',
    type: 'email',
    placeholder: 'tu@email.com',
    validation: { required: 'El correo es obligatorio' },
  },
  {
    name: 'password',
    label: 'Contraseña',
    type: 'password',
    placeholder: '••••••••',
    validation: { required: 'La contraseña es obligatoria' },
  },
];

const Login = () => {
  const handleLogin = (data: any) => {
    console.log('Login data:', data);
  };

  return (
    <div className="bg-[#efefff] w-full max-w-md mx-auto shadow-xl rounded-2xl p-8 border border-[#d6d6fe]  mt-12 mb-12">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold ">Bienvenido 👋</h1>
        <p className=" mt-2 text-sm">Ingresá con tus credenciales para continuar</p>
      </div>

      <DynamicForm fields={loginFields} onSubmit={handleLogin} submitText="Ingresar" />

      <div className="mt-6 text-center text-sm">
        <a href="#" className="text-[#4036ff] hover:underline font-medium">
          ¿Olvidaste tu contraseña?
        </a>
        <p className="mt-2 text-gray-500">
          ¿No tenés cuenta?{' '}
          <NavLink to="/register" className="text-[#4036ff] hover:underline font-medium">
            Registrate acá
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
