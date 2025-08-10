import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative">
      <div className="container mx-auto max-w-2xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <TextAnimate
              as={"h2"}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              Your Questions, Our Answers
            </TextAnimate>
            <TextAnimate
              as={"p"}
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Find the answers to some common questions here.
            </TextAnimate>
          </div>
        </div>
        <BlurFade delay={0.4} className="mx-auto w-full max-w-xl py-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base md:text-lg">
                What is the minimum class requirement to submit papers?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You must be enrolled in grade 6 or higher to submit papers. This
                ensures that all submissions meet the academic standards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-base md:text-lg">
                What research formats are accepted for paper submissions?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We accept research papers in various formats, including APA,
                MLA, Chicago, and IEEE. Please ensure your submission adheres to
                the guidelines for your chosen format.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-base md:text-lg">
                Who will be reviewing my papers?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Your papers will be reviewed by a panel of experienced faculty
                members and industry professionals with expertise in your field
                of study. All reviews are double-blind to ensure fairness.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-base md:text-lg">
                Who runs the club?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The club is run by a dedicated team of student leaders and
                faculty advisors. Our leadership team oversees operations,
                organizes events, and manages paper submissions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </BlurFade>
      </div>
    </section>
  );
}
