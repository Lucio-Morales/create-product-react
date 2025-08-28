import { NavLink } from 'react-router-dom';
import { DynamicForm } from '../components/DynamicForm';

const registerFields = [
  {
    name: 'name',
    label: 'Nombre completo',
    type: 'text',
    placeholder: 'Juan Pérez',
    validation: { required: 'El nombre es obligatorio' },
  },
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
  {
    name: 'confirmPassword',
    label: 'Confirmar contraseña',
    type: 'password',
    placeholder: '••••••••',
    validation: { required: 'Debes confirmar tu contraseña' },
  },
];

const Register = () => {
  const handleRegister = (data: any) => {
    console.log('Register data:', data);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-[#e5e5ff] shadow-xl rounded-2xl p-8 border border-[#d6d6fe] mt-12 mb-12">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Crear cuenta ✨</h1>
        <p className="text-gray-500 mt-2 text-sm">Completá los datos para registrarte en la plataforma</p>
      </div>

      <DynamicForm fields={registerFields} onSubmit={handleRegister} submitText="Registrarse" />

      <div className="mt-6 text-center text-sm">
        <p className="text-gray-500">
          ¿Ya tenés una cuenta?{' '}
          <NavLink to="/login" className="text-[#4036ff] hover:underline font-medium">
            Iniciá sesión
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
