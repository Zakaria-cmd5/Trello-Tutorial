"use client";

import { createBord } from "@/actions/createBoard";
import { useFormState } from "react-dom";
import FormButton from "./FormButton";
import Input from "./Input";

const Form = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createBord, initialState);

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <Input errors={state?.errors} />
      </div>
      <FormButton />
    </form>
  );
};

export default Form;
