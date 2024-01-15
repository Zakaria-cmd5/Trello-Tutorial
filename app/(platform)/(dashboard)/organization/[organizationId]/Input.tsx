"use client";

import { useFormStatus } from "react-dom";
import { Input as FromInput } from "@/components/ui/input";

interface Props {
  errors?: {
    title?: string[];
  };
}

const Input = ({ errors }: Props) => {
  const { pending } = useFormStatus();
  return (
    <div>
      <FromInput
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className="text-rose-500 mt-1">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Input;
