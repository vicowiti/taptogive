interface Props {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  setter?: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
}

export default function OldInput(props: Props) {
  return (
    <div className="m-3">
      <label
        htmlFor={props.name}
        className="block text-left text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <div className="mt-1">
        <input
          disabled={props.disabled}
          type={props.type}
        //   value={props.value}
        //   onChange={(e) => props.setter(e.target.value)}
          name={props.name}
          id={props.name}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 p-3 border  focus:ring-indigo-500 sm:text-sm"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}