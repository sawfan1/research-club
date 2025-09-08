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
    question: "How long does it take for a paper to be reviewed?",
    answer:
      "Papers are usually checked and returned with 2 weeks. However, sometimes it might take longer if the intake volume is large so be patient as we will get back to you.",
  },
  {
    question: "Do I have to pay for a second peer review?",
    answer:
      "Although the first peer review is free, we do charge a small amount for additional papers.",
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
