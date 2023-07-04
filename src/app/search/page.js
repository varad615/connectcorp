import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import Head from "next/head";
export default function Search() {
  return (
    <>
      <div>
      <Head>
                <title>ConnectCorp | Search</title>
                <meta charSet='utf-8' />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
            </Head>
        <nav class="bg-white">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center">
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
            <div className="pb-12 px-1 sm:px-12">
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
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-xl px-4 md:px-8">
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div>
                <div class="rounded-lg border p-4">
                  <h2 class="mb-3 text-base font-bold text-gray-800 lg:text-base">
                    Filters
                  </h2>
                  <h2 class="mb-3 text-base font-bold text-gray-800 lg:text-base">
                    Location
                  </h2>
                  <input
                    type="text"
                    id="location"
                    class="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    placeholder="Location..."
                    required
                  ></input>
                  <h2 class="mb-3 mt-4 text-base font-bold text-gray-800 lg:text-base">
                    Type of Work
                  </h2>
                  <div>
                    <select
                      id="location"
                      class="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    >
                      <option selected>Choose a country</option>
                      <option value="US">United States</option>
                      <option value="IN">India</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <h2 class="mb-3 mt-4 text-base font-bold text-gray-800 lg:text-base">
                    Industries
                  </h2>
                  <div>
                    <select
                      id="industries"
                      class="bg-white border border-white text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    >
                      <option defaultValue>Choose a country</option>
                      <option value="FE">Frontend</option>
                      <option value="DB">Database</option>
                      <option value="BE">Backend</option>
                    </select>
                  </div>
                  <label class="relative inline-flex items-center mb-5 cursor-pointer mt-4">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-violet-600 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#E4E4E7]"></div>
                    <span class="ml-3 text-sm font-medium text-[#71717A]">
                      Only Remote
                    </span>
                  </label>
                </div>
              </div>

              <div class="lg:col-span-2">
                <div class="divide-y">
                  <div class="flex flex-col gap-3 py-2 md:py-2 bg-white rounded-lg">
                    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <div class="flex items-center space-x-4">
                          <img
                            class="w-10 h-10 rounded-full"
                            src="https://xsgames.co/randomusers/assets/avatars/male//2.jpg"
                            alt=""
                          />
                          <div class="font-semibold text-black">
                            <div>Varun Ghorpade</div>
                            <div class="text-sm text-[#BCC2D2] ">Analyst</div>
                          </div>
                        </div>
                      </a>
                      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 bg-gray-200 rounded text-black p-1 font-semibold">
                          Fulltime
                        </a>
                        <a class="mr-5 bg-gray-200 rounded text-black p-1 font-semibold">
                          Intermediate
                        </a>
                      </nav>

                      <div class="inline-flex items-center py-1 px-3 text-[#484B51] font-bold rounded text-base mt-4 md:mt-0">
                        Kharghar, Navi Mumbai
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col gap-3 py-2 md:py-2 bg-white rounded-lg">
                    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <div class="flex items-center space-x-4">
                          <img
                            class="w-10 h-10 rounded-full"
                            src="https://xsgames.co/randomusers/assets/avatars/male//3.jpg"
                            alt=""
                          />
                          <div class="font-semibold text-black">
                            <div>Tanmay Bagal</div>
                            <div class="text-sm text-[#BCC2D2] ">
                              UI Designer
                            </div>
                          </div>
                        </div>
                      </a>
                      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 bg-gray-200 rounded text-black p-1 font-semibold">
                          Fulltime
                        </a>
                        <a class="mr-5 bg-gray-200 rounded text-black p-1 font-semibold">
                          Intermediate
                        </a>
                      </nav>

                      <div class="inline-flex items-center py-1 px-3 text-[#484B51] font-bold rounded text-base mt-4 md:mt-0">
                        Kharghar, Navi Mumbai
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col gap-3 py-2 md:py-2 bg-white rounded-lg">
                    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <div class="flex items-center space-x-4">
                          <img
                            class="w-10 h-10 rounded-full"
                            src="https://xsgames.co/randomusers/assets/avatars/male//5.jpg"
                            alt=""
                          />
                          <div class="font-semibold text-black">
                            <div>Girish Bansode</div>
                            <div class="text-sm text-[#BCC2D2] ">
                              UX Designer
                            </div>
                          </div>
                        </div>
                      </a>
                      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 bg-gray-200 rounded text-black p-1 font-semibold">
                          Fulltime
                        </a>
                        <a class="mr-5 bg-gray-200 rounded text-black p-1 font-semibold">
                          Intermediate
                        </a>
                      </nav>

                      <div class="inline-flex items-center py-1 px-3 text-[#484B51] font-bold rounded text-base mt-4 md:mt-0">
                        Kurla, Mumbai
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col gap-3 py-2 md:py-2 bg-white rounded-lg">
                    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <div class="flex items-center space-x-4">
                          <img
                            class="w-10 h-10 rounded-full"
                            src="https://xsgames.co/randomusers/assets/avatars/female//6.jpg"
                            alt=""
                          />
                          <div class="font-semibold text-black">
                            <div>Arundhati Khopade</div>
                            <div class="text-sm text-[#BCC2D2] ">Analyst</div>
                          </div>
                        </div>
                      </a>
                      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 bg-gray-200 rounded text-black p-1 font-semibold">
                          Fulltime
                        </a>
                        <a class="mr-5 bg-gray-200 rounded text-black p-1 font-semibold">
                          Intermediate
                        </a>
                      </nav>

                      <div class="inline-flex items-center py-1 px-3 text-[#484B51] font-bold rounded text-base mt-4 md:mt-0">
                        Bangalore
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
