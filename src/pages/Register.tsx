import CenterLayout from "@/components/CenterLayout";
import GoBackButton from "@/components/GoBackButton";
import LeftSide from "@/components/register/LeftSide";
import RightSide from "@/components/register/RightSide";

export default function Register() {
  return (
    <CenterLayout className="items-center py-10 max-w-screen-xl">
      <div className="w-full h-full flex rounded-xl shadow-lg bg-red-50 relative">
        <GoBackButton />
        <LeftSide />
        <RightSide />
      </div>
    </CenterLayout>
  );
}
