import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
    >
      <div className="relative">
        <Image
          src="/logos/logo.png"
          alt="AZMAK Communication Centre"
          width={48}
          height={48}
          priority
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="leading-tight">
        <h2 className="text-lg font-extrabold tracking-wider text-slate-900">
          AZMAK
        </h2>

        <p className="text-xs font-medium tracking-wide text-slate-500">
          Communication Centre
        </p>
      </div>
    </Link>
  );
}