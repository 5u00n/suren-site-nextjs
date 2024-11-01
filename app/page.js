import Image from "next/image";
import Link from "next/link";
import { SkillsLayoutGrid } from "./home/SkillsLayoutGrid";
import PricingSectionCards from "@/components/ui/PricingSectionCards";
import { Mail, Linkedin, Github } from 'lucide-react';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import HeroSection from "./home/HeroSection";
import ProjectSection from "./home/ProjectSection";
import NumberSection from "./home/NumberSection";
import SkillSection from "./home/SkillSection";
import EducationSection from "./home/EducationSection";
import CertificateSection from "./home/CertificateSection";
import PricingSection from "./home/PricingSection";
import PartnerSection from "./home/PartnerSection";
import ContactSection from "./home/ContactSection";

export default function Home() {
  return (
    <main className="top-0 start-0 flex flex-col items-center sm:items-start lg:max-w-[1280px] mx-auto">

      <h1 className="sr-only">Suren Hembram</h1>
      <HeroSection />
      

      <NumberSection />

      <ProjectSection />

      

      <SkillSection />

      <EducationSection />

      <CertificateSection />
      
     <PricingSection />

      <PartnerSection/> 

      <ContactSection /> 



      

      

      

      
    </main>
  );
}
