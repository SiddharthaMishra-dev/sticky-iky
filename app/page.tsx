import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[#2E241E] px-3 py-4">
      <div className="h-full w-full flex mx-auto overflow-hidden">
        <div className=" flex-1 py-3 px-3 pl-20 flex flex-col justify-center gap-y-10">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-[#FF5C00] to-[#CE0303] py-3 px-2 text-transparent bg-clip-text w-fit">
            Sticky iky
          </h1>
          <h4 className="text-4xl text-gray-200 font-semibold mt-5">
            Your personal sticky note manager.
          </h4>
          <a href="/whiteboard">
            <button className="bg-[#FF0000] text-gray-900 text-4xl mt-7 px-7 py-3 rounded-md font-semibold w-fit hover:opacity-90 transition">
              Get Started
            </button>
          </a>
        </div>
        <div className="flex-1 relative py-4 ">
          <div className="w-full h-full flex justify-center items-center">
            <Image
              src="/sticky.png"
              alt="Sticky iky"
              height={500}
              width={900}
              className="-rotate-45 gradient-mask-r-0-100"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
