import { deleteBord } from "@/actions/deleteBoard";
import { Button } from "@/components/ui/button";

interface Props {
  id: string;
  title: string;
}

const Board = ({ id, title }: Props) => {
  const deleteBoardWithId = deleteBord.bind(null, id);

  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>{title}</p>
      <Button type="submit" variant="destructive" size="sm">
        Delete
      </Button>
    </form>
  );
};

export default Board;
