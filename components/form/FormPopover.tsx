import React, { ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface Props {
  children: ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

const FormPopover = ({
  children,
  align,
  side = "bottom",
  sideOffset = 0,
}: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        align={align}
        className="w-80 pt-3"
        side={side}
        sideOffset={sideOffset}
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          Create board
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FormPopover;
