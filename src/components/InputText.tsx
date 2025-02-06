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
};

export default function InputText({
  label,
  placeholder,
  inputClassName,
  wrapperClassName,
  type,
  onChange,
}: Props) {
  return (
    <span className={cn("flex flex-col", wrapperClassName)}>
      <p>{label}</p>
      <Input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={cn("bg-white", inputClassName)}
      />
    </span>
  );
}
