import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";
import { restaurants } from "@/lib/places";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/restaurants")({
  head: () => ({ meta: [
    { title: "Nearby Restaurants · Iliovasilema" },
    { name: "description", content: "The best Cretan restaurants steps from Iliovasilema in Heraklion." },
  ] }),
  component: RestaurantsPage,
});

function RestaurantsPage() {
  const { lang } = useLanguage();
  return (
    <CategoryListing
      category="restaurants"
      title={lang === "el" ? "Κοντινά Restaurants" : "Nearby Restaurants"}
      subtitle={lang === "el"
        ? "Επιλεγμένα τραπέζια — από κρητικά μεζεδοπωλεία μέχρι σύγχρονη γαστρονομία."
        : "Selected tables — from Cretan mezedopoleia to contemporary kitchens."}
      banner="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80"
      items={restaurants}
      hoverClass="hover-candle"
    />
  );
}
