import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { Projects } from "@/components/sections/projects";
import { GithubStats } from "@/components/sections/github-stats";
import { Skills } from "@/components/sections/skills";
import { Socials } from "@/components/sections/socials";
import { ContactForm } from "@/components/sections/contact-form";
import { SocTerminal } from "@/components/soc-terminal";
import { SocTelemetryTicker } from "@/components/soc-telemetry-ticker";
import { SpotlightBackground } from "@/components/ui/spotlight-background";
import { DecryptText } from "@/components/ui/decrypt-text";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { defaultData } from "@/lib/data";

export default function Home() {
  const { about } = defaultData;

  return (
    <div className="flex min-h-screen w-full flex-col selection:bg-primary/20 selection:text-primary relative">
      {/* Interactive Cursor Spotlight Glow */}
      <SpotlightBackground />

      <Header />
      <main className="flex-1">
        {/* Main Hero Section */}
        <Hero />

        {/* Animation 5: Live SOC Telemetry Status Ticker */}
        <div className="container px-4 md:px-6 -mt-4 mb-4 relative z-20">
          <SocTelemetryTicker />
        </div>

        {/* Interactive SOC Terminal Console */}
        <section className="w-full py-8 md:py-12 bg-background/50 relative z-10 border-b border-border/40">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-6 space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold">
                <DecryptText text="INTERACTIVE DEVELOPER CONSOLE" speed={25} />
              </span>
              <p className="text-xs text-muted-foreground">
                Run commands in real-time or click the chips below to query skills, credentials, and projects.
              </p>
            </div>
            <SocTerminal />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 border-b border-border/40">
          <div className="container px-4 md:px-6">
            <About />
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="w-full py-16 md:py-24 lg:py-32 border-b border-border/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                  <DecryptText text="QUALIFICATIONS & TRAINING" speed={25} />
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-headline">
                  Education & Credentials
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  My academic foundation, accredited cybersecurity credentials, and engineering training.
                </p>
              </div>
            </div>

            {/* Certifications First */}
            <Certifications />

            {/* Academic Degrees */}
            <div className="mt-14">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold font-headline text-foreground">
                  Academic Degrees & Courses
                </h3>
              </div>
              <Education />
            </div>
          </div>
        </section>

        {/* Projects Section with Case Studies */}
        <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 border-b border-border/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                  <DecryptText text="FEATURED WORK // ARCHITECTURES" speed={25} />
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-headline">
                  Featured Projects & Architecture
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Explore real-world security telemetry consoles, AI tools, and applications with in-depth STAR case studies.
                </p>
              </div>
            </div>

            <Projects />

            {/* GitHub Engineering Stats */}
            <GithubStats />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-16 md:py-24 lg:py-32 border-b border-border/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                  <DecryptText text="TECHNICAL ARSENAL // THREE-LANE STREAM" speed={25} />
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-headline">
                  Technical Arsenal
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Domain-categorized proficiencies across defense, backend architectures, frontend engineering, and databases.
                </p>
              </div>
            </div>
            <Skills />
          </div>
        </section>

        {/* Get in Touch Section with Working Contact Form */}
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                  <DecryptText text="DIRECT COMMUNICATION" speed={25} />
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-headline">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Interested in collaborating, hiring for a cybersecurity/full-stack role, or have a question? Drop a message below.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-5 space-y-6 bg-card/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-border/80 text-left">
                <div>
                  <h3 className="text-xl font-bold font-headline text-foreground">
                    Contact Details
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Feel free to reach out via direct message or any of my social profiles.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <a
                    href={`mailto:${about.email}`}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-muted/40 hover:bg-muted/80 transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Direct Email</p>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {about.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`tel:${about.phone}`}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-muted/40 hover:bg-muted/80 transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Phone / WhatsApp</p>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {about.phone}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-muted/40">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Location</p>
                      <p className="text-sm font-semibold text-foreground">
                        {about.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Social & Professional Profiles
                  </p>
                  <Socials />
                </div>

                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs text-muted-foreground space-y-1">
                  <div className="flex items-center gap-1.5 font-medium text-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Rapid Response
                  </div>
                  <p>Inquiries sent here deliver immediately to my personal inbox.</p>
                </div>
              </div>

              {/* Working Contact Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-border/60 bg-card/40 py-8 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Girish M. All rights reserved.</p>
          <p>
            Certified Cyber SOC Analyst & Full-Stack Developer • <span className="text-primary font-mono font-medium">girishm.dev</span>
          </p>
          <a
            href="mailto:girishmadhu03@gmail.com"
            className="text-primary hover:underline font-mono"
          >
            girishmadhu03@gmail.com
          </a>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
