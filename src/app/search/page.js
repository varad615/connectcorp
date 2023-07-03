import { AiOutlineSearch } from "react-icons/ai";
export default function Search() {
  return (
    <>
      <div>
        <div className="bg-white"></div>
        <section className="bg-[url('/bg.png')] p-3 bg-cover bg-center">
          <div className="mt-12">
            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <div className="text-center text-white text-[38px] font-bold leading-10">
                Empowering Individuals to Connect with Leading Companies
              </div>
            </div>
            <div className="pb-12">
              <div class="relative mt-5 mx-3">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <AiOutlineSearch color="#475FE2" size={20} />
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 pl-10 text-lg text-gray-900 rounded-full bg-gray-50 "
                  placeholder="Job Title or Keyword"
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute right-2.5 bottom-2.5 bg-[#7C3AED] text-lg rounded-full text-sm px-4 py-2 hover:bg-[#9262e7]"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
