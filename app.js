const I18N = {
en: {
  "nav.services": "Products", "nav.why": "Why us", "nav.gallery": "Gallery",
  "nav.visit": "Visit us", "nav.faq": "FAQ", "nav.contact": "Contact",
  "nav.call": "267-370-9576",
  "hero.kicker": "Covina, California · Roofing materials & supplies",
  "hero.title": "Everything for your roof,<br>in one yard.",
  "hero.sub": "Shingles, underlayment, flashing, gutters and more — quality roofing materials for contractors and homeowners in the San Gabriel Valley.",
  "hero.cta1": "Call us", "hero.cta2": "Browse products",
  "walkin.w1t": "Call for hours", "walkin.w1d": "Contractor pickup available",
  "walkin.w2t": "Roofing supplies", "walkin.w2d": "Materials & accessories in stock",
  "walkin.w3t": "Covina, CA", "walkin.w3d": "67 W Geneva Pl",
  "stats.proNum": "Contractors", "stats.pro": "serving roofing pros & homeowners",
  "stats.stockNum": "Stocked", "stats.stock": "materials ready for pickup",
  "stats.quoteNum": "Fast", "stats.quote": "phone quotes on materials",
  "stats.areaNum": "Covina", "stats.area": "San Gabriel Valley, California",
  "services.kicker": "Our products", "services.title": "Full roofing supply lineup",
  "services.s1t": "Shingles & tiles", "services.s1d": "Architectural and 3-tab shingles in popular colors and profiles.",
  "services.s2t": "Underlayment & waterproofing", "services.s2d": "Synthetic underlayment, ice & water shield and leak barriers.",
  "services.s3t": "Flashing & metal work", "services.s3d": "Step flashing, drip edge, valley metal and custom bent metal.",
  "services.s4t": "Gutters & downspouts", "services.s4d": "Gutters, downspouts and accessories for complete water control.",
  "services.s5t": "Skylights & roof vents", "services.s5d": "Skylights, ridge vents and ventilation for healthy attics.",
  "services.s6t": "Tools & fasteners", "services.s6d": "Nails, caulking, sealants and roofing tools for the whole job.",
  "why.kicker": "Why buy from us", "why.title": "A real roofing yard, not a warehouse aisle",
  "why.intro": "SkylineRoofingSupply is a dedicated roofing material supplier in Covina — stocked for the trade, with people who know roofing and can help you get the right materials the first time.",
  "why.l1t": "Stocked for contractors", "why.l1d": "Job-lot quantities of shingles, underlayment and flashing ready for pickup.",
  "why.l2t": "Knowledgeable help", "why.l2d": "Talk to people who speak roofing — matching, takeoffs and ordering made easy.",
  "why.l3t": "Homeowners welcome", "why.l3d": "DIY or small repair? Get the same pro-grade materials the trades use.",
  "why.l4t": "Local & fast", "why.l4d": "In Covina, serving the San Gabriel Valley — call for availability and pickup.",
  "gallery.kicker": "In pictures", "gallery.title": "The yard",
  "gallery.c1": "Shingle styles and colors to choose from",
  "gallery.c2": "Loading up for the job site",
  "visit.kicker": "Find us", "visit.title": "Come see the yard",
  "visit.score": "Covina, CA",
  "visit.more": "Find us on Google Maps — 67 W Geneva Pl, Covina",
  "faq.kicker": "Good to know", "faq.title": "Frequently asked questions",
  "faq.q1": "What are your opening hours?",
  "faq.a1": "Hours aren't published online — call us at 267-370-9576 and we'll confirm today's hours.",
  "faq.q2": "Do you sell to homeowners, or contractors only?",
  "faq.a2": "Both. Contractors get job-lot quantities; homeowners can pick up pro-grade materials for repairs and small projects.",
  "faq.q3": "Can I get a price quote by phone?",
  "faq.a3": "Yes — call 267-370-9576 with your material list and we'll price it out for you.",
  "faq.q4": "Where are you located?",
  "faq.a4": "67 W Geneva Pl, Covina, California — serving the San Gabriel Valley.",
  "contact.kicker": "Contact us", "contact.title": "Get your materials",
  "contact.addr": "Address", "contact.phone": "Phone", "contact.hours": "Hours",
  "contact.hoursVal": "Call for hours",
  "contact.cta": "Call us",
  "footer.tag": "Roofing materials · Covina, California"
}};

let lang = "en";

function applyLang(l) {
  lang = l;
  localStorage.setItem("srs-lang", l);
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[l][key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.title = "SkylineRoofingSupply — Roofing Supply Store in Covina, CA";
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang(lang);
