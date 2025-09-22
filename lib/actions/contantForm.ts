"use server";

import { ActionData } from "@/lib/formTypes";

import { connectDB } from "../db/db";
import contactModel from "../db/models/contactModel";
import { contactSchema } from "../validation/schemas/contactSchema";
import { z } from "zod";

export const createContact = async (
  prevState: ActionData,
  formData: z.infer<typeof contactSchema>
): Promise<ActionData> => {
  await connectDB();

  const result = await contactSchema.safeParse(formData);
  if (!result.success) {
    return {
      message: "ERROR",
      errors: result.error.errors.map((error) => error.message),
    };
  }

  await contactModel.create({
    name: result.data.name,
    email: result.data.email,
    subject: result.data.subject,
    message: result.data.message,
  });

  return {
    message: "SUCCESS",
    errors: [],
  };
};
