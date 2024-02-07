import Image from "next/image";
import { Unkempt } from "next/font/google";
import { twMerge } from "tailwind-merge";

import lofyee from "../public/lofyee.png";

const unkempt = Unkempt({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="max-w-2xl w-full flex justify-between items-center p-5">
        <div className={twMerge(unkempt.className, "text-2xl font-bold")}>
          Weelone
        </div>
        <ul className="flex gap-5">
          <li>Projects</li>
          <li>About</li>
        </ul>
      </header>
      <section className="my-28 text-3xl font-light flex flex-col items-center gap-2">
        <p className="">
          We Are&nbsp;
          <span className={twMerge(unkempt.className, "font-bold text-3xl")}>
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
      <section className="my-10 max-w-2xl w-full grid grid-cols-3 gap-1 p-5">
        <a href="https://lofyee.com" target="_blank">
          <Image className="rounded" src={lofyee} alt="Logo of Lofyee" />
        </a>
        <div className="rounded aspect-square border flex justify-center items-center">
          <span className="opacity-50">Crafting...</span>
        </div>
      </section>
      <footer className="max-w-2xl w-full p-5 my-5 flex justify-end">
        <span className="opacity-50 text-sm">
          Copyright &copy; 2024 Weelone Ltd
        </span>
      </footer>
    </main>
  );
}
