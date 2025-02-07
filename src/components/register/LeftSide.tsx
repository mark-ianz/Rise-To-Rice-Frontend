import { Button } from "@/components/ui/button";
import MeatBalls from "@/assets/meatballs-menu-svgrepo-com.svg";
import Field_FirstSection from "./Field_FirstSection";
import HeaderText from "../HeaderText";
import useCreateAccountContext from "@/hooks/useCreateAccountContext";
import { UserCreate_First_Part_Schema } from "@/schema/CreateAccountSchema";

export default function LeftSide() {
  const { state } = useCreateAccountContext();

  function handleFirstPartSubmit() {
    console.log("state", state);
    try {
      const user_first_part = UserCreate_First_Part_Schema.parse(state);

      console.log(user_first_part);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-1/2 rounded-l-xl bg-secondary-light flex p-10 px-20 flex-col justify-center">
      <HeaderText>Register</HeaderText>
      <Field_FirstSection />
      <div className="flex flex-col items-center justify-center">
        <Button className="w-full text-lg" onClick={handleFirstPartSubmit}>
          Continue
        </Button>
        <img className="w-6" src={MeatBalls} alt="options" />
      </div>
    </div>
  );
}
