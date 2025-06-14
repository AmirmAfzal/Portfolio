import { services } from "@/utils/services";
import { z } from "zod";
const { File } = require("formdata-node");
export const emigrationSchema = z.object({
  service: z.enum(
    [...services.map((service) => service.id)] as [string, ...string[]],
    {
      required_error: "انتخاب سرویس الزامی است",
      invalid_type_error: "سرویس انتخاب‌شده نامعتبر است",
    }
  ),
  name: z
    .string({
      required_error: "نام و نام خانوادگی الزامی است",
      invalid_type_error: "نام و نام خانوادگی باید متن باشد",
    })
    .min(2, { message: "نام و نام خانوادگی باید حداقل ۲ حرف باشد" }),
  phone: z
    .string({
      required_error: "شماره تماس الزامی است",
      invalid_type_error: "شماره تماس باید به‌صورت متن وارد شود",
    })
    .regex(/^(\+98|0)?9\d{9}$/, { message: "شماره تماس معتبر نیست" }),
  telegram: z
    .string({
      required_error: "آیدی تلگرام الزامی است",
      invalid_type_error: "آیدی تلگرام باید متن باشد",
    })
    .min(3, { message: "آیدی تلگرام باید حداقل ۳ حرف باشد" }),
  age: z
    .number({
      required_error: "سن الزامی است",
      invalid_type_error: "سن باید به‌صورت عددی وارد شود",
    })
    .min(10, { message: "حداقل سن باید 10 سال باشد" })
    .max(99, { message: "حداکثر سن باید 99 سال باشد" }),
  gender: z.enum(["male", "female"], {
    required_error: "انتخاب جنسیت الزامی است",
    invalid_type_error: "جنسیت نامعتبر است",
  }),
  germany_level: z.enum(["a1", "a2", "b1", "b2", "c1", "c2"], {
    required_error: "سطح زبان آلمانی الزامی است",
    invalid_type_error: "سطح زبان آلمانی نامعتبر است",
  }),
  english_level: z.enum(["a1", "a2", "b1", "b2", "c1", "c2"], {
    required_error: "سطح زبان انگلیسی الزامی است",
    invalid_type_error: "سطح زبان انگلیسی نامعتبر است",
  }),
  expertise: z
    .string({
      required_error: "تخصص الزامی است",
      invalid_type_error: "تخصص باید متن باشد",
    })
    .min(3, { message: "تخصص باید حداقل ۳ حرف باشد" }),
  marital_status: z.enum(["single", "married"], {
    required_error: "وضعیت تأهل الزامی است",
    invalid_type_error: "وضعیت تأهل نامعتبر است",
  }),
  education_level: z.enum(["diploma", "bachelor", "master", "phd"], {
    required_error: "میزان تحصیلات الزامی است",
    invalid_type_error: "میزان تحصیلات نامعتبر است",
  }),
  budget: z
    .number({
      required_error: "بودجه الزامی است",
      invalid_type_error: "بودجه باید عدد باشد",
    })
    .min(100, { message: "بودجه باید حداقل ۱۰۰ یورو باشد" }),
  image: z.custom<File>(
    (file) => {
      if (!(file instanceof File)) {
        return false; // Ensure the value is a File instance
      }
      const validTypes = ["image/jpeg", "image/png"];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(file.type)) {
        throw new Error("فرمت فایل باید JPEG یا PNG باشد");
      }
      if (file.size > maxSize) {
        throw new Error("حجم فایل نباید بیشتر از ۵ مگابایت باشد");
      }
      return true;
    },
    { message: "فایل نامعتبر است" }
  ),
});
