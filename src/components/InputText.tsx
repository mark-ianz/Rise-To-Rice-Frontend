import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

type Props = {
  label: string;
  placeholder?: string;
  inputClassName?: string;
  wrapperClassName?: string
};

export default function InputText({ label, placeholder, inputClassName, wrapperClassName }: Props) {
  return (
    <span className={cn("flex flex-col", wrapperClassName)}>
      <p>{label}</p>
      <Input placeholder={placeholder} className={cn("bg-white", inputClassName)} />
    </span>
  );
}
