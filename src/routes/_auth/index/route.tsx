import { createFileRoute } from "@tanstack/react-router"
import Welcome from "./-components/Welcome"

export const Route = createFileRoute("/_auth/")({
  component: Home,
})

function Home() {
  return (
    <div>
      <Welcome />
    </div>
  )
}
