"use client";
// import DestructEffect from "@/components/destruct-effect";
import AboutSection from "@/components/about/about";
import ContactSection from "@/components/contact/contacts";
import ExperienceSection from "@/components/experience/experience";
import GridOverlay from "@/components/grid-overlay";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import ProjectsSection from "@/components/projects/projects";
import SkillsSection from "@/components/skills/skills";
import SmoothScrollbarWrapper from "@/components/smooth-scrollbar";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     console.log("scroll");
  //   });
  // }, []);

  return (
    <main className="relative overflow-y-hidden">
      <GridOverlay />
      <Header />
      <div className="h-full flex flex-col w-full">
        <Hero />
        <div className="bg-background mt-[100vh] z-10">
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
