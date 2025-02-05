import { cn } from "@/lib/utils";
import company_logo from "../../assets/COMPONY LOGO NO BG.png";

export default function CompanyLogo({ className }: { className?: string }) {
  return (
    <div className="w-24">
      <img
        className={cn(className, "w-full h-auto")}
        src={company_logo}
        alt="barangay silangan solid waste management logo"
      />
    </div>
  );
}
