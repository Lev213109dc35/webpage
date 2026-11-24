/*
 * All the text on the site lives here, in Hungarian (hu) and English (en).
 * To change something on the website, edit it here — no HTML needed.
 * Your projects and uploaded works are listed separately, in js/works.js.
 */
window.SITE = {
  name: "Fehérvári Levente",        // Hungarian name order
  nameEn: "Levente Fehérvári",      // English name order
  email: "levente.fehervari2004@gmail.com",

  // CV files in assets/cv/. Set hu to null until you have a Hungarian PDF:
  // the button then downloads the English one and says so.
  cv: {
    hu: null,
    en: "assets/cv/Levente_Fehervari_CV_EN.pdf"
  },

  ui: {
    hu: {
      skip: "Ugrás a tartalomhoz",
      nav: { about: "Rólam", education: "Tanulmányok", experience: "Tapasztalat", skills: "Készségek", works: "Munkáim", contact: "Kapcsolat" },
      menuOpen: "Menü megnyitása",
      menuClose: "Menü bezárása",
      langLabel: "Nyelv kiválasztása",
      cvButton: "Önéletrajz letöltése",
      cvButtonFallback: "Önéletrajz letöltése (angol)",
      role: "Negyedéves egyetemi hallgató · Pénzügy szakirány",
      tagline: "Gazdasági és pénzügyi matematikai elemzés a Budapesti Corvinus Egyetemen. Gyakornoki lehetőséget keresek pénzügyi elemzés, statisztika és modellezés területén.",
      contactCta: "Kapcsolatfelvétel",
      sections: {
        about: "Rólam",
        education: "Tanulmányok",
        experience: "Tapasztalat",
        skills: "Készségek",
        works: "Munkáim és projektjeim",
        contact: "Kapcsolat"
      },
      worksIntro: "Egyetemi és önálló munkák, elemzések és fájlok.",
      open: "Megnyitás",
      contactText: "Gyakornoki lehetőséggel vagy kérdéssel kapcsolatban e-mailben érhet el.",
      footer: "Utoljára frissítve: 2026"
    },
    en: {
      skip: "Skip to content",
      nav: { about: "About", education: "Education", experience: "Experience", skills: "Skills", works: "Work", contact: "Contact" },
      menuOpen: "Open menu",
      menuClose: "Close menu",
      langLabel: "Choose language",
      cvButton: "Download CV",
      cvButtonFallback: "Download CV",
      role: "Fourth-year university student · Finance specialisation",
      tagline: "Economic and Financial Mathematical Analysis at Corvinus University of Budapest. Looking for an internship in financial analysis, statistics and modelling.",
      contactCta: "Get in touch",
      sections: {
        about: "About",
        education: "Education",
        experience: "Experience",
        skills: "Skills",
        works: "Work & projects",
        contact: "Contact"
      },
      worksIntro: "University and independent work, analyses and files.",
      open: "Open",
      contactText: "For internship opportunities or questions, the best way to reach me is by email.",
      footer: "Last updated: 2026"
    }
  },

  about: {
    hu: "Negyedéves hallgató vagyok a Budapesti Corvinus Egyetem gazdasági és pénzügyi matematikai elemzés szakán, pénzügy szakirányon. Olyan gyakornoki helyet keresek, ahol a matematikai, statisztikai, közgazdasági és pénzügyi elemzési tudásomat a gyakorlatban alkalmazhatom és fejleszthetem.",
    en: "I am a fourth-year student of Economic and Financial Mathematical Analysis at Corvinus University of Budapest, specialising in finance. I am looking for an internship where I can apply and develop my knowledge of mathematics, statistics, economics and financial analysis."
  },

  education: [
    {
      period: "2023 –",
      title: { hu: "Budapesti Corvinus Egyetem", en: "Corvinus University of Budapest" },
      subtitle: { hu: "Gazdasági és pénzügyi matematikai elemzés", en: "Economic and Financial Mathematical Analysis" },
      text: { hu: "Negyedéves hallgató, pénzügy szakirány.", en: "Fourth-year student, finance specialisation." }
    },
    {
      period: "2017 – 2023",
      title: { hu: "Vajda János Gimnázium, Keszthely", en: "Vajda János Secondary School, Keszthely" },
      subtitle: { hu: "Hatosztályos gimnáziumi képzés", en: "Six-year general secondary programme" },
      text: { hu: "Matematika, fizika és informatika fókusszal.", en: "With a focus on mathematics, physics and computer science." }
    }
  ],

  experience: [
    {
      period: { hu: "Korábbi munka", en: "Previous role" },
      title: { hu: "Apartmanház üzemeltetési támogatás", en: "Apartment House Operations Support" },
      subtitle: { hu: "Statisztikai és digitális feladatok", en: "Statistical and digital tasks" },
      text: {
        hu: "Foglalási adatok, kihasználtság és bevételi mutatók rendszerezése és elemzése. Riportok készítése a tulajdonosi döntések támogatására, valamint az ingatlan Instagram-tartalmainak kezelése.",
        en: "Organised and analysed booking data, occupancy rates and revenue metrics. Prepared reports to support the owner's decisions and managed the property's Instagram content."
      }
    },
    {
      period: { hu: "2021-től, nyaranta", en: "Summers, 2021 – present" },
      title: { hu: "Vitorlásverseny-szervezési segítő", en: "Sailing Regatta Support" },
      subtitle: null,
      text: {
        hu: "A versenyzők befutási idejének és helyezésének rögzítése, az eredmények vezetése, valamint a pályajelölő bóják kihelyezésében való közreműködés.",
        en: "Record competitors' finishing times and positions, maintain race results, and help set out racecourse markers."
      }
    },
    {
      period: { hu: "Nyaranta", en: "Summer seasons" },
      title: { hu: "Vitorlástábor-oktató", en: "Sailing Camp Instructor" },
      subtitle: null,
      text: { hu: "Nyári vitorlástáborok vezetése.", en: "Lead sailing camps during the summer." }
    },
    {
      period: { hu: "Korábbi munka", en: "Previous role" },
      title: { hu: "Napszemüveg-rendelések koordinálása", en: "Sunglasses Order Coordinator" },
      subtitle: null,
      text: {
        hu: "Kapcsolattartás a vásárlók és az optikus között, rendelések felvétele és továbbítása, termékek kiszállítása.",
        en: "Liaised between customers and the optician, took and forwarded orders, and delivered products."
      }
    }
  ],

  skills: [
    { label: { hu: "Programozás", en: "Programming" }, items: ["Python", "VBA", "R"] },
    { label: { hu: "Szoftverek", en: "Software" }, items: [
      { hu: "Excel (haladó)", en: "Excel (advanced)" }, "Word", "PowerPoint", "RStudio", "Visual Studio", "LaTeX"
    ] },
    { label: { hu: "Nyelvek", en: "Languages" }, items: [ { hu: "Angol – C1", en: "English – C1" } ] },
    { label: { hu: "Egyéb", en: "Other" }, items: [
      { hu: "Elemző és problémamegoldó készség", en: "Analytical and problem-solving skills" },
      { hu: "B kategóriás jogosítvány", en: "Category B driving licence" }
    ] }
  ]
};
