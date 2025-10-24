import type { PlayerCard, Pack, CardRarity } from "./types"

export const RARITY_ODDS: Record<CardRarity, number> = {
  common: 0.5, // 50%
  uncommon: 0.3, // 30%
  rare: 0.15, // 15%
  epic: 0.04, // 4%
  legendary: 0.01, // 1%
}

export const RARITY_COLORS: Record<CardRarity, string> = {
  common: "text-muted-foreground",
  uncommon: "text-accent",
  rare: "text-primary",
  epic: "text-secondary",
  legendary: "text-[color:var(--gold)]",
}

export const XP_CURVE = [
  100, 150, 225, 340, 510, 765, 1150, 1725, 2590, 3885, 5830, 8745, 13120, 19680, 29520, 44280, 66420, 99630, 149445,
  224170,
]

const PLAYER_NAMES = [
  "Marcus Johnson",
  "Tyler Rodriguez",
  "Jake Williams",
  "Ryan Martinez",
  "Chris Anderson",
  "Brandon Taylor",
  "Jordan Thomas",
  "Alex Moore",
  "Kevin Jackson",
  "Derek White",
  "Sean Harris",
  "Justin Clark",
  "Mike Lewis",
  "David Walker",
  "James Hall",
  "Robert Allen",
]

const POSITIONS = ["QB", "RB", "WR", "TE", "OL", "DL", "LB", "CB", "S", "K"]
const TEAMS = ["Eagles", "Cowboys", "Giants", "Patriots", "49ers", "Packers", "Chiefs", "Steelers"]

export function generateMockCard(rarity?: CardRarity): PlayerCard {
  const selectedRarity = rarity || selectRarityByOdds()
  const baseOverall = {
    common: 65,
    uncommon: 75,
    rare: 82,
    epic: 88,
    legendary: 95,
  }[selectedRarity]

  const name = PLAYER_NAMES[Math.floor(Math.random() * PLAYER_NAMES.length)]
  const position = POSITIONS[Math.floor(Math.random() * POSITIONS.length)]
  const team = TEAMS[Math.floor(Math.random() * TEAMS.length)]

  return {
    id: `card-${Date.now()}-${Math.random()}`,
    name,
    position,
    team,
    rarity: selectedRarity,
    overall: baseOverall + Math.floor(Math.random() * 5),
    stats: {
      speed: 60 + Math.floor(Math.random() * 40),
      power: 60 + Math.floor(Math.random() * 40),
      defense: 60 + Math.floor(Math.random() * 40),
      stamina: 60 + Math.floor(Math.random() * 40),
    },
    imageUrl: `/placeholder.svg?height=400&width=300&query=${position}+player`,
  }
}

function selectRarityByOdds(): CardRarity {
  const random = Math.random()
  let cumulative = 0

  for (const [rarity, odds] of Object.entries(RARITY_ODDS)) {
    cumulative += odds
    if (random <= cumulative) {
      return rarity as CardRarity
    }
  }

  return "common"
}

export const AVAILABLE_PACKS: Pack[] = [
  {
    id: "starter",
    name: "Starter Pack",
    description: "Perfect for beginners. Contains 5 random cards.",
    cost: 500,
    costType: "coins",
    cardCount: 5,
  },
  {
    id: "premium",
    name: "Premium Pack",
    description: "Better odds! Contains 5 cards with guaranteed Rare or better.",
    cost: 1500,
    costType: "coins",
    guaranteedRarity: "rare",
    cardCount: 5,
  },
  {
    id: "elite",
    name: "Elite Pack",
    description: "Top tier pack with 7 cards and guaranteed Epic or better.",
    cost: 100,
    costType: "gems",
    guaranteedRarity: "epic",
    cardCount: 7,
  },
]

export function calculateXpForLevel(level: number): number {
  if (level <= 0) return 0
  if (level > XP_CURVE.length) {
    return XP_CURVE[XP_CURVE.length - 1] * Math.pow(1.5, level - XP_CURVE.length)
  }
  return XP_CURVE[level - 1]
}
