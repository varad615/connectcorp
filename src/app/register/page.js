import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
export default function login() {
  return (
    <>
      <div>
        <div class="h-screen md:flex">
          <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-b from-purple-800 to-indigo-800 i justify-around items-center hidden m-4 rounded-3xl">
            <div>
              <Image
                priority
                src="/register.svg"
                height={300}
                width={300}
                alt="Follow us on Twitter"
              />
              <h1 class="text-white font-bold text-4xl font-sans">
                Speedy, Easy and Fast
              </h1>
            </div>
          </div>
          <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
            <form class="bg-white items-center flex flex-col">
              <div className="text-black text-[35px] font-bold">
                Sign up for an account
              </div>
              <button
                type="button"
                class="text-[#484B51] border border-[#BCC2D2] mt-7 bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
              >
                <FcGoogle size={20} className="mr-2" />
                Sign up with Google
              </button>
              <div className="w-[446px] h-5 mt-3 relative">
                <div className="left-[167px] top-0 absolute text-neutral-600 text-[16px] font-medium">
                  Or with email
                </div>
                <div className="w-[154px] h-[0px] left-[280px] top-[11px] absolute border border-neutral-600"></div>
                <div className="w-[154px] h-[0px] left-0 top-[11px] absolute border border-neutral-600"></div>
              </div>

              <div class="grid mt-7 gap-4 sm:grid-cols-2">
                <div>
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
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
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
                <div class="sm:col-span-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
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

                <div class="sm:col-span-2">
                  <label
                    for="price"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class=" border border-[#BCC2D2] text-black bg-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  />
                </div>
              </div>
              <div className="w-[458px] text-[#484B51] text-xs mt-7">
                By creating an account, you are agreeing to our{" "}
                <span className="font-bold">Privacy policy</span> and{" "}
                <span className="font-bold">
                  Electronic Communication Policy.
                </span>
              </div>

              <button
                type="submit"
                class="text-white bg-[#475FE2] mt-7 hover:bg-primary-800 w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign Up
              </button>
              <Link href="/login">
                <div className="w-[458px] text-[#484B51] text-base mt-7 text-center">
                  Already have an account?{" "}
                  <span className="font-bold">Sign In</span>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
