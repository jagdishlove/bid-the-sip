"use server";
import { auth } from "@/auth";
import { items } from "@/db/schema";
import { database } from "@/db/database";
import { revalidatePath } from "next/cache";

export const getAllItems = async (formData: FormData) => {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }
  const user = session.user;
  if (!user || !user.id) {
    throw new Error("Unauthorized");
  }
  await database.insert(items).values({
    name: formData.get("name") as string,
    userId: user.id,
  });
  revalidatePath("/");
};
