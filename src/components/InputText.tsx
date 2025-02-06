import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { HTMLInputTypeAttribute } from "react";

type Props = {
  label: string;
  placeholder?: string;
  inputClassName?: string;
  wrapperClassName?: string;
  type: HTMLInputTypeAttribute;
};

export default function InputText({
  label,
  placeholder,
  inputClassName,
  wrapperClassName,
  type,
}: Props) {
  return (
    <span className={cn("flex flex-col", wrapperClassName)}>
      <p>{label}</p>
      <Input
        type={type}
        placeholder={placeholder}
        className={cn("bg-white", inputClassName)}
      />
    </span>
  );
}
