import { Inter, Plus_Jakarta_Sans, Readex_Pro } from "next/font/google";
import localFont from "next/font/local";

const readex_pro = Readex_Pro({
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
});

const saans = localFont({
  src: [
    {
      path: "../../../public/fonts/SaansTRIAL-Regular.ttf",
      style: "normal",
    },
  ],
});

interface IssueProps {
  date: string;
  title: string;
  numberOfAuthors: number;
  numberOfPapers: number;
  backgroundImageUrl: string;
  paddle: string;
}

export default function Issue({
  date,
  title,
  numberOfAuthors,
  numberOfPapers,
  backgroundImageUrl,
  paddle,
}: IssueProps) {
  return (
    <div className="flex flex-col h-[425px] w-[340px] rounded-[30px] outline-1 outline-black p-[15px] bg-white">
      <div className="flex justify-between">
        <div
          className={`flex justify-center items-center h-[40px] outline-1 outline-black max-w-[165px] rounded-[22px] p-4 ${readex_pro.className}`}
          style={{ backgroundColor: paddle }}
        >
          {date}
        </div>
        <button
          className={`${inter.className} hover:bg-black transition-all text-white cursor-pointer font-light rounded-[30px] px-4 h-[40px] bg-[#353535]`}
        >
          View
        </button>
      </div>
      <div>
        <h2
          className={`text-[36px] mt-[20px] leading-tight ${saans.className}`}
        >
          {title.split(" ").map((word, index, array) => (
            <span key={index}>
              {word}
              {index === Math.floor(array.length / 2) - 1 && <br />}
              {index !== array.length - 1 &&
                index !== Math.floor(array.length / 2) - 1 &&
                " "}
            </span>
          ))}
        </h2>
        <p className={`${jakarta.className} text-[14px] mt-[4px]`}>
          {numberOfPapers} papers, {numberOfAuthors} authors
        </p>
      </div>
      <div
        className="flex-1 rounded-[30px] mt-[10px] outline-1 outline-black bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      ></div>
    </div>
  );
}
