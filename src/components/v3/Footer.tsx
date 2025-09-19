import { Red_Hat_Display, Readex_Pro } from "next/font/google";
import Link from "next/link";

const red_hat = Red_Hat_Display({
  subsets: ["latin"],
});

const red = Readex_Pro({
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="bg-background z-[2000] ">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <h1 className={`${red_hat.className} font-black text-[18px]`}>
              SD RESEARCH CLUB
            </h1>
            <h2 className={`${red.className} text-[10px]`}>
              Made with 🖤 by{" "}
              <Link
                href={"https://www.instagram.com/sawfan00/"}
                className="underline"
              >
                this guy
              </Link>{" "}
              using NextJS v15
            </h2>
          </div>
          <p className={`text-sm text-muted-foreground ${red.className}`}>
            ©2025 Sunnydale Research Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
