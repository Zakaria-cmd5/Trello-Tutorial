import { deleteBord } from "@/actions/deleteBoard";
import { Button } from "@/components/ui/button";
import FormDeleteButton from "./FormDeleteButton";

interface Props {
  id: string;
  title: string;
}

const Board = ({ id, title }: Props) => {
  const deleteBoardWithId = deleteBord.bind(null, id);

  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>{title}</p>
      <FormDeleteButton />
    </form>
  );
};

export default Board;
