import { FC } from "react";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ErrorTooltipProps {
  errorMessage?: string;
}

export const ErrorToolTip: FC<ErrorTooltipProps> = ({ errorMessage }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Info
            className="text-red-500 absolute top-1/2 transform -translate-y-1/2 right-3"
            size={16}
          />
        </TooltipTrigger>
        <TooltipContent>
          <span className="error-msg">{errorMessage}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
