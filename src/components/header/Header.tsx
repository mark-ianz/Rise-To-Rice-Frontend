import { useNavigate } from "react-router-dom";
import ButtonMain from "../buttons/ButtonMain";
import CompanyLogo from "../logo/CompanyLogo";
import TextLogo from "../logo/TextLogo";
import SolidWasteManagement from "../SolidWasteManagementProgram";
import NavLinks from "./NavLinks";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-secondary-light p-4 px-20">
      <div className="flex items-center gap-2">
        <CompanyLogo />
        <div>
          <TextLogo />
          <SolidWasteManagement />
        </div>
        <div className="flex-1 flex justify-end items-center gap-10">
          <NavLinks />
          <ButtonMain variant={"default"} onClick={() => navigate("/login")}>
            Login
          </ButtonMain>
        </div>
      </div>
    </header>
  );
}
