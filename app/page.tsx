import { getPortfolioData } from "@/lib/portfolio";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Stats from "@/components/sections/Stats";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ThemeProvider from "@/components/ui/ThemeProvider";
import RevealInit from "@/components/ui/RevealInit";

export default function Home() {
  const data = getPortfolioData();
  const { sections } = data;

  return (
    <ThemeProvider colors={data.theme.colors}>
      <RevealInit />
      {sections.hero?.enabled && <Navbar nav={data.nav} resume={data.hero.resumeDownload} />}
      <main>
        {sections.hero?.enabled     && <Hero hero={data.hero} />}
        {sections.marquee?.enabled  && <Marquee items={data.marquee} />}
        {sections.stats?.enabled    && <Stats stats={data.stats} />}
        {sections.experience?.enabled && <Experience items={data.experience} />}
        {sections.projects?.enabled && <Projects items={data.projects} />}
        {sections.skills?.enabled   && (
          <Skills skills={data.skills} certificates={data.certificates} education={data.education} />
        )}
        {sections.contact?.enabled  && <Contact contact={data.contact} resume={data.hero.resumeDownload} />}
      </main>
      <Footer text={data.footer.text} />
    </ThemeProvider>
  );
}
