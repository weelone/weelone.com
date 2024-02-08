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
      <body className={twMerge(openSans.className)}>{children}</body>
    </html>
  );
}
