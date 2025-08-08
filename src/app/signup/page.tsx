import SignUpForm from "@/components/SignUpForm";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function SignUp() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <BlurFade delay={0.5} inView>
          <SignUpForm />
        </BlurFade>
      </div>
    </div>
  );
}
