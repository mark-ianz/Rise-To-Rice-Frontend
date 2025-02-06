import { Button } from "@/components/ui/button";
import MeatBalls from "@/assets/meatballs-menu-svgrepo-com.svg";
import Field_FirstSection from "./Field_FirstSection";
import HeaderText from "../HeaderText";

export default function LeftSide() {
  return (
    <div className="w-1/2 rounded-l-xl bg-secondary-light flex p-10 px-20 flex-col">
      <HeaderText>Register</HeaderText>
      <Field_FirstSection />
      <div className="flex flex-col items-center justify-center">
        <Button className="w-full text-lg">Continue</Button>
        <img className="w-6" src={MeatBalls} alt="options" />
      </div>
    </div>
  );
}
