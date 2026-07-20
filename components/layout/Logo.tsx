import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logos/logo.png"
        alt="AZMAK"
        width={46}
        height={46}
        priority
      />

      <div className="leading-tight">
        <h2 className="font-bold text-lg tracking-wide">
          AZMAK
        </h2>

        <p className="text-xs text-muted-foreground">
          Communication Centre
        </p>
      </div>
    </Link>
  );
}