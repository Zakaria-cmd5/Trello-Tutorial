import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="mt-2" disabled={pending}>
      Submit
    </Button>
  );
};

export default FormButton;
