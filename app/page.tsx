import type { Metadata } from "next"
import HomePage from "./home-page"

export const metadata: Metadata = {
  title: "AI Collab Hub",
  description: "Collaborate on AI Innovation with researchers and developers worldwide",
}

export default function Home() {
  return (
    <div>
      <HomePage />
      <iframe
        src="https://umarbalak-collabai.hf.space"
        width="100%"
        height="500px"
        style={{ border: "none", marginTop: "20px" }}
        title="Chatbot"
      ></iframe>
    </div>
  )
}