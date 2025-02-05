import { cn } from "@/lib/utils";

export default function SolidWasteManagement({
  className,
}: {
  className?: string;
}) {
  return (
    <p className={cn("-mt-2 text-secondary-dark text-sm", className)}>
      SOLID WASTE MANAGEMENT PROGRAM
    </p>
  );
}
