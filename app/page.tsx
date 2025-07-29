
import { Header } from '@/components/personal-canvas/header';
import { Hero } from '@/components/personal-canvas/hero';
import { AboutMe } from '@/components/personal-canvas/about-me';
import { CareerTimeline } from '@/components/personal-canvas/career-timeline';
import { EducationTimeline } from '@/components/personal-canvas/education-timeline';
import { ProjectPortfolio } from '@/components/personal-canvas/project-portfolio';
import { FitnessHighlights } from '@/components/personal-canvas/fitness-highlights';
import { InterestsHobbies } from '@/components/personal-canvas/interests-hobbies';
import { ContactMe } from '@/components/personal-canvas/contact-me';
import { WhatsAppButton } from '@/components/personal-canvas/whatsapp-button';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutMe />
        <ProjectPortfolio />
        <CareerTimeline />
        <EducationTimeline />
        <section id="outside-work" className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl font-bold tracking-tight">Outside Work</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto italic text-sm">
                Life isn't all about work. Here are a few things I'm passionate about outside of work.
              </p>
            </div>
            <FitnessHighlights />
            <InterestsHobbies />
          </div>
        </section>
      </main>
      <ContactMe />
      <WhatsAppButton />
    </div>
  );
}
