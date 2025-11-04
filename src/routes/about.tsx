import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about")({
  component: Home,
})

function Home() {
  return (
    <div className="p-2">
      <h3>About</h3>
    </div>
  )
}
