import Image from "next/image";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";
import { SiDiscord, SiGithub, SiX } from "@icons-pack/react-simple-icons";
import {
  ArrowUpRightIcon,
  EnvelopeIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { TEAM_MEMBERS, TIMELINE } from "@/lib/data";

import lofyee from "../public/images/lofyee.png";
import sparkMemos from "../public/images/sparkmemos.png";
import cassette from "../public/images/cassette.png";
import echobellLogo from "../public/images/echobell.webp";

const myWriting = localFont({
  src: "../public/fonts/my-writing.otf",
  display: "swap",
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 dark:bg-zinc-900 bg-zinc-50 text-zinc-900 dark:text-zinc-50 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
      <header className="max-w-5xl w-full flex justify-between items-center p-4">
        <div
          className={twMerge(
            myWriting.className,
            "text-2xl font-bold text-orange-500"
          )}
        >
          Weelone
        </div>
        <ul className="flex gap-5 items-center">
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="https://github.com/weelone" target="_blank">
              <SiGithub className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a href="https://weel.one/discord" target="_blank">
              <SiDiscord className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/WeeloneHQ" target="_blank">
              <SiX className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </header>
      <section className="my-28 text-xl sm:text-3xl font-light flex flex-col items-center gap-2">
        <p className="">
          We are&nbsp;
          <span
            className={twMerge(
              myWriting.className,
              "font-bold text-orange-500"
            )}
          >
            Weelone Studio
          </span>
          .
        </p>
        <p>
          We craft{" "}
          <span className=" bg-orange-100 rounded px-2 dark:bg-orange-500">
            web/iOS applications
          </span>
          .
        </p>
        <p>Hope you will love.</p>
      </section>
      <section id="works" className="max-w-5xl w-full p-4 flex flex-col gap-4">
        <label className="text-sm self-start text-gray-500 border-b-2 border-orange-500">
          Works
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-md border flex flex-col gap-4 justify-between p-4 bg-white/80 dark:bg-black/80">
            <div className="flex gap-4">
              <a
                className="relative flex-shrink-0"
                href="https://apps.apple.com/app/id6743597198"
                target="_blank"
              >
                <Image
                  className="rounded-xl h-20 w-20 flex-shrink-0 shadow-lg shadow-gray-100 dark:shadow-gray-800"
                  src={echobellLogo}
                  alt="Logo of Echobell"
                />
                <div className="absolute -top-2 -left-2 bg-orange-500 px-2 py-1 rounded text-xs text-white shadow-sm shadow-gray-900/20">
                  Crafting
                </div>
              </a>
              <div>
                <h1 className="font-bold text-lg">Echobell</h1>
                <p className="text-zinc-500">
                  Instant alerts for different scenarios.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                className="text-sm text-orange-500 flex items-center"
                href="https://echobell.one"
                target="_blank"
              >
                Website
                <ArrowUpRightIcon className="h-3 w-3 ml-1" />
              </a>
              <a
                className="text-sm text-orange-500 flex items-center"
                href="https://apps.apple.com/app/id6743597198"
                target="_blank"
              >
                App Store
                <ArrowUpRightIcon className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>

          <div className="rounded-md border flex flex-col gap-4 justify-between p-4 bg-white/80 dark:bg-black/80">
            <div className="flex gap-4">
              <a
                className="relative flex-shrink-0"
                href="https://sparkmemos.com"
                target="_blank"
              >
                <Image
                  className="rounded-xl h-20 w-20 flex-shrink-0 shadow-lg shadow-gray-100 dark:shadow-gray-800"
                  src={sparkMemos}
                  alt="Logo of Spark Memos"
                />
                <div className="absolute -top-2 -left-2 bg-orange-500 px-2 py-1 rounded text-xs text-white shadow-sm shadow-gray-900/20">
                  Crafting
                </div>
              </a>
              <div>
                <h1 className="font-bold text-lg">Spark Memos</h1>
                <p className="text-zinc-500">
                  Capture your inspirations anytime, anywhere.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                className="text-sm text-orange-500 flex items-center"
                href="https://sparkmemos.com"
                target="_blank"
              >
                Website
                <ArrowUpRightIcon className="h-3 w-3 ml-1" />
              </a>
              <a
                className="text-sm text-orange-500 flex items-center"
                href="https://apps.apple.com/us/app/spark-memos-inspiration/id6480926767"
                target="_blank"
              >
                App Store
                <ArrowUpRightIcon className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>

          <div className="rounded-md border flex flex-col gap-4 justify-between p-4 bg-white/80 dark:bg-black/80">
            <div className="flex gap-4">
              <a
                className="relative flex-shrink-0"
                href="https://cassette.one"
                target="_blank"
              >
                <Image
                  className="rounded-xl h-20 w-20 flex-shrink-0 shadow-lg shadow-gray-100 dark:shadow-gray-800"
                  src={cassette}
                  alt="Logo of CassetteOne"
                />
                <div className="absolute -top-2 -left-2 bg-orange-500 px-2 py-1 rounded text-xs text-white shadow-sm shadow-gray-900/20">
                  Crafting
                </div>
              </a>
              <div>
                <h1 className="font-bold text-lg">
                  CassetteOne - Ambience & Music
                </h1>
                <p className="text-zinc-500">
                  Retro design cassette music player.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                className="text-sm text-orange-500 flex items-center"
                href="https://cassette.one"
                target="_blank"
              >
                Website
                <ArrowUpRightIcon className="h-3 w-3 ml-1" />
              </a>
              <a
                className="text-sm text-orange-500 flex items-center"
                href="https://weel.one/cassette-ios"
                target="_blank"
              >
                App Store
                <ArrowUpRightIcon className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>

          <div className="rounded-md border flex flex-col gap-4 justify-between p-4 bg-white/80 dark:bg-black/80">
            <div className="flex gap-4">
              <a
                className="flex-shrink-0"
                href="https://lofyee.com"
                target="_blank"
              >
                <Image
                  className="rounded-xl h-20 w-20 flex-shrink-0 shadow-lg shadow-gray-100 dark:shadow-gray-800"
                  src={lofyee}
                  alt="Logo of Lofyee"
                />
              </a>
              <div>
                <h1 className="font-bold text-lg">Lofyee</h1>
                <p className="text-zinc-500">
                  Listen Lo-Fi music, white noise and ambient music.
                </p>
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

          <div className="rounded-md border flex flex-col gap-4 justify-between p-4 bg-white/80 dark:bg-black/80">
            <div className="flex gap-4">
              <div className="rounded-xl h-20 w-20 flex-shrink-0 bg-zinc-500 text-white flex justify-center items-center shadow-lg shadow-gray-100 dark:shadow-gray-800">
                <SparklesIcon className="h-10 w-10" />
              </div>
              <div>
                <h1 className="font-bold text-lg">Crafting</h1>
                <p className="text-zinc-500">Pleas stay tuned.</p>
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

      <section id="Team" className="max-w-5xl w-full p-4 flex flex-col gap-4">
        <label className="self-start text-sm text-gray-500 border-b-2 border-orange-500">
          Team
        </label>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.nickname}
              className="flex flex-col items-center border p-4 rounded-md bg-white/80 dark:bg-black/80"
            >
              <Image
                className="h-10 w-10 rounded-full m-2"
                src={member.avatar}
                alt={`Avatar of ${member.nickname}`}
              />
              <h1 className="font-bold">{member.nickname}</h1>
              <p className="font-light">{member.role}</p>
              <div className="self-end text-sm mt-4">
                <a
                  className="flex text-orange-500 items-center"
                  href={member.website}
                  target="_blank"
                >
                  Learn More
                  <ArrowUpRightIcon className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="max-w-5xl w-full p-4 flex flex-col gap-4">
        <label className="self-start text-sm text-gray-500 border-b-2 border-orange-500">
          About
        </label>

        <div className="flex flex-col">
          {TIMELINE.map(({ time, content }, index) => (
            <div key={content} className="flex gap-4 items-center">
              <div className="flex flex-col items-center self-stretch">
                <div
                  className={twMerge(
                    "w-[2px] flex-grow bg-orange-500",
                    index === 0 && "opacity-0"
                  )}
                ></div>
                <div className="w-3 h-3 rounded-full bg-orange-100 dark:bg-orange-900 flex flex-col justify-center items-center">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                </div>
                <div
                  className={twMerge(
                    "w-[2px] flex-grow bg-orange-500",
                    index === TIMELINE.length - 1 && "opacity-0"
                  )}
                ></div>
              </div>
              <div className="text-gray-500 whitespace-nowrap">{time}</div>
              <div className="w-2 h-[1px] bg-gray-500/80" />
              <div className="py-2">{content}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="max-w-5xl w-full p-4 my-4 flex justify-between">
        <span className="text-sm flex items-center">
          <EnvelopeIcon className="h-5 w-5 mr-1" />
          <a className="underline" href="mailto:nooc@weelone.com">
            Contact us
          </a>
        </span>
        <span className="opacity-50 text-sm">
          Copyright &copy; 2024 Weelone Ltd
        </span>
      </footer>
    </main>
  );
}
