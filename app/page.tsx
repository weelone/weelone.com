import Image from "next/image";
import { Unkempt } from "next/font/google";
import { twMerge } from "tailwind-merge";

import lofyee from "../public/lofyee.png";
import { ArrowUpRightIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { TIMELINE } from "@/lib/data";

const unkempt = Unkempt({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8">
      <header className="max-w-2xl w-full flex justify-between items-center p-4">
        <div
          className={twMerge(
            unkempt.className,
            "text-2xl font-bold text-orange-500"
          )}
        >
          Weelone
        </div>
        <ul className="flex gap-5">
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </header>
      <section className="my-28 text-xl sm:text-3xl font-light flex flex-col items-center gap-2">
        <p className="">
          We Are&nbsp;
          <span
            className={twMerge(unkempt.className, "font-bold text-orange-500")}
          >
            Weelone Studio
          </span>
          .
        </p>
        <p>
          We craft{" "}
          <span className=" bg-orange-100 rounded px-2">
            web/iOS applications
          </span>
          .
        </p>
        <p>Hope you will love.</p>
      </section>
      <section id="works" className="max-w-2xl w-full p-4 flex flex-col gap-4">
        <label className="text-sm self-start text-gray-500 border-b-2 border-orange-500">
          Works
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-md border flex flex-col gap-4 justify-between p-4">
            <div className="flex gap-4">
              <a
                className="flex-shrink-0"
                href="https://lofyee.com"
                target="_blank"
              >
                <Image
                  className="rounded h-20 w-20 flex-shrink-0"
                  src={lofyee}
                  alt="Logo of Lofyee"
                />
              </a>
              <div>
                <h1 className="font-bold text-lg">Lofyee</h1>
                <p className="text-zinc-500">A Lo-Fi music player for iOS.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                className="text-sm text-orange-500 flex items-center"
                href="https://lofyee.com"
                target="_blank"
              >
                Website
                <ArrowUpRightIcon className="h-3 w-3 ml-1" />
              </a>
              <a
                className="text-sm text-orange-500 flex items-center"
                href="https://apps.apple.com/us/app/lofyee-a-lo-fi-player/id1663471190"
                target="_blank"
              >
                App Store
                <ArrowUpRightIcon className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>

          <div className="rounded-md border flex flex-col gap-4 justify-between p-4">
            <div className="flex gap-4">
              <div className="rounded h-20 w-20 flex-shrink-0 bg-zinc-500 text-white flex justify-center items-center">
                <SparklesIcon className="h-10 w-10" />
              </div>
              <div>
                <h1 className="font-bold text-lg">Crafting</h1>
                <p className="text-zinc-500">Pleas stay tuned</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a className="text-sm text-zinc-500 flex items-center" href="#">
                Coming Soon
                <ArrowUpRightIcon className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-2xl w-full p-4 flex flex-col gap-4">
        <label className="self-start text-sm text-gray-500 border-b-2 border-orange-500">
          About
        </label>

        <div className="flex flex-col">
          {TIMELINE.map(({ time, content }, index) => (
            <div key={time} className="flex gap-4 items-center">
              <div className="flex flex-col items-center self-stretch">
                <div
                  className={twMerge(
                    "w-[2px] flex-grow bg-orange-500",
                    index === 0 && "opacity-0"
                  )}
                ></div>
                <div className="w-3 h-3 rounded-full bg-orange-100 flex flex-col justify-center items-center">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                </div>
                <div
                  className={twMerge(
                    "w-[2px] flex-grow bg-orange-500",
                    index === TIMELINE.length - 1 && "opacity-0"
                  )}
                ></div>
              </div>
              <div className="text-gray-500">{time}</div>
              <div className="py-2">{content}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="max-w-2xl w-full p-4 my-4 flex justify-end">
        <span className="opacity-50 text-sm">
          Copyright &copy; 2024 Weelone Ltd
        </span>
      </footer>
    </main>
  );
}
