import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Intro, Gallery, Amenities, Discover } from "@/components/Sections";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Intro />
      <Gallery />
      <Amenities />
      <Discover />
      <ContactSection />
    </>
  );
}
