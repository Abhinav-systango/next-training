"use client";
import { RegisterNewUser } from "@/firebase/helpers";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { registerInputFieldForm } from "../../_utils/type";
import { useAppDispatch } from "@/app/_store/hooks";
import { loginUser } from "@/app/_store/features/authSlice";
import Loading from "@/app/loading";

const Register = () => {
  // hooks
  const router = useRouter();
  const dispatch = useAppDispatch(

  )
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerInputFieldForm>();

  // state
  const [submitError, SetSubmitError] = useState();
  const [loading, setLoading] = useState<boolean>(false)
  // methods
  const onSubmit: SubmitHandler<registerInputFieldForm> = async ({
    email,
    password,
    displayName,
  }) => {
    try {
      setLoading(true)
      const user = await RegisterNewUser({ email, password, displayName });
      if (user) {
        dispatch(loginUser({isLoggedIn: true, user: {
          name: user.displayName,
          email: user.email,
          uid: user.uid
        }}))
        router.push("/");
        setLoading(false)
      }
    } catch (error) {
      SetSubmitError(error.message);
      setLoading(false)
    }
  };

  // css classes
  const inputClass =
    "w-full p-3 outline-none border border-blue border-opacity-30 focus:border-opacity-60 bg-blue bg-opacity-10 focus:bg-opacity-5 text-blue rounded";

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12 h-full">
          {/* left  */}
          <div className="grid col-span-6 items-center justify-center h-full relative ">
            <div className="text-[16px]">
              <p className="font-semibold text-[50px]">Register in to</p>
              <p className="font-medium text-[25px] my-3">
                Lorem ipsum dolor sit,
              </p>
              <p>If you have an account</p>
              <p>
                you can <span className="text-blue">Login</span>
              </p>
            </div>
            <img src="/human.svg" className="absolute bottom-0 right-0 h-1/2" />
          </div>

          {/* right  */}
          <div className="grid col-span-6 items-center h-full justify-center ">
            <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
              <p className="text-red-500">{submitError}</p>
              <p className="text-blue text-[30px] font-medium ">Register</p>
              <div className="w-full">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Enter email"
                  {...register("email")}
                  className={inputClass}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="w-full">
                <label htmlFor="password">Password</label>
                <div className="w-full relative">
                  <input
                    placeholder="Enter your password"
                    {...register("password", { required: true })}
                    className={inputClass}
                  />
                  {errors.password && <span>This field is required</span>}
                </div>
              </div>

              <div className="w-full">
                <label htmlFor="displayName">Display Name</label>
                <div className="w-full relative">
                  <input
                    placeholder="Enter your name"
                    {...register("displayName", { required: true })}
                    className={inputClass}
                  />
                  {errors.displayName && <span>This field is required</span>}
                </div>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="p-3 w-full bg-blue hover:bg-opacity-90 text-white"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
