import Link from "next/link";

export default function LoginForm() {
  return (
    <>
      <div className="flex flex-col justify-center  sm:px-6 lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Sign in
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Seamless Access to a world of giving possibilities
                </p>
              </div>
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
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#00BF63] focus:outline-none focus:ring-[#00BF63] sm:text-sm"
                  />
                </div>
              </div>

              <div>
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
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#00BF63] focus:outline-none focus:ring-[#00BF63] sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-[#00BF63] focus:ring-[#00BF63]"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-[#00BF63]">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-[#00BF63] py-2 px-4 text-sm font-medium text-white shadow-sm "
                >
                  Sign in
                </button>
              </div>
              <div className="text-sm">
                New Here?{" "}
                <Link href="/register" className="font-medium text-[#00BF63]">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
