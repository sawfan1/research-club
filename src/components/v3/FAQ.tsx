import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleQuestionMark } from "lucide-react";

import { Readex_Pro } from "next/font/google";

const inter = Readex_Pro();

const faq = [
  {
    question: "Question 1?",
    answer:
      "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
  },
  {
    question: "What if I receive a damaged item?",
    answer:
      "Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.",
  },
];

const FAQ01 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 ">
      <div className="max-w-xl ">
        <h2
          className={`${inter.className} text-4xl md:text-5xl !leading-[1.15] tracking-tight text-center `}
        >
          Frequently Asked Questions{" "}
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
