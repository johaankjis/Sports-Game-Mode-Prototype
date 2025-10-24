"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface PlayerHeaderProps {
  playerName: string
  level: number
  xp: number
  xpToNextLevel: number
  coins: number
  gems: number
}

export function PlayerHeader({ playerName, level, xp, xpToNextLevel, coins, gems }: PlayerHeaderProps) {
  const xpProgress = (xp / xpToNextLevel) * 100

  return (
    <div className="bg-card border border-border rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary">
            <AvatarImage src="/player-avatar.png" />
            <AvatarFallback>{playerName.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-bold text-foreground">{playerName}</h2>
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                Level {level}
              </Badge>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">XP Progress</span>
                <span className="text-foreground font-medium">
                  {xp} / {xpToNextLevel}
                </span>
              </div>
              <Progress value={xpProgress} className="h-2" />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">{coins.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Coins</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">{gems.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Gems</div>
          </div>
        </div>
      </div>
    </div>
  )
}
