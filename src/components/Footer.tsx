import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-charcoal text-ivory/80 mt-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-3xl text-ivory">Iliovasilema</div>
          <p className="mt-3 text-sm leading-relaxed">{t("footer.tagline")}</p>
        </div>
        <div className="text-sm space-y-2">
          <div>Heraklion · Crete · Greece</div>
          <div>+30 281 000 0000</div>
          <div>hello@iliovasilema.gr</div>
        </div>
        <div className="text-sm md:text-right opacity-60">
          © {new Date().getFullYear()} Iliovasilema. {t("footer.rights")}.
        </div>
      </div>
    </footer>
  );
}
