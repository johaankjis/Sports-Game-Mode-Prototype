"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Trophy, Star, Target, Gift, Lock, CheckCircle2 } from "lucide-react"

const playerStats = {
  level: 12,
  currentXP: 3450,
  nextLevelXP: 5000,
  totalXP: 28450,
  coins: 12450,
  packsOpened: 47,
  cardsCollected: 156,
  gamesPlayed: 89,
}

const rewards = [
  { level: 5, reward: "500 Coins", unlocked: true, icon: Gift },
  { level: 10, reward: "Pro Pack", unlocked: true, icon: Gift },
  { level: 15, reward: "1000 Coins", unlocked: false, icon: Lock },
  { level: 20, reward: "Elite Pack", unlocked: false, icon: Lock },
  { level: 25, reward: "Diamond Card", unlocked: false, icon: Lock },
  { level: 30, reward: "2500 Coins", unlocked: false, icon: Lock },
]

const achievements = [
  { id: 1, name: "First Steps", description: "Open your first pack", progress: 1, total: 1, unlocked: true },
  { id: 2, name: "Collector", description: "Collect 100 cards", progress: 156, total: 100, unlocked: true },
  { id: 3, name: "Pack Addict", description: "Open 50 packs", progress: 47, total: 50, unlocked: false },
  { id: 4, name: "Diamond Hunter", description: "Collect 10 Diamond cards", progress: 3, total: 10, unlocked: false },
  { id: 5, name: "Veteran", description: "Reach level 25", progress: 12, total: 25, unlocked: false },
  { id: 6, name: "Champion", description: "Win 100 games", progress: 45, total: 100, unlocked: false },
]

const dailyTasks = [
  { id: 1, task: "Open 3 packs", progress: 2, total: 3, reward: 100, completed: false },
  { id: 2, task: "Collect 5 new cards", progress: 5, total: 5, reward: 150, completed: true },
  { id: 3, task: "Win 2 games", progress: 1, total: 2, reward: 200, completed: false },
]

export function ProgressionDashboard() {
  const xpProgress = (playerStats.currentXP / playerStats.nextLevelXP) * 100

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Progression</h1>
        <p className="text-muted-foreground">Track your journey and unlock rewards</p>
      </div>

      {/* Level Progress */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <span className="text-2xl font-bold text-primary-foreground">{playerStats.level}</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Level {playerStats.level}</h2>
                <p className="text-sm text-muted-foreground">
                  {playerStats.currentXP.toLocaleString()} / {playerStats.nextLevelXP.toLocaleString()} XP
                </p>
              </div>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2">
              {playerStats.nextLevelXP - playerStats.currentXP} XP to next level
            </Badge>
          </div>
          <Progress value={xpProgress} className="h-3" />
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{playerStats.coins.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Total Coins</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Star className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{playerStats.cardsCollected}</p>
              <p className="text-sm text-muted-foreground">Cards Collected</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10">
              <Gift className="h-6 w-6 text-chart-2" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{playerStats.packsOpened}</p>
              <p className="text-sm text-muted-foreground">Packs Opened</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-3/10">
              <Target className="h-6 w-6 text-chart-3" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{playerStats.gamesPlayed}</p>
              <p className="text-sm text-muted-foreground">Games Played</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Daily Tasks */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Daily Tasks</h2>
          <Badge>Resets in 8h 32m</Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {dailyTasks.map((task) => (
            <Card key={task.id} className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{task.task}</p>
                    <p className="text-sm text-muted-foreground">
                      {task.progress} / {task.total}
                    </p>
                  </div>
                  {task.completed && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                </div>
                <Progress value={(task.progress / task.total) * 100} className="h-2" />
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="gap-1">
                    <Trophy className="h-3 w-3" />
                    {task.reward} XP
                  </Badge>
                  <Button size="sm" disabled={!task.completed}>
                    {task.completed ? "Claim" : "In Progress"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Level Rewards */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Level Rewards</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rewards.map((reward) => {
            const Icon = reward.icon
            return (
              <Card key={reward.level} className={reward.unlocked ? "border-primary bg-primary/5" : "opacity-60"}>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant={reward.unlocked ? "default" : "secondary"}>Level {reward.level}</Badge>
                    <Icon className={`h-6 w-6 ${reward.unlocked ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{reward.reward}</p>
                    <p className="text-sm text-muted-foreground">
                      {reward.unlocked ? "Unlocked" : `Unlock at level ${reward.level}`}
                    </p>
                  </div>
                  {reward.unlocked && (
                    <Button className="w-full" size="sm">
                      Claim Reward
                    </Button>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Achievements */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Achievements</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className={achievement.unlocked ? "border-accent" : ""}>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{achievement.name}</h3>
                      {achievement.unlocked && <CheckCircle2 className="h-5 w-5 text-accent" />}
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground">
                      {achievement.progress} / {achievement.total}
                    </span>
                  </div>
                  <Progress value={(achievement.progress / achievement.total) * 100} className="h-2" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
