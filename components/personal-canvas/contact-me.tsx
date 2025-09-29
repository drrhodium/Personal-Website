import { Button } from '@/components/ui/button';
import { Mail, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.448 0 .002 5.444.002 12.05c0 2.16.56 4.288 1.66 6.134L0 24l6.335-1.652c1.844 1.045 3.948 1.657 6.138 1.657h.005c6.604 0 11.95-5.345 11.95-11.949a11.854 11.854 0 00-3.03-8.283z"
      stroke="none"
    />
  </svg>
);

const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      stroke="none"
    />
  </svg>
);


export function ContactMe() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-1 gap-12 items-center text-center md:text-left">
          <div className="max-w-xl mx-auto md:mx-0">
            <h2 className="font-headline text-3xl font-bold">Get in Touch</h2>
            <p className="mt-4 text-primary-foreground/80">
              Have a question, a project idea, or just want to say hello? I'd love to hear from you.
            </p>
            <div className="mt-8 flex space-x-4 justify-center md:justify-start">
              <Button variant="secondary" size="icon" asChild>
                <Link href="mailto:rohithejjaparapu@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
               <Button variant="secondary" size="icon" asChild>
                <Link href="https://wa.me/919500941889" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <WhatsAppIcon className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="icon" asChild>
                <Link href="https://x.com/Dr_Rhodium" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/rohith-ejjaparapu-812b3089/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="icon" asChild>
                <Link href="https://www.instagram.com/brofessor_rhodium/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="icon" asChild>
                <Link href="https://www.youtube.com/@Brofessor_Rhodium" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <YouTubeIcon className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Rohith Ejjaparapu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
