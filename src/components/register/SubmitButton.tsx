import useCreateAccountContext from "@/hooks/useCreateAccountContext";
import {
  UserCreate_First_Part_Schema,
  UserCreate_Second_Part_Schema,
} from "@/schema/CreateAccountSchema";
import { ZodError } from "zod";
import { Button } from "../ui/button";

type Props = {
  isFirstSection: boolean;
  setIsFirstSection: (value: boolean) => void;
};

export default function SubmitButton({
  isFirstSection,
  setIsFirstSection,
}: Props) {
  const { state, dispatch } = useCreateAccountContext();

  function handleFirstPartSubmit() {
    try {
      UserCreate_First_Part_Schema.parse(state);
      setIsFirstSection(false);
      dispatch({ type: "SET_ERROR", payload: null });
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        dispatch({
          type: "SET_ERROR",
          payload: error.errors.map((err) => err.message),
        });
      }
    }
  }

  function handleSecortPartSubmit() {
    // handle second part
    try {
      UserCreate_Second_Part_Schema.parse(state);

      dispatch ({ type: "SET_ERROR", payload: null });
      console.log("Checking if email is already taken");

      // check if email is already taken
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        dispatch({
          type: "SET_ERROR",
          payload: error.errors.map((err) => err.message),
        });
      }
    }
  }

  function handleSubmit() {
    if (isFirstSection) {
      handleFirstPartSubmit();
    } else {
      handleSecortPartSubmit();
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Button className="w-full text-lg" onClick={handleSubmit}>
        Continue
      </Button>
      {!isFirstSection && (
        <Button
          type="submit"
          variant={"outline"}
          className="w-full text-lg"
          onClick={() => setIsFirstSection(true)}
        >
          Go Back
        </Button>
      )}
    </div>
  );
}
