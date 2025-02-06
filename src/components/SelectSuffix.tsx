import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import useCreateAccountContext from "@/hooks/useCreateAccountContext";

export default function SelectSuffix() {
  const { dispatch } = useCreateAccountContext();

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

  const handleSuffixChange = (suffix: string) => {
    dispatch({ type: "SET_SUFFIX", payload: suffix });
  };

  return (
    <span>
      <p>Suffix</p>
      <Select onValueChange={handleSuffixChange}>
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
