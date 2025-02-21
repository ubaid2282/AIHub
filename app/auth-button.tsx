"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function AuthButton() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleAuth = () => {
    // Here you would implement the GitHub OAuth flow
    // For now, we'll just toggle the state
    setIsAuthenticated(!isAuthenticated)
  }

  return (
    <Button onClick={handleAuth} variant="outline">
      <Github className="mr-2 h-4 w-4" />
      {isAuthenticated ? "Sign Out" : "Sign In with GitHub"}
    </Button>
  )
}

