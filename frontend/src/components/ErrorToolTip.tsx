import { FC } from "react";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ErrorTooltipProps {
  className?: string;
  errorMessage?: string;
}

export const ErrorToolTip: FC<ErrorTooltipProps> = ({
  className,
  errorMessage,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Info
            className={cn(
              "text-red-500 absolute top-1/2 transform -translate-y-1/2",
              className
            )}
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
