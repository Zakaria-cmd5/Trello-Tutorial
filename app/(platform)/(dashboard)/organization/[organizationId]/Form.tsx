"use client";

import { useAction } from "@/hooks/useAction";
import FormButton from "./FormButton";
import Input from "./Input";
import { createBoard } from "@/actions/createBoard";

const Form = () => {
  const { excute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => console.log(data, "Success"),
    onError: (error) => console.log(error),
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    excute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <Input errors={fieldErrors} />
      </div>
      <FormButton />
    </form>
  );
};

export default Form;
