import InputText from "@/components/InputText";
import SelectSuffix from "@/components/SelectSuffix";
import DatePicker from "../DatePicker";
import useCreateAccountContext from "@/hooks/useCreateAccountContext";
import SelectGender from "./SelectGender";

export default function Field_FirstSection() {
  const { state, dispatch } = useCreateAccountContext();

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_FIRST_NAME", payload: e.target.value });
  };

  const handleMiddleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_MIDDLE_NAME", payload: e.target.value });
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_LAST_NAME", payload: e.target.value });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_ADDRESS", payload: e.target.value });
  };

  const handleContactNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({ type: "SET_CONTACT_NUMBER", payload: e.target.value });
  };

  const handleBirthDateChange = (date: Date | undefined) => {
    if (!date) return;
    dispatch({ type: "SET_DATE_OF_BIRTH", payload: date.toISOString() });
  };

  return (
    <div className="flex flex-col my-10 gap-4">
      <div className="flex flex-row gap-4">
        <InputText
          value={state.first_name}
          onChange={handleFirstNameChange}
          type="text"
          label="First Name"
        />
        <InputText
          value={state.middle_name}
          onChange={handleMiddleNameChange}
          type="text"
          label="Middle Name"
          placeholder="(Optional)"
        />
        <div className="flex gap-4">
          <InputText
            value={state.last_name}
            onChange={handleLastNameChange}
            type="text"
            label="Last Name"
          />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <SelectSuffix />
        <SelectGender />
        <span className="flex-1">
          <div>
            <p>Date of Birth</p>
            <DatePicker value={state.birthdate as Date} onChange={handleBirthDateChange} />
          </div>
        </span>
      </div>
      <div className="flex gap-4">
        <InputText
          onChange={handleAddressChange}
          value={state.address}
          type="text"
          label="Address"
          wrapperClassName="flex-1"
          placeholder="Blk, Street, Barangay, City"
        />
        <InputText
          value={state.contact_number}
          onChange={handleContactNumberChange}
          type="text"
          label="Contact Number"
        />
      </div>
    </div>
  );
}
