"use server";

import prisma from "@/prisma/client";
import { z } from "zod";

const createBoardSchema = z.object({
  title: z.string().min(1).max(255),
});

export async function createBord(formData: FormData) {
  const { title } = createBoardSchema.parse({
    title: formData.get("title"),
  });

  await prisma.board.create({
    data: {
      title,
    },
  });
}
