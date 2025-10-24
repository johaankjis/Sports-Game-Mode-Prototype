export type CardRarity = "common" | "uncommon" | "rare" | "epic" | "legendary"

export interface PlayerCard {
  id: string
  name: string
  position: string
  team: string
  rarity: CardRarity
  overall: number
  stats: {
    speed: number
    power: number
    defense: number
    stamina: number
  }
  imageUrl: string
}

export interface Pack {
  id: string
  name: string
  description: string
  cost: number
  costType: "coins" | "gems"
  guaranteedRarity?: CardRarity
  cardCount: number
}

export interface PlayerProgress {
  level: number
  xp: number
  xpToNextLevel: number
  totalXp: number
}

export interface PlayerStats {
  totalCards: number
  uniqueCards: number
  packsOpened: number
  sessionTime: number
  onboardingCompleted: boolean
}
