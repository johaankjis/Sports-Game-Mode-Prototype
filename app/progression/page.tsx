import { Navigation } from "@/components/navigation"
import { ProgressionDashboard } from "@/components/progression-dashboard"

export default function ProgressionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ProgressionDashboard />
      </main>
    </div>
  )
}
