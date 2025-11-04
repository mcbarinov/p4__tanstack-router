import { createFileRoute, Outlet } from "@tanstack/react-router"
import Header from "./-components/layout/Header"
import Footer from "./-components/layout/Footer"

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
