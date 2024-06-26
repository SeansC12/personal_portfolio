import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Home,
  Code,
  BookMarked,
  ScrollText,
  User,
} from "lucide-react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sean Chua",
  description: "My tech grove 💻🌳",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="dark bg-site-gray text-white scroll-smooth"
    >
      <body className={inter.className}>
        <div className="w-full px-4 min-[670px]:px-8 lg:px-0 py-2 min-[670px]:py-14 flex flex-col items-center">
          <div className="flex flex-1 items-start max-w-[800px] w-full gap-1 min-[670px]:gap-2 flex-wrap">
            <Link
              className="hidden min-[670px]:block"
              href="/#home"
            >
              <Button
                className="px-1 py-1 min-[670px]:py-4 min-[670px]:px-4 dark:bg-site-gray dark:border-white/10"
                variant="outline"
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>

            <Link href="/#projects">
              <Button
                className="px-1 py-1 min-[670px]:py-4 min-[670px]:px-4 dark:bg-site-gray dark:border-white/10"
                variant="outline"
              >
                <Code className="mr-2 h-4 w-4" />
                Projects
              </Button>
            </Link>

            <Link href="/#course">
              <Button
                className="px-1 py-1 min-[670px]:py-4 min-[670px]:px-4 dark:bg-site-gray dark:border-white/10"
                variant="outline"
              >
                <BookMarked className="mr-2 h-5 w-5 text-white" />
                Courses
              </Button>
            </Link>

            <Link href="/#more">
              <Button
                className="px-1 py-1 min-[670px]:py-4 min-[670px]:px-4 dark:bg-site-gray dark:border-white/10"
                variant="outline"
              >
                <ScrollText className="mr-2 h-5 w-5" />
                CV
              </Button>
            </Link>
            <Link href="/me">
              <Button
                className="px-1 py-1 min-[670px]:py-4 min-[670px]:px-4 dark:bg-site-gray dark:border-white/10 min-[670px]:hidden"
                variant="outline"
              >
                <User className="mr-2 h-5 w-5" />
                About
              </Button>
              <Button
                className="px-1 py-1 min-[670px]:py-4 min-[670px]:px-4 dark:bg-site-gray dark:border-white/10 hidden min-[670px]:inline-flex"
                variant="outline"
              >
                <User className="mr-2 h-5 w-5" />
                About Me
              </Button>
            </Link>
          </div>
          <div className="block min-[670px]:hidden w-screen h-[1px] bg-[#252525] mt-3" />
          <div className="max-w-[800px] mt-10 min-[670px]:mt-20">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
