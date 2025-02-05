import { Input } from "./ui/input";

type Props = {
  label: string;
  placeholder?: string;
};

export default function InputText({label, placeholder}: Props) {
  return (
    <span>
      <p>{label}</p>
      <Input placeholder={placeholder} className="bg-white"/>
    </span>
  );
}
