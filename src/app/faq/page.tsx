import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Your Questions, Our Answers
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Find the answers to some common questions here.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                What is the minimum class requirement to submit papers?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                You must be enrollled in grade 6 and above, and submission is
                only available for Sunnydale students.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                What research formats are accepted for paper submissions?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                We accept research papers, posters, and presentations. All
                submissions must be in English and follow the provided
                guidelines.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                Who will be reviewing my papers
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                We have an experienced panel of reviewers, including faculty
                members and industry experts, who will evaluate all submissions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">
                Who runs the club?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                The club is run by a team of dedicated students and faculty
                advisors who are passionate about research and innovation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
