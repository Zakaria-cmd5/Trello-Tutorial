import prisma from "@/prisma/client";
import Board from "./Board";
import Form from "./Form";

const OrganizationIdPage = async () => {
  const board = await prisma.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <Form />
      <div className="space-y-2">
        {board.map((board) => (
          <Board id={board.id} title={board.title} key={board.id} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
