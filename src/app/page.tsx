import AnimatedBackground from "@/components/animated-background";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <SmoothScroll>
      <main className={cn("bg-slate-100 dark:bg-transparent")}>
        <div className="top-0 z-0 fixed w-full h-screen">
          <AnimatedBackground />
        </div>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}
