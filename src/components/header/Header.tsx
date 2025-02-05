import CompanyLogo from "../logo/CompanyLogo";
import TextLogo from "../logo/TextLogo";
import SolidWasteManagement from "../SolidWasteManagementProgram";
import { Button } from "../ui/button";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="bg-secondary-light p-4 px-20">
      <div className="flex items-center gap-2">
        <CompanyLogo/>
        <div>
          <TextLogo />
          <SolidWasteManagement />
        </div>
        <div className="flex-1 flex justify-end items-center gap-10">
          <NavLinks />
          <Button variant={"outline"} className="rounded-full text-secondary-dark bg-opacity-0 border-secondary-dark px-6">Login</Button>
        </div>
      </div>
    </header>
  );
}
