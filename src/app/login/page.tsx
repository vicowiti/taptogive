"use client";
import Link from "next/link";

export default function Login() {



 
  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <Link href="/">
              <img
                className="h-auto w-32"
                src="/logo/logo.png"
                alt="TapToGive"
              />
              <h2 className="mt-6 text-3xl text-center font-bold tracking-tight text-gray-900">
                Seamless access to a world of giving opportunities.
              </h2>
              <h2 className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900">
                Sign in to your account.
              </h2>
            </Link>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-[#00BF63] hover:text-[#00BF63]"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-[#00BF63] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#00BF63] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      Sign in
                    </button>
                  </div>
                  <div className="text-sm">
                    New here?{" "}
                    <Link
                      href="/register"
                      className="font-medium text-[#00BF63]"
                    >
                      Register
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block ">
          <div className=" w-full h-screen flex justify-center items-center">
            <img
            className=" object-cover w-[50%]"
            src="/auth.jpg"
            alt=""
          />
          </div>
        </div>
      </div>
    </>
  );
}
