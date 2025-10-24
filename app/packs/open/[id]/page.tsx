import { Navigation } from "@/components/navigation"
import { PackOpening } from "@/components/pack-opening"

export default function PackOpeningPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <PackOpening packId={params.id} />
      </main>
    </div>
  )
}
