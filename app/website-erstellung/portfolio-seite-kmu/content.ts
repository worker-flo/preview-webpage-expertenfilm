import { FileCheck2, LayoutDashboard, Wrench } from "lucide-react"
import type { NavItem, ProcessStepItem, ValuePropositionItem } from "./types"

/** Markenname – Platzhalter für den Nachnamen des Solopreneurs */
export const BRAND_NAME = "Solartechnik Mustermann"

export const NAV_ITEMS: NavItem[] = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#kontakt", label: "Kontakt" },
]

export const VALUE_PROPOSITIONS: ValuePropositionItem[] = [
  {
    id: "planung",
    title: "Individuelle Planung",
    description:
      "Maßgeschneiderte PV-Konzepte für Ihr Dach, Ihre Verbrauchswerte und Ihre Ziele – technisch sauber, wirtschaftlich sinnvoll.",
    icon: LayoutDashboard,
  },
  {
    id: "montage",
    title: "Fachgerechte Montage",
    description:
      "Sichere Verlegung der Module, saubere DC/AC-Verkabelung und solide Unterkonstruktion nach aktuellen Normen.",
    icon: Wrench,
  },
  {
    id: "anmeldung",
    title: "Direkte Anmeldung",
    description:
      "Ich übernehme die Anmeldung beim Netzbetreiber und die Formalitäten – Sie behalten den Überblick, ohne Papierkram-Stress.",
    icon: FileCheck2,
  },
]

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: 1,
    title: "Beratung",
    description: "Vor-Ort-Termin oder Video-Call: Potential, Wirtschaftlichkeit, Förderungen.",
  },
  {
    step: 2,
    title: "Planung",
    description: "Statik, Modul-Layout, Wechselrichter, Speicher – alles dokumentiert.",
  },
  {
    step: 3,
    title: "Montage",
    description: "Termingerechte Installation mit Abnahme und Übergabe.",
  },
  {
    step: 4,
    title: "Ersparnis genießen",
    description: "Eigenverbrauch optimieren und von sinkenden Stromkosten profitieren.",
  },
]

/** Unsplash – Solar / Portrait (lizenziert über Unsplash-Lizenz) */
export const HERO_IMAGE = {
  src: "https://images.unsplash.com/photo-1655300256335-beef51a914fe?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  alt: "Photovoltaik-Module auf einem Hausdach bei blauem Himmel",
  width: 2000,
  height: 1333,
} as const

export const PORTRAIT_IMAGE = {
  src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
  alt: "Solartechniker bei der Arbeit im Außendienst",
  width: 800,
  height: 1000,
} as const
