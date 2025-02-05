import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { MouseEventHandler } from "react";

type ButtonMainProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | null | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function ButtonMain({
  className,
  variant,
  children,
  onClick,
}: ButtonMainProps) {
  const styles = {
    default: "bg-tertiary text-secondary-light hover:bg-tertiary-dark",
    secondary: "bg-none border text-tertiary hover:bg-tertiary-dark",
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        "rounded-full text-secondary-dark bg-opacity-0 border-secondary-dark px-6",
        className,
        variant && styles[variant]
      )}
    >
      {children}
    </Button>
  );
}
