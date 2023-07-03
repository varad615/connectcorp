import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
export default function login() {
  return (
    <>
      <div>
        <div class="h-screen md:flex">
          <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-b from-purple-800 to-indigo-800 i justify-around items-center hidden m-4 rounded-3xl">
            <div>
              <Image
                priority
                src="/register.png"
                height={300}
                width={300}
                alt="Follow us on Twitter"
              />
              <h1 class="text-white font-bold text-4xl font-sans">
                Speedy, Easy and Fast
              </h1>
            </div>
          </div>
          <div class="flex md:w-1/2 sm:p-3 justify-center py-10 items-center bg-white">
            <div class="max-w-2xl bg-white py-10 px-5 m-auto w-full">
              <div class="text-3xl mb-6 font-bold text-center text-black">
                <div>Sign up for an account</div>
                <div>
                  <button
                    type="button"
                    class="text-[#484B51] border border-[#BCC2D2] mt-7 bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                  >
                    <FcGoogle size={20} className="mr-2" />
                    Sign up with Google
                  </button>
                  <button
                    type="button"
                    class="text-[#484B51] border border-[#BCC2D2] mt-7 bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                  >
                    <AiFillApple size={20} className="mr-2" />
                    Sign up with Apple
                  </button>
                </div>
                <hr class="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700" />
              </div>

              <form>
                <div class="grid grid-cols-2 gap-4 max-w-xl m-auto">
                  <div class="col-span-2 lg:col-span-1">
                    <div class="sm:col-span-2 w-full">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class=" border border-[#BCC2D2] text-black bg-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      />
                    </div>
                  </div>

                  <div class="col-span-2 lg:col-span-1">
                    <div class="sm:col-span-2 w-full">
                      <label
                        for="price"
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class=" border border-[#BCC2D2] text-black bg-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      />
                    </div>
                  </div>

                  <div class="col-span-2">
                    <div class="sm:col-span-2 w-full">
                      <label
                        for="price"
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Username *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class=" border border-[#BCC2D2] text-black bg-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      />
                    </div>
                  </div>
                  <div class="col-span-2">
                    <div class="sm:col-span-2 w-full">
                      <label
                        for="price"
                        class="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Password *
                      </label>
                      <input
                        type="password"
                        name="name"
                        id="name"
                        class=" border border-[#BCC2D2] text-black bg-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      />
                    </div>
                  </div>
                  <div class="col-span-2 text-[#484B51]">
                    By creating an account, you are agreeing to our{" "}
                    <span className="font-bold">Privacy policy</span> and{" "}
                    <span className="font-bold">
                      Electronic Communication Policy.
                    </span>
                  </div>
                  <div class="col-span-2 text-right">
                    <button
                      type="submit"
                      class="text-white bg-[#475FE2] mt-5 hover:bg-primary-800 w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div class="col-span-2 text-right"></div>
                </div>
              </form>
              <div class="text-base mb-6 text-center text-black">
                <Link href="/login">
                  <div>
                    Already have an account?{" "}
                    <span className="font-bold">Sign In</span>{" "}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
