import Image from "next/image";
import { Unkempt } from "next/font/google";
import { twMerge } from "tailwind-merge";

import lofyee from "../public/lofyee.png";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

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
      <section id="works" className="max-w-2xl w-full p-4 flex flex-col gap-2">
        <label className="text-sm text-gray-500 border-l-4 border-orange-500 pl-2">
          Works
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded border flex flex-col gap-4 justify-between p-4">
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
                <p className="text-gray-500">A Lo-Fi music player for iOS.</p>
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
          <div className="rounded border flex justify-center items-center p-4">
            <span className="opacity-50">Crafting...</span>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-2xl w-full p-4 flex flex-col gap-2">
        <label className="text-sm text-gray-500 border-l-4 border-orange-500 pl-2">
          About
        </label>

        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-orange-100 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          </div>
          <div className="text-gray-500">2024/2/7</div>
          <div>Official Website Published</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-orange-100 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          </div>
          <div className="text-gray-500">2024/2/1</div>
          <div>Founded</div>
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
