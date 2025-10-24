import { Navigation } from "@/components/navigation"
import { OnboardingFlow } from "@/components/onboarding-flow"

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <OnboardingFlow />
      </main>
    </div>
  )
}
