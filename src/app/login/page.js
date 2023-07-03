import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
export default function login() {
  return (
    <>
      <div>
        <div class="h-screen md:flex">
          <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
            <div class="max-w-2xl bg-white py-10 px-5 m-auto w-full">
              <div class="text-3xl mb-6 font-bold text-center text-black">
                <div>Sign In for an account</div>
                <div>
                  <button
                    type="button"
                    class="text-[#484B51] border border-[#BCC2D2] mt-7 bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                  >
                    <FcGoogle size={20} className="mr-2" />
                    Sign In with Google
                  </button>
                  <button
                    type="button"
                    class="text-[#484B51] border border-[#BCC2D2] mt-7 bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                  >
                    <AiFillApple size={20} className="mr-2" />
                    Sign In with Apple
                  </button>
                </div>
                <hr class="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700" />
              </div>

              <form>
                <div class="grid grid-cols-2 gap-4 max-w-xl m-auto">
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
                  <div className="w-[458px] h-[25px] relative mt-5">
                    <div className="left-[30px] top-[2px] absolute text-black text-[16px] font-semibold tracking-wide">
                      Remember Me
                    </div>
                    <div className="w-[25px] h-[25px] left-0 top-0 absolute justify-center items-center inline-flex">
                      <input
                        id="c1"
                        type="checkbox"
                        class="h-4 w-4 cursor-pointer rounded-full border-indigo-600 bg-indigo-100 text-[#475FE2]"
                      />
                    </div>
                    <div className="left-[308px] top-[2px] absolute text-indigo-600 text-[16px] font-semibold tracking-wide">
                      Forgot Password?
                    </div>
                  </div>
                  <div class="col-span-2 text-right">
                    <button
                      type="submit"
                      class="text-white bg-[#475FE2] mt-5 hover:bg-primary-800 w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Sign In
                    </button>
                  </div>
                  <div class="col-span-2 text-right"></div>
                </div>
              </form>
              <div class="text-base mb-6 text-center text-black">
                <Link href="/register">
                  <div>
                    Already have an account?{" "}
                    <span className="font-bold">Sign Up</span>{" "}
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-b from-purple-800 to-indigo-800 i justify-around items-center hidden m-4 rounded-3xl">
            <div>
              <Image
                priority
                src="/login.png"
                height={300}
                width={300}
                alt="Follow us on Twitter"
              />
              <h1 class="text-white font-bold text-4xl font-sans">
                Speedy, Easy and Fast
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
