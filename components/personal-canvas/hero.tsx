import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center bg-gradient-to-br from-primary via-[hsl(203,85%,62%)] to-accent/50 text-primary-foreground">
      <div className="absolute inset-0 bg-black/30" />
      <div className="container relative z-10 text-center space-y-6">
        <h1 className="text-4xl font-headline font-bold tracking-tight md:text-6xl lg:text-7xl">
          Rohith Ejjaparapu
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          Business Consultant | AI Automation Evangelist | Aviation Enthusiast
          <br />
          Fitness Junkie | Sports Fanatic
        </p>
        <div className="flex justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="#about">
              Get to Know Me
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
