import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact · Iliovasilema, Heraklion" },
    { name: "description", content: "Reserve your stay at Iliovasilema luxury apartment in Heraklion, Crete." },
  ] }),
  component: () => <div className="pt-24"><ContactSection /></div>,
});