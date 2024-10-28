interface Props{
    label:string
    placeholder:string
    name:string
    type:string
}
export default function Input(props:Props) {
  return (
    <div className="my-2">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        {props.label}
      </label>
      <div className="mt-1">
        <input
          type={props.type}
          name={props.name}
          id={props.name}
          className="block w-full p-2 lg:p-3 rounded-md outline-none  border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  )
}
