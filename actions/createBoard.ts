"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    title: string[];
  };
  message?: string | null;
};

const createBoardSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Minimum length of 3 letters is required" })
    .max(255, { message: "You have reached the maximum length" }),
});

export async function createBord(prevState: State, formData: FormData) {
  const validatedField = createBoardSchema.safeParse({
    title: formData.get("title"),
  });

  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      message: "Missing field",
    };
  }

  const { title } = validatedField.data;

  try {
    await prisma.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: "Datebase Error",
    };
  }

  revalidatePath("/organization/org_2arG3D3cGGPPtJMbaVp4K4JyQh7");
  redirect("/organization/org_2arG3D3cGGPPtJMbaVp4K4JyQh7");
}
