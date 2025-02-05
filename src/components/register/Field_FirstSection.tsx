import InputText from "@/components/InputText";
import SelectSuffix from "@/components/SelectSuffix";
import DatePicker from "../DatePicker";

export default function Field_FirstSection() {
  return (
    <div className="flex flex-col mt-10 mb-10 gap-4">
      <div className="flex flex-col gap-4">
        <InputText label="First Name" />
        <InputText label="Middle Name" placeholder="(Optional)" />
        <div className="flex gap-4">
          <InputText label="Last Name" wrapperClassName="flex-1"/>
          <SelectSuffix />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <InputText label="Address" wrapperClassName="flex-1" />
        <InputText label="Contact Number" wrapperClassName="w-[150px]" />
        <span>
          <p>Date of Birth</p>
          <DatePicker />
        </span>
      </div>
    </div>
  );
}
