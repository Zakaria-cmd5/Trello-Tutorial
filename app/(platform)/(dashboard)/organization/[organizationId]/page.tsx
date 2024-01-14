import { create } from "@/actions/createBoard";
import { Button } from "@/components/ui/button";
import prisma from "@/prisma/client";

const OrganizationIdPage = async () => {
  const board = await prisma.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <form action={create}>
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
          <div key={board.id}>{board.title}</div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
