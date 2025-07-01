// "use server";
// import { connectDB } from "@/lib/db/db";
// import { revalidatePath } from "next/cache";
// import { z } from "zod";
// import { emigrationSchema } from "../lib/validation/schemas/emigrationSchema";
// import { error } from "console";
// import { ActionData } from "@/utils/formTypes";
// import consultationModel from "../lib/db/models/consultationModel";
// import axios from "axios";
// const { v4: uuidv4 } = require("uuid");
// const {
//   S3Client,
//   PutObjectCommand,
//   GetObjectCommand,
// } = require("@aws-sdk/client-s3");
// const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
// export const createConsultation = async (
//   prevState: ActionData,
//   formData: FormData
// ): Promise<ActionData> => {
//   await connectDB();
//   const data: Record<string, any> = {};
//   formData.forEach((value: any, key: string) => {
//     data[key] = value;
//   });
//   data.age = Number(data.age);
//   data.budget = Number(data.budget);

//   console.log(data);
//   const result = await emigrationSchema.safeParse(data);
//   if (!result.success) {
//     console.log(result.error.format());
//     return {
//       message: "لطفا تمام فیلد ها را پر کنید",
//       errors: [],
//     };
//   }

//   const createdConsultation = await consultationModel.create({
//     ...data,
//   });

//   const botToken = process.env.TELEGRAM_BOT_TOKEN; // Replace with your bot token
//   const chatId = -1002517799088; // or the numeric ID

//   const client = new S3Client({
//     region: "default",
//     endpoint: process.env.LIARA_ENDPOINT,
//     credentials: {
//       accessKeyId: process.env.LIARA_ACCESS_KEY,
//       secretAccessKey: process.env.LIARA_SECRET_KEY,
//     },
//   });

//   const file = formData.get("image") as File;
//   if (!file) throw new Error("No file uploaded");

//   const arrayBuffer = await file.arrayBuffer();
//   const buffer = Buffer.from(arrayBuffer);
//   const mimeType = file.type;
//   const fileName = `${uuidv4()}-${file.name.split(".")[1]}`;

//   const params = {
//     Body: buffer,
//     Bucket: process.env.LIARA_BUCKET_NAME,
//     Key: `uploads/${fileName}`,
//     ContentType: mimeType,
//   };

//   // callback
//   client.send(new PutObjectCommand(params), (error: any) => {
//     if (error) {
//       console.log(error);
//     } else {
//       const message = `
//    درخواست جدید : ${
//      data.service === "consultation"
//        ? "مشاوره یک‌ساعته"
//        : data.service === "resume"
//        ? "نگارش رزومه و انگیزه‌نامه"
//        : data.service === "linkedin"
//        ? "ایجاد و تنظیم پروفایل حرفه‌ای لینکدین"
//        : data.service === "jobcontract"
//        ? "پیدا کردن کارفرما و دریافت قرارداد کاری"
//        : data.service === "visa"
//        ? "کمک در کارهای سفارت و ویزا "
//        : ""
//    }
//   نام : ${data.name}
//   شماره تماس : ${data.phone}
//   آیدی تلگرام : @${data.telegram}
//   سن : ${data.age}
//   جنسیت : ${data.gender === "male" ? "مرد" : "زن"}
//   زبان آلمانی : ${
//     data.germany_level === "a1"
//       ? "A1"
//       : data.germany_level === "a2"
//       ? "A2"
//       : data.germany_level === "b1"
//       ? "B1"
//       : data.germany_level === "b2"
//       ? "B2"
//       : data.germany_level === "c1"
//       ? "C1"
//       : data.germany_level === "c2"
//       ? "C2"
//       : ""
//   }
//   زبان انگلیسی : ${
//     data.english_level === "a1"
//       ? "A1"
//       : data.english_level === "a2"
//       ? "A2"
//       : data.english_level === "b1"
//       ? "B1"
//       : data.english_level === "b2"
//       ? "B2"
//       : data.english_level === "c1"
//       ? "C1"
//       : data.english_level === "c2"
//       ? "C2"
//       : ""
//   }
//   تخصص : ${data.expertise}
//   تاهل : ${data.marital_status === "single" ? "مجرد" : "متاهل"}
//   سطح تحصیل : ${
//     data.education_level === "diploma"
//       ? "دیپلم"
//       : data.education_level === "bachelor"
//       ? "لیسانس"
//       : data.education_level === "master"
//       ? "فوق لیسانس"
//       : data.education_level === "phd"
//       ? "دکترا"
//       : ""
//   }
//   بودجه (یورو) : ${data.budget}
//   فیش واریزی : ${"https://bani.storage.c2.liara.space/uploads/" + fileName}
//   `;

//       let postData = JSON.stringify({
//         chatId: -1002517799088,
//         message: message,
//         password: "pinsfdb[op[a0sn1239as745tbascion",
//       });

//       let config = {
//         method: "post",
//         maxBodyLength: Infinity,
//         url: "https://telegram-notification-ugjj.onrender.com/send",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         data: postData,
//       };
//       axios
//         .request(config)
//         .then((response: any) => {})
//         .catch((error: any) => {});
//     }
//   });

//   return {
//     message: "SUCCESS",
//     errors: [],
//   };
// };
