"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

const AppHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-gray-100 py-4 px-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold text-blue-500">
          My App
        </h1>
        <div className="flex-1" />

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-4">
            <Link href="/" className="px-2 py-1 rounded-md hover:bg-gray-200">
              Home
            </Link>
            <Link href="/about" className="px-2 py-1 rounded-md hover:bg-gray-200">
              About
            </Link>
            <Button variant="outline">
              Tools
            </Button>
            <Button>
              Login
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Button
          variant="ghost"
          size="sm"
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link href="/" className="block px-2 py-1 rounded-md hover:bg-gray-200">
            Home
          </Link>
          <Link href="/about" className="block px-2 py-1 rounded-md hover:bg-gray-200">
            About
          </Link>
          <Link href="/business-challenge-assessment" className="block px-2 py-1 rounded-md hover:bg-gray-200">
            Business Challenge Assessment
          </Link>
          <Link href="/challenge-analysis-report" className="block px-2 py-1 rounded-md hover:bg-gray-200">
            Challenge Analysis Report
          </Link>
          <Button className="w-full mt-2">
            Login
          </Button>
        </div>
      )}
    </div>
  )
}

export default AppHeader
