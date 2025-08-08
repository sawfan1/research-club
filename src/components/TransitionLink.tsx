"use client";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionLink({
  className = "",
  children,
  href,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const body = document.querySelector("body");

    body?.classList.add("transitioning");
    await sleep(500);
    router.push(href);
    await sleep(500);
    body?.classList.remove("transitioning");
  };
  return (
    <Link
      href={href}
      {...props}
      className={className}
      onClick={handleTransition}
    >
      {children}
    </Link>
  );
}
