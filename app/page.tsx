import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Skills from "@/components/sections/Skills";
import FAQ from "@/components/sections/FAQ";
import Appointment from "@/components/sections/Appointment";
import MotionReveal from "@/components/ui/MotionReveal";
import PersonJsonLd from "@/components/PersonJsonLd";

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <MotionReveal><Hero /></MotionReveal>
      <MotionReveal delay={0.04}><Experience /></MotionReveal>
      <MotionReveal delay={0.06}><Projects /></MotionReveal>
      <MotionReveal delay={0.08}><Education /></MotionReveal>
      <MotionReveal delay={0.1}><Certifications /></MotionReveal>
      <MotionReveal delay={0.12}><Skills /></MotionReveal>
      <MotionReveal delay={0.14}><FAQ /></MotionReveal>
      <MotionReveal delay={0.16}><Appointment /></MotionReveal>
    </>
  );
}
