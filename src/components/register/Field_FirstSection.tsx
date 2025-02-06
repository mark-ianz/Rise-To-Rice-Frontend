import InputText from "@/components/InputText";
import SelectSuffix from "@/components/SelectSuffix";
import DatePicker from "../DatePicker";

export default function Field_FirstSection() {
  return (
    <div className="flex flex-col mt-10 mb-10 gap-4">
      <div className="flex flex-col gap-4">
        <InputText type="text" label="First Name" />
        <InputText type="text" label="Middle Name" placeholder="(Optional)" />
        <div className="flex gap-4">
          <InputText type="text" label="Last Name" wrapperClassName="flex-1" />
          <SelectSuffix />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <InputText
          type="text"
          label="Address"
          wrapperClassName="flex-1"
          placeholder="Blk, Street, Barangay, City"
        />
        <InputText
          type="text"
          label="Contact Number"
          wrapperClassName="w-[180px]"
        />
        <span>
          <p>Date of Birth</p>
          <DatePicker />
        </span>
      </div>
    </div>
  );
}
