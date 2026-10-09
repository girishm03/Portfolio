import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-headline' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Girish M | PortFolio',
  description:
    'Portfolio of Girish M - Certified Cyber SOC Analyst (CICSA) and Python Full-Stack Developer specializing in real-time SOC telemetry, secure web applications, React, and network defense.',
  metadataBase: new URL('https://girishm.dev'),
  alternates: {
    canonical: 'https://girishm.dev',
  },
  keywords: [
    'Girish M',
    'Girish M Portfolio',
    'girishm.dev',
    'Cyber SOC Analyst',
    'Python Developer',
    'Full Stack Developer',
    'SOC Dashboard',
    'Cybersecurity',
    'CICSA',
    'React',
    'Next.js',
    'Django',
    'Web Security',
  ],
  authors: [{ name: 'Girish M', url: 'https://girishm.dev' }],
  openGraph: {
    title: 'Girish M | PortFolio',
    description:
      'Explore projects including SOC Dashboard, StoryForge, CyberShield Password Suite, and currency converters by Girish M at girishm.dev.',
    url: 'https://girishm.dev',
    siteName: 'Girish M | PortFolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Girish M | PortFolio',
    description:
      'Certified Cyber SOC Analyst & Python Full-Stack Developer. View projects, architecture case studies, and resume.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
