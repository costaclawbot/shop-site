const translations = {
  it: {
    brandName: "Giovanni Cosentino",
    brandSub: "Giardinaggio & Agricoltura",
    navHome: "Home",
    navProducts: "Prodotti",
    navService: "Officina",
    navBrands: "Marchi",
    navContacts: "Contatti",
    heroEyebrow: "Lauria · vendita · assistenza",
    heroTitle: "Macchine, ricambi, officina.",
    heroText: "Giardinaggio e agricoltura, da due generazioni.",
    heroCall: "Chiama",
    heroWhatsapp: "WhatsApp",
    heroNote: "Foto futura: facciata, insegna o banco officina.",
    homeCard1Label: "Prodotti",
    homeCard1Title: "Attrezzature selezionate",
    homeCard1Text: "Motoseghe, rasaerba, decespugliatori, motozappe, scuotitori e accessori.",
    homeCard2Label: "Officina",
    homeCard2Title: "Supporto dopo l’acquisto",
    homeCard2Text: "Riparazioni, manutenzione e ricambi, con un rapporto diretto e pratico.",
    homeQuoteLabel: "Tono del sito",
    homeQuote: "Strumenti buoni. Supporto vero.",
    productsEyebrow: "Prodotti",
    productsTitle: "Categorie principali",
    productsIntro: "Un catalogo essenziale, pensato per orientare e invitare al contatto.",
    cat1Title: "Motoseghe",
    cat1Text: "Taglio e potatura.",
    cat2Title: "Rasaerba",
    cat2Text: "Prato e manutenzione del verde.",
    cat3Title: "Decespugliatori",
    cat3Text: "Per giardino e campagna.",
    cat4Title: "Motozappe",
    cat4Text: "Terreno e orto.",
    cat5Title: "Ricambi",
    cat5Text: "Catene, lame, oli, fili e filtri.",
    cat6Title: "Scuotitori",
    cat6Text: "Raccolta e stagionalità.",
    serviceEyebrow: "Officina",
    serviceTitle: "Vendita e assistenza, insieme.",
    serviceText: "Un negozio utile anche dopo l’acquisto: riparazioni, manutenzione e ricambi.",
    serviceNote: "Foto futura: mani, banco lavoro, dettagli officina.",
    service1: "Riparazioni",
    service2: "Manutenzione",
    service3: "Ricambi e accessori",
    service4: "Supporto post-vendita",
    serviceCta: "Chiama per info",
    brandsEyebrow: "Marchi",
    brandsTitle: "Marchi trattati",
    brandsIntro: "Oleo-Mac in evidenza, con spazio per aggiungere gli altri marchi reali del negozio.",
    brandsPill: "In evidenza",
    brandHighlightText: "Vendita, ricambi e supporto tecnico.",
    contactStripEyebrow: "Contatti",
    contactStripTitle: "Passa, chiama, scrivi.",
    contactsIntro: "Contatti rapidi e indirizzo del negozio, senza fronzoli.",
    contactBox1Label: "Telefono",
    contactBox2Label: "Indirizzo",
    contactBox3Label: "Orari",
    footerContacts: "Contatti",
    footerAddress: "Lauria",
    footerAddressText: "Via Rocco Scotellaro 161, 85044 Lauria (PZ), Italia",
    footerMap: "Apri la mappa",
    footerHours: "Apertura",
    footerHoursText: "Lun–Sab · 08:30–12:30 / 14:30–18:30"
  },
  en: {
    brandName: "Giovanni Cosentino",
    brandSub: "Gardening & Agriculture",
    navHome: "Home",
    navProducts: "Products",
    navService: "Workshop",
    navBrands: "Brands",
    navContacts: "Contacts",
    heroEyebrow: "Lauria · sales · service",
    heroTitle: "Machines, parts, workshop.",
    heroText: "Gardening and agriculture, across two generations.",
    heroCall: "Call",
    heroWhatsapp: "WhatsApp",
    heroNote: "Future photo: storefront, sign or workshop bench.",
    homeCard1Label: "Products",
    homeCard1Title: "Selected equipment",
    homeCard1Text: "Chainsaws, lawnmowers, brushcutters, tillers, shakers and accessories.",
    homeCard2Label: "Workshop",
    homeCard2Title: "Support after purchase",
    homeCard2Text: "Repairs, maintenance and spare parts, with a direct practical approach.",
    homeQuoteLabel: "Site tone",
    homeQuote: "Good tools. Real support.",
    productsEyebrow: "Products",
    productsTitle: "Main categories",
    productsIntro: "An essential catalogue designed to guide and encourage contact.",
    cat1Title: "Chainsaws",
    cat1Text: "Cutting and pruning.",
    cat2Title: "Lawnmowers",
    cat2Text: "Lawn and green maintenance.",
    cat3Title: "Brushcutters",
    cat3Text: "For garden and countryside.",
    cat4Title: "Tillers",
    cat4Text: "Soil and garden plots.",
    cat5Title: "Spare parts",
    cat5Text: "Chains, blades, oils, lines and filters.",
    cat6Title: "Shakers",
    cat6Text: "Harvest and seasonal work.",
    serviceEyebrow: "Workshop",
    serviceTitle: "Sales and service, together.",
    serviceText: "A useful shop even after the purchase: repairs, maintenance and spare parts.",
    serviceNote: "Future photo: hands, workbench, workshop details.",
    service1: "Repairs",
    service2: "Maintenance",
    service3: "Spare parts and accessories",
    service4: "Post-sale support",
    serviceCta: "Call for info",
    brandsEyebrow: "Brands",
    brandsTitle: "Brands carried",
    brandsIntro: "Oleo-Mac featured, with room to add the shop’s other real brands.",
    brandsPill: "Featured",
    brandHighlightText: "Sales, spare parts and technical support.",
    contactStripEyebrow: "Contacts",
    contactStripTitle: "Visit, call, write.",
    contactsIntro: "Quick contact details and shop address, without clutter.",
    contactBox1Label: "Phone",
    contactBox2Label: "Address",
    contactBox3Label: "Hours",
    footerContacts: "Contacts",
    footerAddress: "Lauria",
    footerAddressText: "Via Rocco Scotellaro 161, 85044 Lauria (PZ), Italy",
    footerMap: "Open map",
    footerHours: "Opening",
    footerHoursText: "Mon–Sat · 08:30–12:30 / 14:30–18:30"
  }
};

const setLanguage = (lang) => {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[lang][key]) node.textContent = translations[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });
  localStorage.setItem('shop-language', lang);
};

const setTab = (tab) => {
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.tab === tab);
  });
  document.querySelectorAll('.tab-panel').forEach((panel) => {
    panel.classList.toggle('is-active', panel.id === `tab-${tab}`);
  });
};

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

document.querySelectorAll('.tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => setTab(btn.dataset.tab));
});

setLanguage(localStorage.getItem('shop-language') || 'it');
setTab('home');
