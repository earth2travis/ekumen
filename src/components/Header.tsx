import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex justify-between items-center mb-8 pt-4">
      <Link href="/">
        <Image
          src="/images/combination-mark.svg"
          alt="Ekumen"
          width={200}
          height={80}
        />
      </Link>
      <Link
        href="/about"
        className="cyber-heading hover:opacity-80 transition-opacity"
      >
        About
      </Link>
    </div>
  );
}
