import Link from 'next/link'

interface NavuttonProps {
  text: string;
  href: string;
}

export default function Navutton({ text, href }: NavuttonProps) {
  return (
    <Link
      href={href}
      className="flood overflow-hidden relative bg-[#F5F5F5] h-[27px] flex items-center px-3 text-[14px] rounded-[8px] font-medium transition-all duration-75 ease-in"
    >
      <span className="z-[2]">{text}</span>
    </Link>
  );
}
