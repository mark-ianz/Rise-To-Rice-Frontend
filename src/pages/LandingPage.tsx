import ButtonMain from "@/components/buttons/ButtonMain";
import TextLogo from "@/components/logo/TextLogo";
import SolidWasteManagement from "@/components/SolidWasteManagementProgram";

export default function LandingPage() {
  return (
    <div className="h-full flex flex-col justify-center">
      <TextLogo className="text-6xl"/>
      <SolidWasteManagement className="text-lg -mt-4"/>
      <ButtonMain variant={"default"} className="w-fit mt-2">Join Now</ButtonMain>
    </div>
  )
}
