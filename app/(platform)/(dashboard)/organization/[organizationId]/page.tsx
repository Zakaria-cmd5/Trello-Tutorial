import { createBord } from "@/actions/createBoard";
import { Button } from "@/components/ui/button";
import prisma from "@/prisma/client";
import Board from "./Board";

const OrganizationIdPage = async () => {
  const board = await prisma.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <form action={createBord}>
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-black border p-1"
        />
        <Button type="submit">Submit</Button>
      </form>
      <div className="space-y-2">
        {board.map((board) => (
          <Board id={board.id} title={board.title} key={board.id} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
