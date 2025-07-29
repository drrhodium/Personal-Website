
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Apple, Dumbbell, Flame, HeartPulse } from 'lucide-react';
import { fitnessHighlightsData } from './data';
import Image from 'next/image';
import Link from 'next/link';
import { YouTubeEmbed } from './youtube-embed';

const iconMap: { [key: string]: React.ElementType } = {
  Apple,
  Dumbbell,
  Flame,
};

export function FitnessHighlights() {
  const { journey, stats, articles } = fitnessHighlightsData;
  return (
    <div className="space-y-16">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h3 className="font-headline text-2xl font-bold mb-2">{journey.title}</h3>
                <div className="text-muted-foreground max-w-2xl mx-auto italic text-sm">
                    <p>Sweat, Sets, and Stats: From a biryani addict to a semi-ripped consultant</p>
                    <p>(and still cutting…)</p>
                </div>
            </div>
             <div className="text-center mb-8">
                <p className="text-muted-foreground whitespace-pre-wrap max-w-3xl mx-auto">{journey.description}</p>
            </div>
            <div className="rounded-lg overflow-hidden aspect-video shadow-lg">
                <YouTubeEmbed videoId={journey.videoId} />
            </div>
        </div>

        {stats.length > 0 && <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon] || HeartPulse;
            return (
              <Card key={stat.label} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stat.label}</p>
                  <CardTitle className="font-headline text-xl mt-1">{stat.value}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>}
        {articles.length > 0 && <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article) => (
                <Card key={article.title} className="flex flex-col md:flex-row overflow-hidden">
                    <div className="md:w-1/3">
                        <Image src={article.image} alt={article.title} width={400} height={400} className="object-cover h-full w-full" data-ai-hint={article.aiHint}/>
                    </div>
                    <div className="md:w-2/3 flex flex-col p-6">
                        <CardTitle className="font-headline mb-2">{article.title}</CardTitle>
                        <CardDescription className="flex-grow mb-4">{article.description}</CardDescription>
                        <Link href={article.url} className="font-semibold text-primary hover:underline">Read More &rarr;</Link>
                    </div>
                </Card>
            ))}
        </div>}
      </div>
  );
}
