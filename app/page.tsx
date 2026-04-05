import { ElevatedWorkflow } from "@/components/ElevatedWorkflow";
import { FAQ } from "@/components/FAQ";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Implementation } from "@/components/Implementation";
import { Navbar } from "@/components/Navbar";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ROISection } from "@/components/ROISection";
import { StatsSection } from "@/components/StatsSection";
import { SystemFeatures } from "@/components/SystemFeatures";
import { SectionTransition } from "@/components/ui/SectionTransition";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <SectionTransition from="hero" to="green" variant="arc" waveIndex={0} />
      <ProblemSection />
      <SectionTransition from="green" to="white" waveIndex={1} />
      <FeaturesGrid />
      <SectionTransition from="white" to="green" waveIndex={2} />
      <ProcessSection />
      <SectionTransition from="green" to="white" waveIndex={3} />
      <HowItWorks />
      <SectionTransition from="white" to="green" waveIndex={4} />
      <SystemFeatures />
      <SectionTransition from="green" to="green" waveIndex={5} />
      <ElevatedWorkflow />
      <SectionTransition from="green" to="green" waveIndex={6} />
      <Implementation />
      <SectionTransition from="green" to="white" waveIndex={7} />
      <StatsSection />
      <SectionTransition from="white" to="green" waveIndex={8} />
      <ROISection />
      <SectionTransition from="green" to="green" waveIndex={9} />
      <FAQ />
      <SectionTransition from="green" to="green" waveIndex={10} />
      <Footer />
    </main>
  );
}
