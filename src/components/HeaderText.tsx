import { cn } from "@/lib/utils";

type Props = {
  children: string;
  className?: string;
};

export default function HeaderText({ children }: Props) {
  return (
    <p className={cn("text-3xl font-coiny text-primary-main")}>{children}</p>
  );
}
