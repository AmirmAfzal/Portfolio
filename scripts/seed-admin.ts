/**
 * One-off script to create the single admin/owner account for the devlog.
 * There is no public signup — this is the only way a user gets created.
 *
 * Usage:
 *   npx tsx scripts/seed-admin.ts
 *
 * Reads DATABASE_URL from .env (via dotenv). Generates a strong random
 * password and prints it once to stdout — it is NOT stored anywhere else,
 * so copy it before closing the terminal. If a user with the given email
 * already exists, the script exits without making changes (it will not
 * silently reset an existing password).
 */
import "dotenv/config";
import mongoose from "mongoose";
import { hash } from "bcrypt";
import crypto from "crypto";

import userModel from "../lib/db/models/userModel";

const ADMIN_EMAIL = "amirrrez70@gmail.com";
const ADMIN_NAME = "Amirreza";

function generatePassword(length = 20): string {
  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*";
  const bytes = crypto.randomBytes(length);
  let out = "";
  for (let i = 0; i < length; i++) {
    out += chars[bytes[i] % chars.length];
  }
  return out;
}

async function main() {
  const uri = process.env.DATABASE_URL;
  if (!uri) {
    throw new Error("DATABASE_URL is not set (check your .env file).");
  }

  await mongoose.connect(uri);

  const existing = await userModel.findOne({ email: ADMIN_EMAIL });
  if (existing) {
    console.log(
      `A user with email ${ADMIN_EMAIL} already exists (role: ${existing.role}). No changes made.`
    );
    await mongoose.disconnect();
    return;
  }

  const plainPassword = generatePassword();
  const hashedPassword = await hash(plainPassword, 10);

  await userModel.create({
    name: ADMIN_NAME,
    email: ADMIN_EMAIL,
    password: hashedPassword,
    role: "ROOT",
  });

  console.log("Admin user created successfully.");
  console.log("-----------------------------------");
  console.log(`Email:    ${ADMIN_EMAIL}`);
  console.log(`Password: ${plainPassword}`);
  console.log("-----------------------------------");
  console.log(
    "This password is only shown here, right now — save it. It is not stored anywhere in the repo."
  );

  await mongoose.disconnect();
}

main().catch((error) => {
  console.error("Failed to seed admin user:", error);
  process.exit(1);
});
