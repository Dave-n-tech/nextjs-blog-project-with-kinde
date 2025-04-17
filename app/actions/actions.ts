"use server";
/** use server is used for defining server actions
 * which are functions that run only on the server */
import { revalidatePath } from "next/cache";
import prisma from "../lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  console.log(title, body);
  await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  revalidatePath("/posts");
}
