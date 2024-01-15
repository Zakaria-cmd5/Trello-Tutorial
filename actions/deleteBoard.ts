"use server";

import prisma from "@/prisma/client";

export async function deleteBord(id: string) {
  await prisma.board.delete({
    where: {
      id,
    },
  });
}
