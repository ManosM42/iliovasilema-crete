import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";
import { attractions } from "@/lib/places";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/attractions")({
  head: () => ({ meta: [
    { title: "Nearby Attractions · Iliovasilema" },
    { name: "description", content: "Discover Heraklion's museums, fortresses and historic landmarks." },
  ] }),
  component: AttractionsPage,
});

function AttractionsPage() {
  const { lang } = useLanguage();
  return (
    <CategoryListing
      category="attractions"
      title={lang === "el" ? "Κοντινά Αξιοθέατα" : "Nearby Attractions"}
      subtitle={lang === "el"
        ? "Μουσεία, κάστρα και βυζαντινοί ναοί στα βήματα του Iliovasilema."
        : "Museums, fortresses and Byzantine churches just steps from Iliovasilema."}
      banner="https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1800&q=80"
      items={attractions}
      hoverClass="hover-shimmer"
    />
  );
}
