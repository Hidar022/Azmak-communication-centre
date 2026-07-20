import { Container } from "@/components/layout/Container";
import { HeroBackground } from "@/components/backgrounds/HeroBackground";

import { HeroContent } from "./HeroContent";
import { HeroIllustration } from "./HeroIllustration";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-24 lg:pb-32">

    <HeroBackground />

    <Container>
        <div className="relative z-10 grid lg:grid-cols-2 items-center gap-14">
            <HeroContent />
            <HeroIllustration />
        </div>
    </Container>

</section>
  );
}