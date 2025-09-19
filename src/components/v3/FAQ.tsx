import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleQuestionMark } from "lucide-react";
import { reckless } from "@/lib/ufl";
import { Readex_Pro } from "next/font/google";

const inter = Readex_Pro({
  subsets: ["latin"],
});

const faq = [
  {
    question: "How long does the research paper have to be?",
    answer:
      "There are no limits on word, feel free to make it as long as you like. However, anything between 600 to 1200 words is advisable.",
  },
  {
    question: "Is Sunnydale Research Club open to recruiting?",
    answer:
      "No, recruitments are currently closed but keep an eye on our socials for further notice.",
  },
  {
    question:
      "Can students outside of Sunnydale submit papers or avail peer review?",
    answer:
      "No, unfortunately for the time being, we are only accepting submissions from within Sunnydale. The same goes for the peer review option.",
  },
  {
    question: "What are the fields of research available in your club?",
    answer:
      "We accept research papers from a wide variety of fields, including but not limited to: Science, Technology, Engineering, Mathematics, Social Sciences, and Humanities.",
  },
  {
    question: "When do I submit my research paper and can the club help me?",
    answer:
      "You can submit research papers all year round, but make sure the topic is appropriate. If you are from Sunnydale, the club will help you in your research endeavor.",
  },
];

const FAQ01 = () => {
  return (
    <div className="flex items-center justify-center px-6 py-12 ">
      <div className="max-w-xl ">
        <h2
          className={`${reckless.className} text-4xl md:text-5xl !leading-[1.15] tracking-tight text-center `}
        >
          Frequently Asked <br></br>Questions{" "}
          <CircleQuestionMark className="inline" size={36} />
        </h2>

        <Accordion
          type="single"
          className={`mt-6 ${inter.className}`}
          defaultValue="question-0"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className="text-left text-lg cursor-pointer">
                {question}
              </AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ01;
