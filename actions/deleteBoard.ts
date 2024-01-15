"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

export async function deleteBord(id: string) {
  await prisma.board.delete({
    where: {
      id,
    },
  });

  revalidatePath("/organization/org_2arG3D3cGGPPtJMbaVp4K4JyQh7");
}
