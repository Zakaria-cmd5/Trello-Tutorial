import { z } from "zod";
import { Board } from "@prisma/client";
import { createBoardSchema } from "./schema";
import { ActionState } from "@/lib/createSafeAction";

export type InputType = z.infer<typeof createBoardSchema>;
export type ReturnType = ActionState<InputType, Board>;
