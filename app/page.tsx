import { getPortfolioData } from "@/lib/portfolio";
import Cursor from "@/components/ui/Cursor";
import Background from "@/components/ui/Background";
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
      <Background />
      <Cursor />
      <RevealInit />

      {sections.hero?.enabled && <Navbar nav={data.nav} resume={data.hero.resumeDownload} />}

      <main className="relative z-10">
        {sections.hero?.enabled     && <Hero hero={data.hero} />}
        {sections.marquee?.enabled  && <Marquee items={data.marquee} />}
        {sections.stats?.enabled    && (
          <>
            <div className="glow-divider mx-[5%]" />
            <Stats stats={data.stats} />
          </>
        )}
        {sections.experience?.enabled && (
          <>
            <div className="glow-divider mx-[5%]" />
            <Experience items={data.experience} />
          </>
        )}
        {sections.projects?.enabled && (
          <>
            <div className="glow-divider mx-[5%]" />
            <Projects items={data.projects} />
          </>
        )}
        {sections.skills?.enabled   && (
          <>
            <div className="glow-divider mx-[5%]" />
            <Skills skills={data.skills} certificates={data.certificates} education={data.education} />
          </>
        )}
        {sections.contact?.enabled  && (
          <>
            <div className="glow-divider mx-[5%]" />
            <Contact contact={data.contact} resume={data.hero.resumeDownload} />
          </>
        )}
      </main>

      <Footer text={data.footer.text} />
    </ThemeProvider>
  );
}
