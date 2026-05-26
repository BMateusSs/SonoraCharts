type FormInputProps = {
  label: string
  name: string
  type?: string
  placeholder?: string
  defaultValue?: string
  required?: boolean
}

export default function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  defaultValue,
  required = false,
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-sm font-medium text-white"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        className="w-full rounded-xl border border-[#70707D] bg-[#40404A] px-1/3 py-2 text-[#F4F4F5] outline-none transition placeholder:text-[#8A8A94] hover:bg-[#484852] focus:border-purple-400 focus:bg-[#52525E] focus:ring-4 focus:ring-purple-400/15"
      />
    </div>
  )
}