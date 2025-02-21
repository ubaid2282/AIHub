import type { Metadata } from "next"
import HomePage from "./home-page"

export const metadata: Metadata = {
  title: "AI Collab Hub",
  description: "Collaborate on AI Innovation with researchers and developers worldwide",
}

export default function Home() {
  return <HomePage />
}

