import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { LanguageProvider } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-charcoal">404</h1>
        <p className="mt-4 text-charcoal/60">Η σελίδα δεν βρέθηκε / Page not found</p>
        <Link to="/" className="mt-8 inline-block px-6 py-2 border border-charcoal hover:bg-charcoal hover:text-ivory transition">Home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4 text-center">
      <div>
        <h1 className="font-display text-3xl text-charcoal">Κάτι πήγε στραβά</h1>
        <p className="mt-2 text-charcoal/60 text-sm">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 px-6 py-2 bg-sand text-charcoal">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Iliovasilema · Luxury Apartment in Heraklion, Crete" },
      { name: "description", content: "Πολυτελές διαμέρισμα στο Ηράκλειο της Κρήτης με θέα στο Αιγαίο. Luxury apartment in Heraklion, Crete with panoramic Aegean views." },
      { property: "og:title", content: "Iliovasilema · Luxury Apartment in Heraklion" },
      { property: "og:description", content: "Where the sun meets the sea — boutique luxury in the heart of Heraklion, Crete." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Header />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
