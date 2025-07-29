
'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CheckCircle } from 'lucide-react';
import { careerData } from './data';

const iconMap: { [key: string]: React.ElementType } = {
  Briefcase,
};

export function CareerTimeline() {
  return (
    <section id="career" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight">Career Journey</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto italic text-sm">
            From engineering classrooms to global boardrooms — here’s the journey so far.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div
            className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"
            aria-hidden="true"
          ></div>
          {careerData.map((item, index) => {
            const Icon = iconMap[item.icon] || Briefcase;
            return (
              <Dialog key={index}>
                <div
                  className={`mb-8 flex justify-between items-center w-full ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="hidden md:block w-5/12"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg">
                    <Icon />
                  </div>
                  <div className="w-full md:w-5/12">
                    <DialogTrigger asChild>
                      <Card className="shadow-lg cursor-pointer hover:shadow-xl hover:border-primary transition-all">
                        <CardHeader>
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <CardTitle className="font-headline">{item.role}</CardTitle>
                              <p className="text-muted-foreground">{item.company}</p>
                            </div>
                            <p className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</p>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p>{item.description}</p>
                           <div className="mt-4 font-semibold text-primary hover:underline">
                              Know more &rarr;
                            </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                  </div>
                </div>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle className="font-headline text-2xl">{item.role}</DialogTitle>
                    <DialogDescription>
                      {item.company} | {item.period}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <ul className="space-y-3">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}
