import Field_FirstSection from "./Field_FirstSection";
import HeaderText from "../HeaderText";
import useCreateAccountContext from "@/hooks/useCreateAccountContext";
import ZodErrorDisplay from "../ZodErrorDisplay";
import { FormEvent, useState } from "react";
import Field_SecondSection from "./Field_SecondSection";
import SubmitButton from "./SubmitButton";

export default function LeftSide() {
  const { state } = useCreateAccountContext();
  const [isFirstSection, setIsFirstSection] = useState<boolean>(true);

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
      className="w-1/2 rounded-l-xl bg-secondary-light flex p-10 px-20 flex-col justify-center"
    >
      <HeaderText>Register</HeaderText>
      {isFirstSection ? <Field_FirstSection /> : <Field_SecondSection />}
      <ZodErrorDisplay error={state.error} />
      <SubmitButton
        isFirstSection={isFirstSection}
        setIsFirstSection={setIsFirstSection}
      />
    </form>
  );
}
