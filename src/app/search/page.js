import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
export default function Search() {
  return (
    <>
      <div>
        <nav class="bg-white">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center">
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-[#7C3AED]">
                ConnectCorp
              </span>
            </a>
            <Link href="/">
              <div class=" items-center space-x-4 inline-flex  p-2 ml-3 text-sm md:hidden">
                <div class=" text-[#484B51] leading-none">
                  <div className=" font-semibold">Varad Gundap</div>
                  <div class="text-sm text-[#BCC2D2]">Human Resource</div>
                </div>
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt=""
                />
              </div>
            </Link>
            <div class="hidden w-full md:block md:w-auto">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
                <Link href="/">
                  <div class=" items-center space-x-4 inline-flex  p-2 ml-3 text-sm">
                    <div class=" text-[#484B51] leading-none">
                      <div className=" font-semibold">Varad Gundap</div>
                      <div class="text-sm text-[#BCC2D2]">Human Resource</div>
                    </div>
                    <img
                      class="w-10 h-10 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt=""
                    />
                  </div>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
        <section className="bg-[url('/bg.png')] p-3 bg-cover bg-center">
          <div className="mt-12">
            <div class="mx-auto text-center mb-8 lg:mb-16">
              <div className="text-center text-white font-bold leading-10 sm:text-xl md:text-2xl xl:text-4xl lg:text-3xl">
                Empowering Individuals to Connect with Leading Companies
              </div>
            </div>
            <div className="pb-12 px-12">
              <div
                class="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky"
                styles="top: 5px"
              >
                <div>
                  <div class="p-2 mr-1 rounded-full">
                    <AiOutlineSearch size={30} color="#CCCCCC" />
                  </div>
                </div>
                <input
                  class="rounded-full border border-white placeholder-[#CCCCCC] w-full text-black focus:border-[#7C3AED]"
                  type="text"
                  placeholder="Job Title or keyword"
                />

                <div class="bg-[#7C3AED] p-3 px-8 hover:bg-[#9666e7] cursor-pointer mx-2 rounded-full">
                  <div>Search</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
