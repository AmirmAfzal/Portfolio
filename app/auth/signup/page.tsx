"use client";
import React, { startTransition, useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { signup } from "../signup/actions";
import { CiUser, CiMail, CiLock } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { createCanvas } from "canvas";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const initialState = {
  message: "",
};

const generateCaptcha = () => {
  // تولید شده توسط چت جی پی تی 1000 درصد و گرنه این کاکا حسام اصلا کامنت نوشتن بلد نیست بعد با چت جی پی تیم فارسی حرف میزنه ، اخراج
  const randomNum = Math.floor(1000 + Math.random() * 9000).toString(); // تولید عدد ۴ رقمی تصادفی
  const canvas = createCanvas(100, 40);
  const ctx = canvas.getContext("2d");

  // طراحی پس‌زمینه
  ctx.fillStyle = "#f3f4f6"; // رنگ پس‌زمینه
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // تنظیمات متن کپچا
  ctx.fillStyle = "#374151"; // رنگ متن
  ctx.font = "bold 24px Arial";
  ctx.fillText(randomNum, 15, 30);

  return {
    captchaText: randomNum,
    captchaImage: canvas.toDataURL(), // تبدیل به داده تصویری
  };
};

const Signup = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useActionState(signup, initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  const isFormValid = captchaInput === captcha.captchaText;
const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      await formAction(formData);
      const result = await signIn("credentials", {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        redirect: false,
      });
      if (result?.ok) {
        router.push("/dashboard");
      }
    });
  };
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center from-base-100 to-base-200 p-4">
      <div className="flex flex-col w-full max-w-lg items-center bg-base-100 py-16 px-8 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-base-200/50 opacity-30"></div>
        {/* <div className="relative p-4">
          <Image
            src="https://placehold.co/400?text=Andishe"
            width={120}
            height={60}
            alt="logo"
            className="rounded-lg"
          />
        </div> */}
        <h1 className="relative z-10 font-bold text-2xl text-primary mb-6">
          ساخت حساب کاربری
        </h1>
        <form
          className="w-full flex flex-col gap-6 relative z-10"
          onSubmit={handleSubmit}
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base-content flex text-lg items-center gap-2">
                <CiUser className="text-lg" /> نام و نام خانوادگی
              </span>
            </div>
            <input
              name="name"
              className="w-full input input-bordered text-center bg-base-200 placeholder-base-content/50 focus:border-primary focus:ring-2 focus:ring-primary"
              type="text"
              placeholder="نام خود را وارد کنید"
              required
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base-content flex text-lg items-center gap-2">
                <CiMail className="text-lg" /> ایمیل
              </span>
            </div>
            <input
              name="email"
              className="w-full input input-bordered text-center bg-base-200 placeholder-base-content/50 focus:border-primary focus:ring-2 focus:ring-primary"
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              required
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base-content flex text-lg items-center gap-2">
                <CiLock className="text-lg" /> رمز عبور
              </span>
            </div>
            <div className="relative w-full">
              <input
                name="password"
                className="w-full input input-bordered text-center bg-base-200 placeholder-base-content/50 focus:border-primary focus:ring-2 focus:ring-primary pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="رمز عبور خود را وارد کنید"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 flex items-center text-lg text-base-content"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </label>

          {/* <div className="flex items-center gap-3 w-full">
            <img
              src={captcha.captchaImage}
              alt="captcha"
              className="w-24 h-10 border rounded-lg shadow"
            />
            <input
              type="text"
              className="flex-1 input input-bordered text-center bg-base-200 placeholder-base-content/50 focus:border-primary focus:ring-2 focus:ring-primary"
              placeholder="کد امنیتی"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              required
            />
            <button
              type="button"
              className="btn btn-sm btn-ghost"
              onClick={refreshCaptcha}
            >
              <IoReload className="text-xl" />
            </button>
          </div> */}
          {/* <button
            className="w-full btn btn-primary mt-8 rounded-btn transition-all duration-300 hover:bg-primary-focus hover:shadow-lg"
            type="submit"
            disabled={pending || !isFormValid}
          >
            {pending && <div className="loading loading-spinner"></div>}
            ثبت نام
          </button> */}
          <button
            className="w-full btn btn-primary mt-8 rounded-btn transition-all duration-300 hover:bg-primary-focus hover:shadow-lg"
            type="submit"
            disabled={pending}
          >
            {pending && <div className="loading loading-spinner"></div>}
            ثبت نام
          </button>
        </form>

        <div className="relative z-10 mt-6 text-center">
          <span className="text-base-content">حساب کاربری دارید؟ </span>
          <Link
            href="/auth/signin"
            className="link link-primary hover:text-primary-focus transition-all duration-300"
          >
            وارد شوید
          </Link>
        </div>
        {state.message && (
          <div className="relative z-10 mt-6 text-center text-error">
            {state.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
