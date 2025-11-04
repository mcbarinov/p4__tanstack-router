import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_auth/forums")({
  component: Forums,
})

function Forums() {
  return <div>Forums...</div>
}
