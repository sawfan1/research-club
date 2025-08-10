import { TextAnimate } from "@/components/magicui/text-animate";

export default function Showcase() {
  return (
    <section className="w-full min-h-screen p-5">
      <div className="shadow-md w-full h-20 md:h-30 bg-blue-700 rounded-2xl flex flex-col items-center justify-center space-y-4">
        <TextAnimate className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white text-center">
          Research Showcase
        </TextAnimate>
      </div>
    </section>
  );
}
