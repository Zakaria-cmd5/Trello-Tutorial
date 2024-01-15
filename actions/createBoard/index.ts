"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { createBoardSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId)
    return {
      error: "Unauthorized",
    };

  const { title } = data;

  let board;

  try {
    board = await prisma.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      error: "Failed to create board.",
    };
  }

  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const createBoard = createSafeAction(createBoardSchema, handler);
