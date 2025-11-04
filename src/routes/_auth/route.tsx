import { createFileRoute, Outlet } from "@tanstack/react-router"
import Header from "./-components/Header"
import Footer from "./-components/Footer"

export const Route = createFileRoute("/_auth")({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <div>
      <Header />

      <Outlet />
      <Footer />
    </div>
  )
}
