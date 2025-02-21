"use client"

import Link from "next/link"
import {
  MountainIcon,
  SearchIcon,
  PlusCircleIcon,
  UsersIcon,
  BookOpenIcon,
  ShareIcon,
  RocketIcon,
  CheckCircleIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AuthButton from "./auth-button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">AI Collab Hub</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#benefits">
            Benefits
          </Link>
          <AuthButton />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Collaborate on AI Innovation
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join the global community of AI researchers and developers. Collaborate, innovate, and accelerate AI
                  progress together.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
                <AuthButton />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Platform Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <SearchIcon className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Discover Projects</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Search for new topics and projects related to AI and ML
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <PlusCircleIcon className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Initiate Projects</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Start and manage your own open-source AI projects
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <UsersIcon className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Collaborate</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Join ongoing projects and collaborate with researchers worldwide
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <BookOpenIcon className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Access Resources</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Get information on selected topics, including research papers
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <ShareIcon className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Share Knowledge</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Contribute your expertise and learn from others in the community
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <RocketIcon className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Accelerate Innovation</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Pool resources and ideas to drive AI innovation forward
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Benefits of Collaboration
            </h2>
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="flex flex-col space-y-2">
                <CheckCircleIcon className="h-8 w-8 mb-2 text-green-500" />
                <h3 className="text-xl font-bold">Accelerated Research</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Combine efforts to solve complex AI challenges faster
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <CheckCircleIcon className="h-8 w-8 mb-2 text-green-500" />
                <h3 className="text-xl font-bold">Knowledge Sharing</h3>
                <p className="text-gray-500 dark:text-gray-400">Learn from experts and share your own insights</p>
              </div>
              <div className="flex flex-col space-y-2">
                <CheckCircleIcon className="h-8 w-8 mb-2 text-green-500" />
                <h3 className="text-xl font-bold">Resource Optimization</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Pool computational resources and datasets for better results
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <CheckCircleIcon className="h-8 w-8 mb-2 text-green-500" />
                <h3 className="text-xl font-bold">Career Growth</h3>
                <p className="text-gray-500 dark:text-gray-400">Expand your network and showcase your contributions</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AI Collab Hub. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

