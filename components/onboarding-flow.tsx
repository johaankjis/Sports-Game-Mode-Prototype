"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Package, Users, Target, Sparkles, ArrowRight, CheckCircle2, Play, Gift } from "lucide-react"
import Link from "next/link"

const tutorialSteps = [
  {
    id: 1,
    title: "Welcome to Diamond Dynasty Lite",
    description: "Build your ultimate team by collecting player cards and competing in matches.",
    icon: Trophy,
    color: "from-primary to-red-700",
    content: (
      <div className="space-y-4">
        <div className="rounded-lg bg-muted p-6 text-center">
          <Trophy className="mx-auto mb-4 h-16 w-16 text-primary" />
          <h3 className="text-xl font-bold text-foreground">Your Journey Begins</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Collect cards, build your team, and climb the ranks to become a champion.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border p-4 text-center">
            <Package className="mx-auto mb-2 h-8 w-8 text-accent" />
            <p className="text-sm font-medium text-foreground">Open Packs</p>
            <p className="text-xs text-muted-foreground">Discover new players</p>
          </div>
          <div className="rounded-lg border border-border p-4 text-center">
            <Users className="mx-auto mb-2 h-8 w-8 text-chart-2" />
            <p className="text-sm font-medium text-foreground">Build Teams</p>
            <p className="text-xs text-muted-foreground">Create your lineup</p>
          </div>
          <div className="rounded-lg border border-border p-4 text-center">
            <Target className="mx-auto mb-2 h-8 w-8 text-chart-3" />
            <p className="text-sm font-medium text-foreground">Compete</p>
            <p className="text-xs text-muted-foreground">Win matches & rewards</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Understanding Card Rarities",
    description: "Cards come in different rarities, each with unique power levels and abilities.",
    icon: Sparkles,
    color: "from-accent to-yellow-600",
    content: (
      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-4 rounded-lg border border-blue-500 bg-blue-500/10 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
              <span className="text-lg font-bold text-white">95+</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground">Diamond</p>
              <p className="text-sm text-muted-foreground">Elite players with 95+ overall rating</p>
            </div>
            <Badge className="bg-blue-500 text-white">2% Drop Rate</Badge>
          </div>
          <div className="flex items-center gap-4 rounded-lg border border-yellow-500 bg-yellow-500/10 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500">
              <span className="text-lg font-bold text-white">90+</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground">Gold</p>
              <p className="text-sm text-muted-foreground">Strong players with 90-94 overall rating</p>
            </div>
            <Badge className="bg-yellow-500 text-white">22% Drop Rate</Badge>
          </div>
          <div className="flex items-center gap-4 rounded-lg border border-gray-500 bg-gray-500/10 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-500">
              <span className="text-lg font-bold text-white">85+</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground">Silver</p>
              <p className="text-sm text-muted-foreground">Solid players with 85-89 overall rating</p>
            </div>
            <Badge className="bg-gray-500 text-white">35% Drop Rate</Badge>
          </div>
          <div className="flex items-center gap-4 rounded-lg border border-orange-500 bg-orange-500/10 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500">
              <span className="text-lg font-bold text-white">75+</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground">Bronze</p>
              <p className="text-sm text-muted-foreground">Common players with 75-84 overall rating</p>
            </div>
            <Badge className="bg-orange-500 text-white">35% Drop Rate</Badge>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Earning Rewards & Progression",
    description: "Level up, complete challenges, and earn coins to expand your collection.",
    icon: Gift,
    color: "from-chart-2 to-green-600",
    content: (
      <div className="space-y-4">
        <div className="rounded-lg bg-muted p-6">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Ways to Earn Rewards</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Complete Daily Tasks</p>
                <p className="text-sm text-muted-foreground">Earn XP and coins by finishing daily objectives</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Level Up</p>
                <p className="text-sm text-muted-foreground">Unlock rewards at each level milestone</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Win Matches</p>
                <p className="text-sm text-muted-foreground">Compete and earn coins for victories</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Unlock Achievements</p>
                <p className="text-sm text-muted-foreground">Complete special challenges for bonus rewards</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">Current Level</p>
            <p className="text-3xl font-bold text-foreground">12</p>
            <Progress value={69} className="mt-2 h-2" />
            <p className="mt-1 text-xs text-muted-foreground">3,450 / 5,000 XP</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">Your Balance</p>
            <p className="text-3xl font-bold text-foreground">12,450</p>
            <p className="mt-1 text-xs text-muted-foreground">Coins available to spend</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Open Your First Pack",
    description: "Let's get you started with a free starter pack to begin your collection!",
    icon: Package,
    color: "from-primary to-red-700",
    content: (
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center space-y-4 py-8">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-3xl" />
            <div className="relative flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-red-700 shadow-2xl">
              <Package className="h-16 w-16 text-white" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground">Free Starter Pack</h3>
            <p className="text-muted-foreground">Contains 3 guaranteed cards</p>
          </div>
          <Badge className="text-lg px-4 py-2">FREE</Badge>
        </div>
        <div className="rounded-lg border border-border bg-muted/50 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            This pack is on us! Open it to receive your first players and start building your team.
          </p>
        </div>
      </div>
    ),
  },
]

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0)
  const [completed, setCompleted] = useState(false)

  const step = tutorialSteps[currentStep]
  const progress = ((currentStep + 1) / tutorialSteps.length) * 100
  const Icon = step.icon

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSkip = () => {
    setCompleted(true)
  }

  if (completed) {
    return (
      <div className="flex min-h-[600px] flex-col items-center justify-center space-y-8">
        <div className="text-center space-y-4">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-500/10">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">Tutorial Complete!</h1>
          <p className="text-lg text-muted-foreground">You're ready to start your journey</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-6 text-center">
            <Trophy className="mx-auto mb-3 h-10 w-10 text-primary" />
            <p className="font-semibold text-foreground">500 Coins</p>
            <p className="text-xs text-muted-foreground">Welcome bonus</p>
          </Card>
          <Card className="p-6 text-center">
            <Package className="mx-auto mb-3 h-10 w-10 text-accent" />
            <p className="font-semibold text-foreground">Free Starter Pack</p>
            <p className="text-xs text-muted-foreground">Ready to open</p>
          </Card>
          <Card className="p-6 text-center">
            <Gift className="mx-auto mb-3 h-10 w-10 text-chart-2" />
            <p className="font-semibold text-foreground">Daily Tasks</p>
            <p className="text-xs text-muted-foreground">Unlocked</p>
          </Card>
        </div>

        <div className="flex gap-4">
          <Link href="/packs/open/1">
            <Button size="lg" className="gap-2">
              <Play className="h-5 w-5" />
              Open Free Pack
            </Button>
          </Link>
          <Link href="/">
            <Button size="lg" variant="outline">
              Go to Collection
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tutorial</h1>
          <p className="text-muted-foreground">
            Step {currentStep + 1} of {tutorialSteps.length}
          </p>
        </div>
        <Button variant="ghost" onClick={handleSkip}>
          Skip Tutorial
        </Button>
      </div>

      <Progress value={progress} className="h-2" />

      <Card className="overflow-hidden">
        <div className={`bg-gradient-to-br ${step.color} p-8 text-center`}>
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <Icon className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white">{step.title}</h2>
          <p className="mt-2 text-white/90">{step.description}</p>
        </div>

        <div className="p-8">{step.content}</div>

        <div className="flex items-center justify-between border-t border-border p-6">
          <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
            Previous
          </Button>
          <div className="flex gap-2">
            {tutorialSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentStep ? "bg-primary" : index < currentStep ? "bg-primary/50" : "bg-muted"
                }`}
              />
            ))}
          </div>
          <Button onClick={handleNext} className="gap-2">
            {currentStep === tutorialSteps.length - 1 ? "Finish" : "Next"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      <div className="rounded-lg border border-border bg-muted/50 p-4">
        <p className="text-center text-sm text-muted-foreground">
          You can revisit this tutorial anytime from the navigation menu
        </p>
      </div>
    </div>
  )
}
