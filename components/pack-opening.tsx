"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Sparkles, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const packData = {
  "1": { name: "Starter Pack", cardCount: 3, price: 500 },
  "2": { name: "Pro Pack", cardCount: 5, price: 1500 },
  "3": { name: "Elite Pack", cardCount: 7, price: 3000 },
}

const rarityColors = {
  Diamond: "from-blue-500 to-blue-700",
  Gold: "from-accent to-yellow-600",
  Silver: "from-gray-400 to-gray-600",
  Bronze: "from-orange-500 to-orange-700",
}

// Mock card generation
const generateCard = () => {
  const rarities = ["Diamond", "Gold", "Silver", "Bronze"]
  const positions = ["QB", "RB", "WR", "TE", "DE", "CB", "LB", "S"]
  const firstNames = ["Marcus", "Tyler", "James", "David", "Michael", "Chris", "Robert", "Kevin"]
  const lastNames = ["Johnson", "Rodriguez", "Williams", "Chen", "Brown", "Anderson", "Taylor", "Martinez"]
  const teams = ["Eagles", "Cowboys", "Patriots", "49ers", "Steelers", "Seahawks", "Packers", "Chiefs"]

  const rarity = rarities[Math.floor(Math.random() * rarities.length)]
  const position = positions[Math.floor(Math.random() * positions.length)]
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
  const team = teams[Math.floor(Math.random() * teams.length)]

  let overall = 75
  if (rarity === "Bronze") overall = 75 + Math.floor(Math.random() * 10)
  if (rarity === "Silver") overall = 85 + Math.floor(Math.random() * 5)
  if (rarity === "Gold") overall = 90 + Math.floor(Math.random() * 5)
  if (rarity === "Diamond") overall = 95 + Math.floor(Math.random() * 5)

  return {
    id: Math.random().toString(36).substr(2, 9),
    name: `${firstName} ${lastName}`,
    position,
    overall,
    rarity,
    team,
    image: `/placeholder.svg?height=400&width=300&query=${encodeURIComponent(firstName + " " + lastName + " " + position + " football player")}`,
  }
}

export function PackOpening({ packId }: { packId: string }) {
  const pack = packData[packId as keyof typeof packData]
  const [stage, setStage] = useState<"ready" | "opening" | "revealing" | "complete">("ready")
  const [cards, setCards] = useState<any[]>([])
  const [revealedIndex, setRevealedIndex] = useState(-1)

  const handleOpenPack = () => {
    setStage("opening")
    setTimeout(() => {
      const newCards = Array.from({ length: pack.cardCount }, generateCard)
      setCards(newCards)
      setStage("revealing")
      setRevealedIndex(0)
    }, 2000)
  }

  const handleRevealNext = () => {
    if (revealedIndex < cards.length - 1) {
      setRevealedIndex(revealedIndex + 1)
    } else {
      setStage("complete")
    }
  }

  if (stage === "ready") {
    return (
      <div className="space-y-8">
        <Link href="/packs">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Store
          </Button>
        </Link>

        <div className="flex flex-col items-center justify-center space-y-8 py-12">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-3xl" />
            <div className="relative flex h-48 w-48 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-red-700 shadow-2xl">
              <Package className="h-24 w-24 text-white" />
            </div>
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-foreground">{pack.name}</h1>
            <p className="text-lg text-muted-foreground">Contains {pack.cardCount} cards</p>
          </div>

          <Button size="lg" onClick={handleOpenPack} className="gap-2 px-8">
            <Sparkles className="h-5 w-5" />
            Open Pack
          </Button>
        </div>
      </div>
    )
  }

  if (stage === "opening") {
    return (
      <div className="flex min-h-[600px] items-center justify-center">
        <div className="text-center space-y-8">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-primary/30 blur-2xl" />
            <div className="relative animate-bounce">
              <Package className="h-32 w-32 text-primary" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground animate-pulse">Opening pack...</p>
        </div>
      </div>
    )
  }

  if (stage === "revealing") {
    const currentCard = cards[revealedIndex]
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Card {revealedIndex + 1} of {cards.length}
          </p>
          <Button variant="ghost" onClick={() => setStage("complete")}>
            Skip All
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center space-y-8 py-12">
          <div className="relative animate-in fade-in zoom-in duration-500">
            <div
              className={cn(
                "absolute inset-0 animate-pulse rounded-2xl blur-2xl",
                currentCard.rarity === "Diamond" && "bg-blue-500/30",
                currentCard.rarity === "Gold" && "bg-yellow-500/30",
                currentCard.rarity === "Silver" && "bg-gray-400/30",
                currentCard.rarity === "Bronze" && "bg-orange-500/30",
              )}
            />
            <Card className="relative w-80 overflow-hidden shadow-2xl">
              <div
                className={cn("bg-gradient-to-br p-1", rarityColors[currentCard.rarity as keyof typeof rarityColors])}
              >
                <div className="relative aspect-[2/3] overflow-hidden bg-muted">
                  <img
                    src={currentCard.image || "/placeholder.svg"}
                    alt={currentCard.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={cn(
                        "text-white",
                        currentCard.rarity === "Diamond" && "bg-blue-600",
                        currentCard.rarity === "Gold" && "bg-yellow-600",
                        currentCard.rarity === "Silver" && "bg-gray-600",
                        currentCard.rarity === "Bronze" && "bg-orange-600",
                      )}
                    >
                      {currentCard.rarity}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                        <span className="text-2xl font-bold text-primary-foreground">{currentCard.overall}</span>
                      </div>
                      <div className="flex-1 text-white">
                        <p className="text-lg font-bold leading-tight">{currentCard.name}</p>
                        <p className="text-sm opacity-90">
                          {currentCard.position} • {currentCard.team}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Button size="lg" onClick={handleRevealNext} className="gap-2 px-8">
            {revealedIndex < cards.length - 1 ? "Next Card" : "View All Cards"}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Pack Opened!</h1>
        <p className="text-muted-foreground">You received {cards.length} new cards</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            className="overflow-hidden animate-in fade-in zoom-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={cn("bg-gradient-to-br p-0.5", rarityColors[card.rarity as keyof typeof rarityColors])}>
              <div className="relative aspect-[2/3] overflow-hidden bg-muted">
                <img src={card.image || "/placeholder.svg"} alt={card.name} className="h-full w-full object-cover" />
                <div className="absolute top-2 right-2">
                  <Badge
                    className={cn(
                      "text-white text-xs",
                      card.rarity === "Diamond" && "bg-blue-600",
                      card.rarity === "Gold" && "bg-yellow-600",
                      card.rarity === "Silver" && "bg-gray-600",
                      card.rarity === "Bronze" && "bg-orange-600",
                    )}
                  >
                    {card.rarity}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                      <span className="text-sm font-bold text-primary-foreground">{card.overall}</span>
                    </div>
                    <div className="flex-1 text-white">
                      <p className="text-xs font-bold leading-tight">{card.name}</p>
                      <p className="text-[10px] opacity-90">
                        {card.position} • {card.team}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <Link href="/packs">
          <Button variant="outline" size="lg">
            Open Another Pack
          </Button>
        </Link>
        <Link href="/">
          <Button size="lg">View Collection</Button>
        </Link>
      </div>
    </div>
  )
}
