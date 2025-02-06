import ButtonMain from "@/components/buttons/ButtonMain";
import GoBackButton from "@/components/GoBackButton";
import HeaderText from "@/components/HeaderText";
import InputText from "@/components/InputText";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-1/2 rounded-xl bg-secondary-light flex p-10 px-20 flex-col justify-center max-w-screen-sm h-[90%] relative">
        <GoBackButton />
        <HeaderText>Login</HeaderText>
        <div className="mt-10 flex flex-col gap-4">
          <InputText type="text" label="Username" />
          <InputText type="password" label="Password" />
        </div>
        <Link to={"/forgot-password"} className="mt-2 hover:underline">
          Forgot Password?
        </Link>
        <div className="flex flex-col items-center gap-10">
          <ButtonMain className="mt-10 rounded-md w-full" variant={"default"}>
            Login
          </ButtonMain>
          <Link to={"/register"} className="mt-2 text-tertiary underline">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}
