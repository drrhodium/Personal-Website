
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { projectPortfolioData } from './data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProjectCard = ({ project }: { project: any }) => {
    const descriptionParts = project.description.split('Results Achieved:');
    const mainDescription = descriptionParts[0];
    const resultsDescription = descriptionParts.length > 1 ? `Results Achieved:${descriptionParts[1]}` : null;

    return (
        <Card className="flex flex-col shadow-lg">
            <div className="aspect-video overflow-hidden rounded-t-lg">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    data-ai-hint={project.aiHint}
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-headline mb-2">{project.title}</CardTitle>
                <div className="flex-grow whitespace-pre-wrap text-muted-foreground">
                    <span>{mainDescription}</span>
                    {resultsDescription && (
                        <span className="block mt-4">
                            <strong>Results Achieved:</strong>
                            <span>{resultsDescription.replace('Results Achieved:', '')}</span>
                        </span>
                    )}
                </div>
                <CardFooter className="flex justify-end gap-2 p-0 pt-6">
                    {project.liveUrl && project.liveUrl !== '#' && (
                        <Button asChild>
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2" /> Live Demo
                            </Link>
                        </Button>
                    )}
                </CardFooter>
            </div>
        </Card>
    );
};

export function ProjectPortfolio() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Project Portfolio</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto italic text-sm">A selection of my work, from AI experiments to business solutions.</p>
        </div>

        <Tabs defaultValue="ai" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:w-[400px] mx-auto">
                <TabsTrigger value="ai">AI MVPs</TabsTrigger>
                <TabsTrigger value="consulting">Consulting Case Studies</TabsTrigger>
            </TabsList>
            <TabsContent value="ai">
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    {projectPortfolioData.aiMvps.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="consulting">
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    {projectPortfolioData.consulting.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
