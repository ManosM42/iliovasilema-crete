import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";
import { beaches } from "@/lib/places";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/beaches")({
  head: () => ({ meta: [
    { title: "Nearby Beaches · Iliovasilema" },
    { name: "description", content: "Explore the most beautiful beaches near Heraklion, Crete." },
  ] }),
  component: BeachesPage,
});

function BeachesPage() {
  const { lang } = useLanguage();
  return (
    <CategoryListing
      category="beaches"
      title={lang === "el" ? "Κοντινές Παραλίες" : "Nearby Beaches"}
      subtitle={lang === "el"
        ? "Από οργανωμένες ακτές μέχρι κρυφούς όρμους — η Κρήτη που θα θυμάστε."
        : "From organized shores to hidden coves — the Crete you'll remember."}
      banner="https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1800&q=80"
      items={beaches}
      hoverClass="hover-wave"
    />
  );
}
