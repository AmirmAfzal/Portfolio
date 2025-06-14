"use server";
import { connectDB } from "@/lib/db/db";
import userModel from "@/lib/db/models/userModel";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";
import bcrypt from "bcrypt";
import { signIn } from "next-auth/react";

export async function signup(
  prevState: { message: string },
  formData: FormData
) {
  await connectDB();

  const formSchema = zfd.formData({
    name: zfd.text(),
    email: zfd.text(),
    password: zfd.text(),
  });

  const validate = formSchema.safeParse(formData);
  if (!validate.success) return { message: "لطفا تمام فیلد ها را پر کنید" };

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(
    formData.get("password") as string,
    salt
  );

  const findedUser = await userModel.findOne({
    email: formData.get("email"),
  });
  if (findedUser) return { message: "این ایمیل قبلا ثبت شده است" };

  const createdUser = await userModel.create({
    name: formData.get("name"),
    email: formData.get("email"),
    password: hashedPassword,
    role: "MEMBER",
  });

  return { message: "" };
  // ^ For redirecting user to a page
  // > redirect(`/dashboard/invoice/edit?error=SERVER_ERROR`);
  // ^ For revalidating the page
  // > revalidatePath("/");
}
