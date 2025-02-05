import InputText from "@/components/InputText";
import SelectSuffix from "@/components/SelectSuffix";
import { Button } from "@/components/ui/button";
import MeatBalls from "@/assets/meatballs-menu-svgrepo-com.svg";

export default function LeftSide() {
  return (
    <div className="w-1/2 rounded-l-xl bg-secondary-light flex p-10 px-20 flex-col gap-10">
      <p className="text-3xl font-coiny text-primary-main">REGISTER</p>
      <div className="flex flex-col gap-4">
        <InputText label="First Name" />
        <InputText label="Middle Name" placeholder="(Optional)" />
        <InputText label="Last Name" />
        <SelectSuffix />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Button className="w-full text-lg">Continue</Button>
        <img className="w-6" src={MeatBalls} alt="" />
      </div>
    </div>
  );
}
