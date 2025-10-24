"use client"

import { Card } from "@/components/ui/card"

// Mock player data
const players = [
  {
    id: 1,
    name: "Marcus Johnson",
    position: "QB",
    overall: 95,
    rarity: "Diamond",
    team: "Eagles",
    image: "/football-player-1.jpg",
  },
  {
    id: 2,
    name: "Tyler Rodriguez",
    position: "RB",
    overall: 92,
    rarity: "Gold",
    team: "Cowboys",
    image: "/football-player-2.jpg",
  },
  {
    id: 3,
    name: "James Williams",
    position: "WR",
    overall: 89,
    rarity: "Gold",
    team: "Patriots",
    image: "/football-player-3.jpg",
  },
  {
    id: 4,
    name: "David Chen",
    position: "TE",
    overall: 87,
    rarity: "Silver",
    team: "49ers",
    image: "/football-player-4.jpg",
  },
  {
    id: 5,
    name: "Michael Brown",
    position: "DE",
    overall: 93,
    rarity: "Diamond",
    team: "Steelers",
    image: "/football-player-5.jpg",
  },
  {
    id: 6,
    name: "Chris Anderson",
    position: "CB",
    overall: 88,
    rarity: "Silver",
    team: "Seahawks",
    image: "/football-player-6.jpg",
  },
  {
    id: 7,
    name: "Robert Taylor",
    position: "LB",
    overall: 90,
    rarity: "Gold",
    team: "Packers",
    image: "/football-player-7.jpg",
  },
  {
    id: 8,
    name: "Kevin Martinez",
    position: "S",
    overall: 85,
    rarity: "Bronze",
    team: "Chiefs",
    image: "/football-player-8.jpg",
  },
]

export function CardCollection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Collection</h1>
        <p className="text-muted-foreground">{players.length} cards</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {players.map((player) => (
          <Card key={player.id} className="overflow-hidden transition-all hover:shadow-lg">
            <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/5">
              <img
                src={`/.jpg?key=nl6w0&height=400&width=300&query=${encodeURIComponent(player.name + " " + player.position + " football player")}`}
                alt={player.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute right-2 top-2 rounded-full bg-background/90 px-3 py-1 text-sm font-bold">
                {player.overall}
              </div>
              <div className="absolute left-2 top-2 rounded bg-background/90 px-2 py-1 text-xs font-semibold">
                {player.rarity}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">{player.name}</h3>
              <div className="mt-1 flex items-center justify-between text-sm text-muted-foreground">
                <span>{player.position}</span>
                <span>{player.team}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
