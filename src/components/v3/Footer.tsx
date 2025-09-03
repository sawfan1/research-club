import { Red_Hat_Display, Readex_Pro } from "next/font/google";

const red_hat = Red_Hat_Display({
  subsets: ["latin"],
});

const red = Readex_Pro();

export default function Footer() {
  return (
    <footer className="bg-background z-[2000] ">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <h1 className={`${red_hat.className} font-black text-[18px]`}>
              SD RESEARCH CLUB
            </h1>
          </div>
          <p className={`text-sm text-muted-foreground ${red.className}`}>
            ©2025 Sunnydale Research Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
