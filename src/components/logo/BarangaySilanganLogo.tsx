import barangay_silangan_logo from "@/assets/barangay_silangan_logo.png";
import { cn } from "@/lib/utils";

export default function BarangaySilanganLogo({
  className,
}: {
  className?: string;
}) {
  return (
    <div className="w-24">
      <img
        className={cn(className, "w-full h-auto")}
        src={barangay_silangan_logo}
        alt="barangay silangan logo"
      />
    </div>
  );
}
