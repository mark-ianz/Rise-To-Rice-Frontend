import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";

export default function SelectSuffix() {
  const suffix = [
    {
      suffix: "Jr.",
      value: "jr.",
    },
    {
      suffix: "Sr.",
      value: "sr.",
    },
    {
      suffix: "II",
      value: "ii",
    },
    {
      suffix: "III",
      value: "iii",
    },
    {
      suffix: "IV",
      value: "iv",
    },
    {
      suffix: "V",
      value: "v",
    },
    {
      suffix: "VI",
      value: "vi",
    },
    {
      suffix: "VII",
      value: "vii",
    },
    {
      suffix: "VIII",
      value: "viii",
    },
    {
      suffix: "IX",
      value: "ix",
    },
    {
      suffix: "X",
      value: "x",
    },
  ];

  return (
    <span>
      <p>Suffix</p>
      <Select>
        <SelectTrigger className="bg-white">
          <SelectValue placeholder="(Optional)" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Suffixes</SelectLabel>
            {suffix.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.suffix}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </span>
  );
}
