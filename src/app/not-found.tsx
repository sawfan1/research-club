import Lotti3 from "@/components/Lottie3";
import TransitionLink from "@/components/TransitionLink";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function Custom404() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-serif">404 | Page Not Found</h1>
      <TransitionLink href="/">
        <Button className="mt-6">
          <Home></Home> Return Home?
        </Button>
      </TransitionLink>
      <Lotti3 />
    </section>
  );
}
