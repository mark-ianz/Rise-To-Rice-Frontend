import InputText from "@/components/InputText";
import useCreateAccountContext from "@/hooks/useCreateAccountContext";

export default function Field_SecondSection() {
  const { state, dispatch } = useCreateAccountContext();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_PASSWORD", payload: e.target.value });
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({ type: "SET_CONFIRM_PASSWORD", payload: e.target.value });
  };

  return (
    <div className="flex flex-col my-10 gap-4">
      <div className="flex flex-col gap-4">
        <InputText
          value={state.email}
          onChange={handleEmailChange}
          type="email"
          label="Email"
        />
        <InputText
          value={state.password}
          onChange={handlePasswordChange}
          type="password"
          label="Password"
        />
        <InputText
          value={state.confirm_password}
          onChange={handleConfirmPasswordChange}
          type="password"
          label="Confirm Password"
        />
      </div>
    </div>
  );
}
