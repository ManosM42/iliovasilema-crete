import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkCls =
    "text-sm tracking-wide uppercase transition-colors hover:text-sand";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-sm" : "glass-dark"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-10 h-16 md:h-20">
        <Link
          to="/"
          className={`font-display text-2xl md:text-3xl tracking-wide ${
            scrolled ? "text-charcoal" : "text-ivory"
          }`}
        >
          Iliovasilema Luxury Apartment
        </Link>

    
        <div className={`flex items-center gap-2 text-sm tracking-widest ${
            scrolled ? "text-charcoal" : "text-ivory"
          }`}
        >
          <button
            onClick={() => setLang("el")}
            className={`transition-opacity ${lang === "el" ? "opacity-100 font-medium" : "opacity-50"}`}
          >GR</button>
          <span className="opacity-30">/</span>
          <button
            onClick={() => setLang("en")}
            className={`transition-opacity ${lang === "en" ? "opacity-100 font-medium" : "opacity-50"}`}
          >EN</button>
        </div>
      </div>
    </header>
  );
}
