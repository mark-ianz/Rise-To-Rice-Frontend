import CenterLayout from "@/components/CenterLayout";
import LeftSide from "@/components/register/LeftSide";
import RightSide from "@/components/register/RightSide";
import { ArrowLeft } from "lucide-react";

export default function Register() {
  return (
    <CenterLayout className="items-center py-10">
      <div className="w-full h-full flex rounded-xl shadow-lg bg-red-50 relative">
        <div className="absolute text-gray-500 top-4 left-4">
          <ArrowLeft/>
        </div>
        <LeftSide />
        <RightSide/>
      </div>
    </CenterLayout>
  );
}
