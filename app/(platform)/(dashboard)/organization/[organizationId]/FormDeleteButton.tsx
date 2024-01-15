'use client'

import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

const FormDeleteButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant="destructive" size="sm" disabled={pending}>
      Delete
    </Button>
  );
};

export default FormDeleteButton;
