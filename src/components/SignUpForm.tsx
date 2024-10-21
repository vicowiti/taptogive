import Link from "next/link";

export default function SignUpForm() {
  return (
    <>
      <div className="flex flex-col justify-center  sm:px-6 lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Sign Up
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Seamless Access to a world of giving possibilities
                </p>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Church Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#00BF63] focus:outline-none focus:ring-[#00BF63] sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    id="number"
                    name="number"
                    type="text"
                    autoComplete="number"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#00BF63] focus:outline-none focus:ring-[#00BF63] sm:text-sm"
                  />
                </div>
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
                  htmlFor="contact-person"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Person
                </label>
                <div className="mt-1">
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    autoComplete="contactperson"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between"></div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-[#00BF63] py-2 px-4 text-sm font-medium text-white shadow-sm "
                >
                  Sign in
                </button>
              </div>

              <div className="text-sm">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-[#00BF63]">
                  Log In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
