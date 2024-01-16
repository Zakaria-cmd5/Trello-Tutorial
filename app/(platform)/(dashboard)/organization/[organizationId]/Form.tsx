"use client";

import { useAction } from "@/hooks/useAction";
import { createBoard } from "@/actions/createBoard";
import FormInput from "@/components/form/FormInput";
import FormButtonSubmit from "@/components/form/FormButtonSubmit";

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
        <FormInput label="Board Title" id="title" errors={fieldErrors} />
      </div>
      <FormButtonSubmit className="mt-2">
        Submit
      </FormButtonSubmit>
    </form>
  );
};

export default Form;
