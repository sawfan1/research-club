import LoginForm from "@/components/LoginForm";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function SignUp() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-lg overflow-hidden mt-[-100px]">
        <BlurFade delay={0.5} inView>
          <LoginForm />
        </BlurFade>
      </div>
    </div>
  );
}
