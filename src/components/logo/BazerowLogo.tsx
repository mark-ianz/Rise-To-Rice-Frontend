import bazerow_logo from "@/assets/bazerow_logo.png";
import { cn } from "@/lib/utils";

export default function BazerowLogo({ className }: { className?: string }) {
  return (
    <div className="w-24">
      <img
        className={cn(className, "w-full h-auto")}
        src={bazerow_logo}
        alt="bazerow logo"
      />
    </div>
  );
}
