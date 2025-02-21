"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function AuthButton() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleAuth = () => {
    if (isAuthenticated) {
      // Handle sign out logic here if needed
      setIsAuthenticated(false)
    } else {
      // Redirect to your authentication API
      window.location.href = "https://gitauth-iza6.onrender.com/login"
    }
  }

  return (
    <Button onClick={handleAuth} variant="outline">
      <Github className="mr-2 h-4 w-4" />
      {isAuthenticated ? "Sign Out" : "Sign In with GitHub"}
    </Button>
  )
}