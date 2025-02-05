import { cn } from "@/lib/utils";

export default function TextLogo({ className }: { className?: string }) {
  return (
    <p className={cn("font-coiny text-primary-main text-4xl", className)}>
      RISE TO RICE
    </p>
  );
}
