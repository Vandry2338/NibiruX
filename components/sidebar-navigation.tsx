"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search, Brain, FileText, BarChart3, Route, Settings, HelpCircle, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { NibiruXLogo } from "./nibirux-logo"

const navigationItems = [
  {
    id: "client-hub",
    name: "Client Hub",
    icon: Search,
    active: false,
    subItems: [{ id: "client-selection", name: "Client Selection", active: false }],
  },
  {
    id: "intelligence",
    name: "Intelligence Cortex",
    icon: Brain,
    active: true,
    subItems: [
      { id: "intelligence-synthesis", name: "Live Intelligence Synthesis", active: true },
      { id: "intelligence-business-view", name: "Business Intelligence Dashboard", active: false },
      { id: "competitive-intelligence", name: "Competitive Intelligence", active: false },
      { id: "market-trends", name: "Market Trends", active: false },
      { id: "regulatory-requirements", name: "Regulatory Requirements", active: false },
      { id: "strategic-focus-areas", name: "Strategic Focus Areas", active: false },
      { id: "pain-point-canvas", name: "Business Challenge Assessment", active: false },
      { id: "pain-point-summary", name: "Challenge Analysis Report", active: false },
    ],
  },
  {
    id: "blueprint",
    name: "Transformation Blueprint",
    icon: FileText,
    active: false,
    subItems: [{ id: "blueprint-assessment", name: "Current State Assessment", active: false }],
  },
  {
    id: "dashboard",
    name: "Value Discovery Dashboard",
    icon: BarChart3,
    active: false,
    subItems: [
      { id: "dashboard-executive", name: "Executive Dashboard", active: false },
      { id: "dashboard-value-chain", name: "Customer Value Chain", active: false },
      { id: "dashboard-ai-navigator", name: "AI Solutions Navigator", active: false },
    ],
  },
  {
    id: "solution-explorer",
    name: "Solution Explorer",
    icon: BarChart3,
    active: false,
    subItems: [],
  },
  {
    id: "roadmap",
    name: "Roadmap",
    icon: Route,
    active: false,
    subItems: [
      { id: "roadmap-timeline", name: "Project Timeline", active: false },
      { id: "roadmap-milestones", name: "Key Milestones", active: false },
      { id: "roadmap-tracking", name: "Progress Tracking", active: false },
    ],
  },
  {
    id: "settings",
    name: "Settings",
    icon: Settings,
    active: false,
    subItems: [
      { id: "settings-profile", name: "User Profile", active: false },
      { id: "settings-preferences", name: "Preferences", active: false },
      { id: "settings-integrations", name: "Integrations", active: false },
    ],
  },
  {
    id: "help",
    name: "Help & Support",
    icon: HelpCircle,
    active: false,
    subItems: [
      { id: "help-documentation", name: "Documentation", active: false },
      { id: "help-tutorials", name: "Tutorials", active: false },
      { id: "help-contact", name: "Contact Support", active: false },
    ],
  },
]

interface SidebarNavigationProps {
  children: React.ReactNode
  currentPage: string
  onPageChange: (pageId: string) => void
}

export function SidebarNavigation({ children, currentPage, onPageChange }: SidebarNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>(["intelligence"]) // Default expand intelligence

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  const handleNavClick = (pageId: string, isSubItem = false) => {
    onPageChange(pageId)

    // If it's a main section click, expand it
    if (!isSubItem) {
      toggleSection(pageId)
    } else {
      // If it's a sub-item, make sure parent is expanded
      const parentSection = navigationItems.find((item) => item.subItems?.some((sub) => sub.id === pageId))
      if (parentSection && !expandedSections.includes(parentSection.id)) {
        setExpandedSections((prev) => [...prev, parentSection.id])
      }
      setIsOpen(false) // Close sidebar after sub-item selection
    }
  }

  const getCurrentPageInfo = () => {
    for (const item of navigationItems) {
      if (item.id === currentPage) {
        return { main: item.name, sub: null }
      }
      const subItem = item.subItems?.find((sub) => sub.id === currentPage)
      if (subItem) {
        return { main: item.name, sub: subItem.name }
      }
    }
    return { main: "NibiruX", sub: null }
  }

  const pageInfo = getCurrentPageInfo()

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Left Side - Burger Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="h-10 w-10 hover:bg-muted transition-colors"
            >
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
              <span className="sr-only">Toggle navigation</span>
            </Button>

            {/* Current Page Title */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold text-foreground">{pageInfo.main}</h1>
                {pageInfo.sub && <p className="text-sm text-muted-foreground">{pageInfo.sub}</p>}
              </div>
            </div>
          </div>

          {/* Right Side - Logo when sidebar is closed */}
          <div className="flex items-center gap-4">
            <div className="scale-50 origin-right">
              <NibiruXLogo />
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 z-40 h-full w-80 bg-slate-900 text-white shadow-2xl"
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="scale-75 origin-left">
                  <NibiruXLogo />
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="h-8 w-8 text-white hover:bg-slate-800"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon
                  const isMainActive = currentPage === item.id
                  const hasActiveSubItem = item.subItems?.some((sub) => sub.id === currentPage)
                  const isExpanded = expandedSections.includes(item.id)
                  const shouldShowAsActive = isMainActive || hasActiveSubItem

                  return (
                    <li key={item.id}>
                      {/* Main Navigation Item */}
                      <motion.button
                        onClick={() => handleNavClick(item.id, false)}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 group",
                          shouldShowAsActive
                            ? "bg-primary text-white shadow-lg"
                            : "text-slate-300 hover:bg-slate-800 hover:text-white",
                        )}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <IconComponent className="h-5 w-5 flex-shrink-0" />
                        <span className="font-medium truncate flex-1">{item.name}</span>
                        {item.subItems && (
                          <motion.div animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronRight className="h-4 w-4" />
                          </motion.div>
                        )}
                        {shouldShowAsActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="w-2 h-2 bg-white rounded-full"
                            initial={false}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          />
                        )}
                      </motion.button>

                      {/* Sub Navigation Items */}
                      <AnimatePresence>
                        {item.subItems && isExpanded && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="ml-8 mt-2 space-y-1 overflow-hidden"
                          >
                            {item.subItems.map((subItem) => {
                              const isSubActive = currentPage === subItem.id

                              return (
                                <motion.li key={subItem.id}>
                                  <motion.button
                                    onClick={() => handleNavClick(subItem.id, true)}
                                    className={cn(
                                      "w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-all duration-200 text-sm",
                                      isSubActive
                                        ? "bg-secondary text-white shadow-md"
                                        : "text-slate-400 hover:bg-slate-800 hover:text-white",
                                    )}
                                    whileHover={{ x: 2 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    <div
                                      className={cn(
                                        "w-2 h-2 rounded-full flex-shrink-0",
                                        isSubActive ? "bg-white" : "bg-slate-500",
                                      )}
                                    />
                                    <span className="truncate">{subItem.name}</span>
                                    {isSubActive && (
                                      <motion.div
                                        layoutId="activeSubIndicator"
                                        className="w-1.5 h-1.5 bg-white rounded-full ml-auto"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                      />
                                    )}
                                  </motion.button>
                                </motion.li>
                              )
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-slate-700">
              <div className="text-xs text-slate-400 text-center">NibiruX Platform v2.0</div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content Area - Only shows current page */}
      <main className="pt-16 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
