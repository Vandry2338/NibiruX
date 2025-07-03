"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, X, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface FilterOption {
  id: string
  label: string
  count?: number
}

interface FilterGroup {
  id: string
  label: string
  options: FilterOption[]
  multiSelect?: boolean
}

interface SearchFilterProps {
  searchPlaceholder?: string
  filterGroups?: FilterGroup[]
  onSearchChange?: (query: string) => void
  onFilterChange?: (filters: Record<string, string[]>) => void
  className?: string
}

export function SearchFilter({
  searchPlaceholder = "Search...",
  filterGroups = [],
  onSearchChange,
  onFilterChange,
  className = "",
}: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})
  const [expandedGroups, setExpandedGroups] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    onSearchChange?.(value)
  }

  const handleFilterToggle = (groupId: string, optionId: string) => {
    const group = filterGroups.find((g) => g.id === groupId)
    if (!group) return

    setSelectedFilters((prev) => {
      const current = prev[groupId] || []
      let updated: string[]

      if (group.multiSelect) {
        updated = current.includes(optionId) ? current.filter((id) => id !== optionId) : [...current, optionId]
      } else {
        updated = current.includes(optionId) ? [] : [optionId]
      }

      const newFilters = { ...prev, [groupId]: updated }
      onFilterChange?.(newFilters)
      return newFilters
    })
  }

  const clearFilter = (groupId: string, optionId?: string) => {
    setSelectedFilters((prev) => {
      const current = prev[groupId] || []
      const updated = optionId ? current.filter((id) => id !== optionId) : []

      const newFilters = { ...prev, [groupId]: updated }
      onFilterChange?.(newFilters)
      return newFilters
    })
  }

  const clearAllFilters = () => {
    setSelectedFilters({})
    onFilterChange?.({})
  }

  const toggleGroupExpansion = (groupId: string) => {
    setExpandedGroups((prev) => (prev.includes(groupId) ? prev.filter((id) => id !== groupId) : [...prev, groupId]))
  }

  const getActiveFilterCount = () => {
    return Object.values(selectedFilters).reduce((sum, filters) => sum + filters.length, 0)
  }

  const getActiveFilterBadges = () => {
    const badges: { groupId: string; optionId: string; label: string }[] = []

    Object.entries(selectedFilters).forEach(([groupId, optionIds]) => {
      const group = filterGroups.find((g) => g.id === groupId)
      if (!group) return

      optionIds.forEach((optionId) => {
        const option = group.options.find((o) => o.id === optionId)
        if (option) {
          badges.push({
            groupId,
            optionId,
            label: `${group.label}: ${option.label}`,
          })
        }
      })
    })

    return badges
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="pl-10 pr-4"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleSearchChange("")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Filter Toggle */}
      {filterGroups.length > 0 && (
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
            {getActiveFilterCount() > 0 && (
              <Badge variant="secondary" className="ml-1">
                {getActiveFilterCount()}
              </Badge>
            )}
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </Button>

          {getActiveFilterCount() > 0 && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-slate-500 hover:text-slate-700">
              Clear all
            </Button>
          )}
        </div>
      )}

      {/* Active Filter Badges */}
      {getActiveFilterBadges().length > 0 && (
        <div className="flex flex-wrap gap-2">
          {getActiveFilterBadges().map((badge) => (
            <Badge key={`${badge.groupId}-${badge.optionId}`} variant="secondary" className="flex items-center gap-1">
              {badge.label}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => clearFilter(badge.groupId, badge.optionId)}
                className="h-4 w-4 p-0 hover:bg-slate-200"
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
      )}

      {/* Filter Panel */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-slate-200">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterGroups.map((group) => (
                  <div key={group.id} className="space-y-2">
                    <Button
                      variant="ghost"
                      onClick={() => toggleGroupExpansion(group.id)}
                      className="w-full justify-between p-2 h-auto"
                    >
                      <span className="font-medium text-slate-700">{group.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          expandedGroups.includes(group.id) ? "rotate-180" : ""
                        }`}
                      />
                    </Button>

                    {expandedGroups.includes(group.id) && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1 pl-2">
                        {group.options.map((option) => (
                          <label
                            key={option.id}
                            className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-1 rounded"
                          >
                            <input
                              type={group.multiSelect ? "checkbox" : "radio"}
                              name={group.id}
                              checked={(selectedFilters[group.id] || []).includes(option.id)}
                              onChange={() => handleFilterToggle(group.id, option.id)}
                              className="rounded border-slate-300"
                            />
                            <span className="text-sm text-slate-600 flex-1">{option.label}</span>
                            {option.count !== undefined && (
                              <Badge variant="outline" className="text-xs">
                                {option.count}
                              </Badge>
                            )}
                          </label>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
