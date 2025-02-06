import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

type Props = {
  className?: string;
};

export default function GoBackButton({ className }: Props) {
  const navigate = useNavigate();

  return (
    <Button
      className={cn("absolute text-gray-500 top-4 left-4 rounded-full", className)}
      onClick={() => navigate(-1)}
      variant={"ghost"}
      size={"icon"}
    >
      <ArrowLeft/>
    </Button>
  );
}
