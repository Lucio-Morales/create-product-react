// DynamicForm.tsx
import { useForm, type SubmitHandler } from 'react-hook-form';

type FieldConfig = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  validation?: object;
};

interface DynamicFormProps {
  fields: FieldConfig[];
  onSubmit: (data: any) => void;
  submitText: string;
}

export const DynamicForm = ({ fields, onSubmit, submitText }: DynamicFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler: SubmitHandler<any> = (data) => onSubmit(data);

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium  mb-1">{field.label}</label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            className="w-full px-4 py-2 rounded-xl border border-[#6c6f7f] 
                       focus:ring-2 focus:ring-[#6c80ef] focus:border-[#6c80ef] 
                       outline-none transition "
            {...register(field.name, field.validation)}
          />
          {errors[field.name] && (
            <p className="text-red-500 text-xs mt-1">{(errors[field.name]?.message as string) || 'Campo inválido'}</p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-[#635ce6] text-white py-2 rounded-xl font-semibold 
                   hover:bg-[#5550c0] transition shadow-md hover:shadow-lg cursor-pointer"
      >
        {submitText}
      </button>
    </form>
  );
};
