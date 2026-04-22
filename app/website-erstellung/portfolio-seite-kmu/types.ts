import type { LucideIcon } from "lucide-react"

export interface NavItem {
  href: string
  label: string
}

export interface ValuePropositionItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface ProcessStepItem {
  step: number
  title: string
  description: string
}
