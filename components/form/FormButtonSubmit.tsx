"use client";

import { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "primary";
}

const FormButtonSubmit = ({
  children,
  className,
  disabled,
  variant,
}: Props) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={disabled || pending}
      variant={variant}
      size="sm"
      className={cn(className)}
    >
      {children}
    </Button>
  );
};

export default FormButtonSubmit;
