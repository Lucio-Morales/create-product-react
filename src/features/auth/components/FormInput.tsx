import type { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput = ({ label, error, ...props }: FormInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <input className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" {...props} />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};
