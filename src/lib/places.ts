export type Category = "beaches" | "attractions" | "restaurants";
import interiorIMG from "@/assets/interior-1.jpg";
import interior2IMG from "@/assets/interior-2.jpg";
import interior3IMG from "@/assets/interior-3.jpg";
import interior4IMG from "@/assets/interior-4.jpg";
import interior5IMG from "@/assets/interior-5.jpg";
import interior6IMG from "@/assets/interior-6.jpg";
import interior7IMG from "@/assets/interior-7.jpg";
import interior8IMG from "@/assets/interior-8.jpg";
import interior9IMG from "@/assets/interior-9.jpg";
import interior10IMG from "@/assets/interior-10.jpg";
import interior11IMG from "@/assets/interior-11.jpg";
import interior12IMG from "@/assets/interior-12.jpg";
import ammoudaraIMG from "@/assets/ammoudara.jpg";
import kokkinhIMG from "@/assets/kokkini.jpg";
import karterosIMG from "@/assets/karteros.jpg";
import psaromouraIMG from "@/assets/psaromoura.jpg";
import ligariaIMG from "@/assets/ligaria.jpg";
import mouseioIMG from "@/assets/mouseio.jpg";
import mouseiokrIMG from "@/assets/mouseiokreta.jpg";
import koulesIMG from "@/assets/koules.jpg";
import kriniIMG from "@/assets/krini.jpg";
import agiosminasIMG from "@/assets/minas.jpg";
import nobusIMG from "@/assets/nobus.jpg";
import moureloIMG from "@/assets/mourelo.jpg";
import magazakiIMG from "@/assets/magazaki.jpg";
import kosmasIMG from "@/assets/taverna-kosmas.jpg";





export interface Place {
  slug: string;
  name: string;
  category: Category;
  distance: string;
  coords: [number, number];
  image: string;
  rating?: string;
  hours: { el: string; en: string };
  best: { el: string; en: string };
  tip: { el: string; en: string };
  desc: { el: string; en: string };
}

// Curated Unsplash photo IDs (real, public)
const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const heroImages = [
  interiorIMG,   
  interior2IMG, 
  interior3IMG, 
  interior4IMG, 
  interior5IMG,  
  interior6IMG, 
];
export const galleryImages = [
  interiorIMG,   
  interior2IMG, 
  interior3IMG, 
  interior4IMG, 
  interior5IMG,  
  interior6IMG, 
  interior7IMG, 
  interior8IMG, 
  interior9IMG, 
  interior10IMG, 
  interior11IMG, 
  interior12IMG, 
];

export const beaches: Place[] = [
  {
    slug: "ammoudara",
    name: "Ammoudara Beach",
    category: "beaches",
    distance: "22 km",
    coords: [35.3374, 25.0875],
    image: ammoudaraIMG,
    hours: { el: "Ελεύθερη πρόσβαση", en: "Open access" },
    best: { el: "Νωρίς το πρωί ή για το ηλιοβασίλεμα", en: "Early morning or sunset" },
    tip: { el: "Στο δυτικό άκρο βρίσκεις τις πιο ήσυχες αμμουδιές.", en: "Walk to the western end for quieter sand." },
    desc: {
      el: "Η μεγαλύτερη παραλία κοντά στο Ηράκλειο, με χρυσή άμμο που εκτείνεται για χιλιόμετρα. Οργανωμένα beach bars στο κέντρο, και απομονωμένες γωνιές αν προχωρήσεις λίγο πιο μακριά.",
      en: "The longest beach near Heraklion, golden sand stretching for kilometers. Organized beach bars in the middle, hidden coves at either end if you walk a little.",
    },
  },
  {
    slug: "psaromoura",
    name: "Psaromoura Beach",
    category: "beaches",
    distance: "36 km",
    coords: [35.4131, 25.0166],
    image: psaromouraIMG,
    hours: { el: "Ελεύθερη πρόσβαση", en: "Open access" },
    best: { el: "Καλοκαιρινά απογεύματα", en: "Summer afternoons" },
    tip: { el: "Φέρτε δικά σας ομπρέλα και νερό — δεν υπάρχει υποδομή.", en: "Bring your own umbrella and water — no facilities." },
    desc: {
      el: "Μικρός παραδεισένιος όρμος με βότσαλα και κρυστάλλινα νερά, κρυμμένος ανάμεσα σε βραχώδεις πλαγιές. Ιδανικός για όσους ψάχνουν ησυχία μακριά από τους τουρίστες.",
      en: "A tiny pebble cove with crystal water tucked between rocky slopes. For travelers chasing quiet, well away from the crowds.",
    },
  },
  {
    slug: "ligaria",
    name: "Ligaria Beach",
    category: "beaches",
    distance: "30 km",
    coords: [35.3785, 25.0432],
    image: ligariaIMG,
    hours: { el: "Ελεύθερη πρόσβαση", en: "Open access" },
    best: { el: "Όλη μέρα — προστατευμένος όρμος", en: "All day — sheltered bay" },
    tip: { el: "Δοκιμάστε ψάρι στις ταβέρνες πάνω από την παραλία.", en: "Try fresh fish at the tavernas above the beach." },
    desc: {
      el: "Προστατευμένος μικρός όρμος με ήρεμα νερά και ταβέρνες χτισμένες στον βράχο. Από τις λίγες παραλίες της περιοχής που προσφέρουν και φαγητό με θέα.",
      en: "A protected little bay with calm water and tavernas built into the rock. One of the rare nearby beaches that pairs swimming with a proper seaside lunch.",
    },
  },
  {
    slug: "karteros",
    name: "Karteros Beach",
    category: "beaches",
    distance: "7 km",
    coords: [35.3268, 25.1891],
    image: karterosIMG,
    hours: { el: "Ελεύθερη πρόσβαση", en: "Open access" },
    best: { el: "Πρωινά για κολύμπι, βράδια για ποτό", en: "Mornings for swimming, evenings for drinks" },
    tip: { el: "Η πιο κοντινή παραλία στο Iliovasilema — δέκα λεπτά οδικώς.", en: "Closest beach to Iliovasilema — ten minutes by car." },
    desc: {
      el: "Σκούρα άμμος, ανέμελα beach bars και μια τοπική ατμόσφαιρα που σπάνια συναντάς σε παραλίες τόσο κοντά στην πόλη. Αγαπημένη των Ηρακλειωτών για το αυθεντικό της ύφος.",
      en: "Dark sand, easy beach bars, and a local atmosphere rare for somewhere this close to the city. A favorite of Heraklion residents for its unpretentious feel.",
    },
  },
  {
    slug: "kokkini-hani",
    name: "Kokkini Hani Beach",
    category: "beaches",
    distance: "6 km",
    coords: [35.3095, 25.2401],
    image: kokkinhIMG,
    hours: { el: "Ελεύθερη πρόσβαση", en: "Open access" },
    best: { el: "Οικογενειακό κολύμπι το πρωί", en: "Family-friendly mornings" },
    tip: { el: "Ρηχά νερά — ιδανικό για παιδιά.", en: "Shallow water — perfect for kids." },
    desc: {
      el: "Παραλιακό χωριό με μακριά αμμουδερή ακτή και πληθώρα ταβερνών. Ρηχά καθαρά νερά που ζεσταίνονται γρήγορα — ιδανικό για οικογένειες.",
      en: "A seaside village with a long sandy shore and plenty of tavernas. Shallow, clear water that warms quickly — ideal for families.",
    },
  },
];

export const attractions: Place[] = [
  {
    slug: "archaeological-museum",
    name: "Heraklion Archaeological Museum",
    category: "attractions",
    distance: "0.5 km",
    coords: [35.3389, 25.1371],
    image: mouseioIMG,
    hours: { el: "08:00 – 20:00 καθημερινά", en: "08:00 – 20:00 daily" },
    best: { el: "Νωρίς το πρωί για ησυχία", en: "Early morning to avoid groups" },
    tip: { el: "Μην χάσετε τον Δίσκο της Φαιστού στην αίθουσα 3.", en: "Don't miss the Phaistos Disc in room 3." },
    desc: {
      el: "Ένα από τα σημαντικότερα μουσεία του κόσμου για τον Μινωικό πολιτισμό. Από τοιχογραφίες της Κνωσού μέχρι τον αινιγματικό Δίσκο της Φαιστού — τέσσερις χιλιάδες χρόνια ιστορίας σε μία επίσκεψη.",
      en: "One of the world's great museums of Minoan civilization. From the frescoes of Knossos to the enigmatic Phaistos Disc — four thousand years of history in a single visit.",
    },
  },
  {
    slug: "koules-fortress",
    name: "Venetian Fortress Rocca a Mare",
    category: "attractions",
    distance: "0.8 km",
    coords: [35.3446, 25.1368],
    image: koulesIMG,
    hours: { el: "08:00 – 20:00", en: "08:00 – 20:00" },
    best: { el: "Δειλινό από τις επάλξεις", en: "Sunset from the ramparts" },
    tip: { el: "Συνδυάστε με βόλτα στον προβλήτα του λιμανιού.", en: "Combine with a stroll along the harbor jetty." },
    desc: {
      el: "Το Βενετικό Κάστρο Ροκά αλ Μάρε δεσπόζει στην είσοδο του λιμανιού του Ηρακλείου από το 1540. Από τις επάλξεις του, το Αιγαίο απλώνεται μέχρι τον ορίζοντα — μια θέα που δεν ξεχνιέται.",
      en: "The Venetian Rocca a Mare has guarded Heraklion's harbor since 1540. From its ramparts the Aegean unfolds to the horizon — a view you do not forget.",
    },
  },
  {
    slug: "historical-museum",
    name: "Historical Museum of Crete",
    category: "attractions",
    distance: "1.2 km",
    coords: [35.3419, 25.1309],
    image: mouseiokrIMG,
    hours: { el: "Δευ–Σαβ 09:00 – 17:00", en: "Mon–Sat 09:00 – 17:00" },
    best: { el: "Απόγευμα για ήσυχη επίσκεψη", en: "Afternoon for a quiet visit" },
    tip: { el: "Ζητήστε να δείτε τα δύο έργα του Ελ Γκρέκο.", en: "Ask to see the two El Greco paintings." },
    desc: {
      el: "Από τους Βυζαντινούς μέχρι τη Μάχη της Κρήτης — η ιστορία του νησιού σε ένα κομψό νεοκλασικό κτίριο. Στεγάζει δύο από τα ελάχιστα έργα του Ελ Γκρέκο που υπάρχουν στην Ελλάδα.",
      en: "From Byzantium to the Battle of Crete — the island's story housed in an elegant neoclassical building. Home to two of the only El Greco works in Greece.",
    },
  },
  {
    slug: "morosini-fountain",
    name: "Morosini Fountain",
    category: "attractions",
    distance: "0.6 km",
    coords: [35.3391, 25.1331],
    image: kriniIMG,
    hours: { el: "Πάντα ανοιχτά", en: "Always open" },
    best: { el: "Πρωί ή αργά το βράδυ", en: "Morning or late evening" },
    tip: { el: "Γύρω από την πλατεία βρίσκονται τα καλύτερα μπουγατσατζίδικα.", en: "The best bougatsa shops surround this square." },
    desc: {
      el: "Στην καρδιά της παλιάς πόλης, το βενετσιάνικο σιντριβάνι των Λεόντων είναι το αγαπημένο σημείο συνάντησης των Ηρακλειωτών εδώ και τέσσερις αιώνες.",
      en: "In the heart of the old town, the Venetian Lions' Fountain has been Heraklion's favorite meeting place for four centuries.",
    },
  },
  {
    slug: "saint-minas",
    name: "Saint Minas Cathedral",
    category: "attractions",
    distance: "0.9 km",
    coords: [35.3376, 25.1309],
    image: agiosminasIMG,
    hours: { el: "07:00 – 19:00", en: "07:00 – 19:00" },
    best: { el: "Πρωινές ώρες με το φως μέσα από τα βιτρώ", en: "Mornings, when light pours through the windows" },
    tip: { el: "Ντυθείτε σεμνά — ενεργός ναός.", en: "Dress modestly — an active church." },
    desc: {
      el: "Ένας από τους μεγαλύτερους ορθόδοξους ναούς της Ελλάδας. Επιβλητικός εξωτερικά, ζεστός και χρυσαφένιος μέσα — με αγιογραφίες που σου κόβουν την ανάσα.",
      en: "One of Greece's largest Orthodox cathedrals. Imposing outside, warm and gilded within — with frescoes that quietly take your breath away.",
    },
  },
];

export const restaurants: Place[] = [
  {
    slug: "Nobus",
    name: "Nobus",
    category: "restaurants",
    distance: "13 km",
    coords: [35.33940749215004, 25.135020569669027],
    image: nobusIMG,
    rating: "4.8★",
    hours: { el: "13:00 – 00:30", en: "13:00 – 00:30" },
    best: { el: "Δείπνο στην εσωτερική αυλή", en: "Dinner in the courtyard" },
    tip: { el: "Παραγγείλτε από τη πιο εκλεκτή κουζίνα του ηρακλείου", en: "Order from the finest cuisine in Heraklion" },
    desc: {
      el: "Από τα πιο αγαπημένα τραπέζια του Ηρακλείου, το Nobus υπηρετεί κρητική κουζίνα από βιολογικές φάρμες της Κρήτης. Η αυλή με το πέτρινο κτίριο δημιουργεί μια ατμόσφαιρα που θυμίζει σπιτικό — αλλά με γαστρονομική φιλοδοξία.",
      en: "One of Heraklion's most-loved tables, Nobus serves Cretan cuisine sourced from the island's organic farms. The stone-walled courtyard feels homey — but the cooking is genuinely ambitious.",
    },
  },
  {
    slug: "Mourelo",
    name: "Cretan Cuisine | Mourelo",
    category: "restaurants",
    distance: "3 km",
    coords: [35.25797807880882, 25.237835224805014],
    image: moureloIMG,
    rating: "4.9★",
    hours: { el: "12:00 – 01:00", en: "12:00 – 01:00" },
    best: { el: "Αργά το βράδυ με ρακή", en: "Late evening with raki" },
    tip: { el: "Αφεθείτε στις προτάσεις του σερβιτόρου.", en: "Let the waiter choose for you." },
    desc: {
      el: "Πραγματικός κρητικός μεζεδοπωλείο σε γραφική αυλή της παλιάς πόλης. Μικρά πιάτα, καραφάκια ρακής, και η αίσθηση ότι είσαι σε σπίτι φίλων που μαγειρεύουν εξαιρετικά.",
      en: "A true Cretan mezedopoleio in a picturesque old-town courtyard. Small plates, carafes of raki, and the feeling of being in the home of friends who happen to cook beautifully.",
    },
  },
  {
    slug: "Traditionas Tavern | Kosmas",
    name: "Traditionas Tavern | Kosmas",
    category: "restaurants",
    distance: "0.4 km",
    coords: [35.26974413503253, 25.24109121019958],
    image: kosmasIMG,
    rating: "4.9★",
    hours: { el: "18:00 – 01:00", en: "18:00 – 01:00" },
    best: { el: "Πριν ή μετά από βόλτα στο λιμάνι", en: "Before or after a harbor walk" },
    tip: { el: "Κάντε κράτηση — μικρός χώρος, πάντα γεμάτος.", en: "Book ahead — small room, always full." },
    desc: {
      el: "Σύγχρονη κρητική κουζίνα σε κομψό περιβάλλον λίγα μέτρα από το λιμάνι. Δημιουργικά πιάτα, εξαιρετική λίστα κρασιών και μια απίστευτη προσοχή στη λεπτομέρεια.",
      en: "Modern Cretan cuisine in an elegant room steps from the harbor. Inventive plates, a serious wine list, and a remarkable eye for detail.",
    },
  },
  {
    slug: "To magazaki pou legame..",
    name: "To magazaki pou legame..",
    category: "restaurants",
    distance: "0.6 km",
    coords: [35.303320131712205, 25.23156741456921],
    image: magazakiIMG,
    rating: "4.7★",
    hours: { el: "19:00 – 00:30", en: "19:00 – 00:30" },
    best: { el: "Νωρίς το βράδυ για cocktail", en: "Early evening for cocktails" },
    tip: { el: "Δοκιμάστε το cocktail με μαστίχα Χίου.", en: "Try the Chios mastiha cocktail." },
    desc: {
      el: "Μικρό και κομψό μπιστρό με μεσογειακή ψυχή. Σπιτική κουζίνα με δημιουργική ματιά, και cocktails που έχουν τη δική τους φήμη στην πόλη.",
      en: "A small, elegant bistro with a Mediterranean soul. Home-style cooking with a creative twist, and cocktails that have their own following in town.",
    },
  },
];

export const allByCategory = { beaches, attractions, restaurants };

export function findPlace(category: Category, slug: string) {
  return allByCategory[category].find((p) => p.slug === slug);
}
