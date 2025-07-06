"use client"

import { useState } from "react"

import { SidebarNavigation } from "./sidebar-navigation"

import ContextHubPage from "@/pages/context-hub-page"
import TransformationBlueprintHub from "@/pages/transformation-blueprint-hub"
import ValueDiscoveryDashboard from "@/pages/value-discovery-dashboard"
import RoadmapPage from "@/pages/roadmap-page"
import ClientSelectionPage from "@/pages/client-selection-page"

import IntelligenceSynthesisPage from "@/pages/intelligence-synthesis-page"
import IntelligenceBusinessViewPage from "@/pages/intelligence-business-view-page"
import CompetitiveIntelligencePage from "@/pages/competitive-intelligence-page"
import MarketTrendsPage from "@/pages/market-trends-page"
import RegulatoryRequirementsPage from "@/pages/regulatory-requirements-page"
import StrategicFocusAreasPage from "@/pages/strategic-focus-areas-page"
import { InteractiveDiscoveryCanvasPage } from "@/pages/interactive-discovery-canvas-page"
import { PainPointCanvasPage } from "@/pages/pain-point-canvas-page"
import { PainPointSummaryPage } from "@/pages/pain-point-summary-page"
import BusinessChallengeAssessmentPage from "@/pages/business-challenge-assessment-page"

import AIUseCaseExplorer from "@/pages/ai-use-case-explorer"
import AIDeepDiveView from "@/pages/ai-deep-dive-view"
import AIVendorComparison from "@/pages/ai-vendor-comparison"
import SolutionExplorerPage from "../pages/solution-explorer"

const AppLayout = () => {
  const [currentPage, setCurrentPage] = useState("client-hub")
  const [selectedClient, setSelectedClient] = useState<string | null>(null)

  const renderCurrentPage = () => {
    switch (currentPage) {
      /* -------- Client Hub -------- */
      case "client-hub":
        return <ContextHubPage onNavigate={setCurrentPage} />

      case "client-selection":
        return <ClientSelectionPage selectedClient={selectedClient} onClientChange={setSelectedClient} />

      /* -------- Intelligence Cortex -------- */
      case "intelligence":
      case "intelligence-synthesis":
        return <IntelligenceSynthesisPage onNavigate={setCurrentPage} />

      case "intelligence-business-view":
        return <IntelligenceBusinessViewPage />

      case "competitive-intelligence":
        return <CompetitiveIntelligencePage />

      case "market-trends":
        return <MarketTrendsPage />

      case "regulatory-requirements":
        return <RegulatoryRequirementsPage />

      case "strategic-focus-areas":
        return <StrategicFocusAreasPage />

      case "interactive-discovery-canvas":
        return <InteractiveDiscoveryCanvasPage />

      case "pain-point-canvas":
        return <BusinessChallengeAssessmentPage />

      case "pain-point-summary":
        return <PainPointSummaryPage onNavigate={setCurrentPage} />

      /* -------- Transformation Blueprint -------- */
      case "blueprint":
      case "blueprint-assessment":
        return <TransformationBlueprintHub />

      /* -------- Value Discovery Dashboard -------- */
      case "dashboard":
      case "dashboard-value-chain":
        return <ValueDiscoveryDashboard activeSection="value-chain" />

      /* -------- Roadmap -------- */
      case "roadmap":
      case "roadmap-timeline":
      case "roadmap-milestones":
      case "roadmap-tracking":
        return <RoadmapPage />

      /* -------- AI Solutions Navigator -------- */
      case "ai-use-case-explorer":
        return (
          <AIUseCaseExplorer
            onNavigateToDeepDive={(id) => {
              setCurrentPage("ai-deep-dive-view")
              // Store the use case ID for the deep dive view
            }}
            onBack={() => setCurrentPage("dashboard")}
          />
        )

      case "ai-deep-dive-view":
        return (
          <AIDeepDiveView
            useCaseId="invoice-matching" // This would be dynamic based on selection
            onBack={() => setCurrentPage("ai-use-case-explorer")}
            onNavigateToComparison={(id) => setCurrentPage("ai-vendor-comparison")}
          />
        )

      case "ai-vendor-comparison":
        return (
          <AIVendorComparison
            useCaseId="invoice-matching" // This would be dynamic based on selection
            onBack={() => setCurrentPage("ai-deep-dive-view")}
          />
        )

      /* -------- Solution Explorer -------- */
      case "solution-explorer":
        return <SolutionExplorerPage />

      /* -------- Fallback -------- */
      default:
        return <ContextHubPage onNavigate={setCurrentPage} />
    }
  }

  return (
    <SidebarNavigation currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderCurrentPage()}
    </SidebarNavigation>
  )
}

export default AppLayout
