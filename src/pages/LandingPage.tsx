import ButtonMain from "@/components/buttons/ButtonMain";
import CenterLayout from "@/components/CenterLayout";
import TextLogo from "@/components/logo/TextLogo";
import SolidWasteManagement from "@/components/SolidWasteManagementProgram";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <CenterLayout>
      <TextLogo className="text-6xl" />
      <SolidWasteManagement className="text-lg -mt-4" />
      <ButtonMain
        onClick={() => navigate("/register")}
        variant={"default"}
        className="w-fit mt-2"
      >
        Join Now
      </ButtonMain>
    </CenterLayout>
  );
}
