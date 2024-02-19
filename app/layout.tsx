import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weelone",
  description: "Official website of Weelone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body
        className={twMerge(
          openSans.className,
          "dark:bg-zinc-900 bg-zinc-50 text-zinc-900 dark:text-zinc-50"
        )}
      >
        {children}
      </body>
    </html>
  );
}
