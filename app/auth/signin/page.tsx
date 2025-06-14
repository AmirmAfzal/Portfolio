"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CiMail } from "react-icons/ci";
import { TbCircleKey } from "react-icons/tb";

interface Inputs {
  email: string;
  password: string;
}

const SignIn = () => {
  const session = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (session.data?.user) {
      router.push("/");
    }
  }, [session, router]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (!result?.ok) {
      setError(result?.error || "خطایی رخ داده است");
    } else {
      router.push("/");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center  from-base-100 to-base-200 p-4">
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
          ورود به حساب کاربری
        </h1>
        <form
          className="w-full flex flex-col gap-6 relative z-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base-content flex text-lg items-center gap-2">
                <CiMail className="text-lg" /> ایمیل
              </span>
            </div>
            <input
              className="w-full input input-bordered text-center bg-base-200 placeholder-base-content/50 focus:border-primary focus:ring-2 focus:ring-primary"
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text text-error mt-2">این فیلد اجباری است</span>
            )}
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base-content flex text-lg items-center gap-2">
                <TbCircleKey className="text-lg" /> رمز عبور
              </span>
            </div>
            <input
              className="w-full input input-bordered text-center bg-base-200 placeholder-base-content/50 focus:border-primary focus:ring-2 focus:ring-primary"
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text text-error mt-2">این فیلد اجباری است</span>
            )}
          </label>

          <button
            className="w-full btn btn-primary mt-8 rounded-btn transition-all duration-300 hover:bg-primary-focus hover:shadow-lg"
            disabled={loading}
            type="submit"
          >
            {loading && <div className="loading loading-spinner"></div>}
            ورود به حساب
          </button>
        </form>

        <div className="relative z-10 mt-6 text-center">
          <span className="text-base-content">حساب کاربری ندارید؟ </span>
          <Link
            href="/auth/signup"
            className="link link-primary hover:text-primary-focus transition-all duration-300"
          >
            ثبت نام کنید
          </Link>
        </div>

        {error && (
          <div className="relative z-10 mt-6 text-center text-error">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
