import Image from 'next/image';

export function AboutMe() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg group max-w-sm mx-auto">
             <Image
              src="/rohith-portrait.jpg"
              alt="A portrait of Rohith Ejjaparapu"
              width={400}
              height={533}
              className="object-cover w-full h-full object-top"
              data-ai-hint="man portrait"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight">About Me</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                I am a business consultant with <strong>a decade of experience</strong> spanning <strong>aviation, automotive, and manufacturing industries</strong>. My expertise lies in driving digital transformation by aligning technology with business objectives — from <strong>ERP implementations</strong> and <strong>IT landscape optimization</strong> to <strong>AI-driven solutions</strong> that <strong>enhance operational efficiency</strong>.
              </p>
              <p>
                While <strong>aviation shaped the early part of my career</strong>, I now work with <strong>global clients</strong> across <strong>multiple sectors to deliver measurable impact</strong> through <strong>strategy, process excellence, and technology adoption</strong>.
              </p>
              <p>
                Outside work? I’m either <strong>lifting weights, writing sports satire</strong>, or <strong>trying to make AI do my chores</strong>.
              </p>
              <p>
                This website is a reflection of my professional journey, my interests, and the projects I’ve built along the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
