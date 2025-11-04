import { createFileRoute } from "@tanstack/react-router"
import Welcome from "./-components/index/Welcome"

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
