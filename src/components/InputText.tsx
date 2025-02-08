import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type Props = {
  label: string;
  placeholder?: string;
  inputClassName?: string;
  wrapperClassName?: string;
  type: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
};

export default function InputText({
  label,
  placeholder,
  inputClassName,
  wrapperClassName,
  type,
  onChange,
  value,
}: Props) {
  return (
    <span className={cn("flex flex-col", wrapperClassName)}>
      <p>{label}</p>
      <Input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={cn("bg-white", inputClassName)}
      />
    </span>
  );
}
