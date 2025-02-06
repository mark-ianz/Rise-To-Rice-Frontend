import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Gender } from "@/types/createAccount.type";
import { SelectValue } from "@radix-ui/react-select";

export default function SelectGender() {
  const [gender, setGender] = useState<Gender>();

  console.log(gender)
  return (
    <div>
      <p>Gender</p>
      <Select onValueChange={(g) => setGender(g as Gender)}>
        <SelectTrigger className="bg-white">
          <SelectValue placeholder="Male" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
          <SelectItem value="prefer not to say">Prefer not to say</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
