
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { interestsData } from './data';
import { Mail, Palette, ChefHat, Gamepad2 } from 'lucide-react';
import Link from 'next/link';

const iconMap: { [key: string]: React.ElementType } = {
    Mail,
    Palette,
    ChefHat
};

export function InterestsHobbies() {
  return (
    <div className="mt-16">
        <div className="text-center mb-12">
            <h3 className="font-headline text-2xl font-bold tracking-tight">Other Interests</h3>
        </div>
        <div className="flex justify-end w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {interestsData.map((interest) => {
                    const Icon = iconMap[interest.icon] || Gamepad2;
                    return (
                        <Card key={interest.title}>
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <Icon className="w-8 h-8 text-primary"/>
                                    <CardTitle className="font-headline">{interest.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">{interest.description}</p>
                                {interest.link.text === 'Coming soon...' ? (
                                    <span className="font-semibold text-muted-foreground cursor-not-allowed">
                                        {interest.link.text}
                                    </span>
                                ) : (
                                    <Link href={interest.link.url} className="font-semibold text-primary hover:underline">
                                        {interest.link.text} &rarr;
                                    </Link>
                                )}
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    </div>
  );
}
