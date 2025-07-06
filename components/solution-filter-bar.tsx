import React, { useState } from 'react';
import { Search, Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from '../lib/utils';

interface FilterBarProps {
  filters: {
    industries: string[];
    valueChainBlocks: string[];
    solutionTypes: string[];
    sapProducts: string[];
    tags: string[];
    videoOnly: boolean;
    newFeatured: boolean;
    search: string;
  };
  onFiltersChange: (filters: any) => void;
  availableOptions: {
    industries: string[];
    valueChainBlocks: string[];
    solutionTypes: string[];
    sapProducts: string[];
    tags: string[];
  };
}

export const SolutionFilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFiltersChange,
  availableOptions
}) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const updateFilter = (filterType: keyof typeof filters, value: any) => {
    onFiltersChange({
      ...filters,
      [filterType]: value
    });
  };

  const toggleArrayFilter = (filterType: 'industries' | 'valueChainBlocks' | 'solutionTypes' | 'sapProducts' | 'tags', item: string) => {
    const currentArray = filters[filterType];
    const newArray = currentArray.includes(item)
      ? currentArray.filter(i => i !== item)
      : [...currentArray, item];
    updateFilter(filterType, newArray);
  };

  const clearFilter = (filterType: keyof typeof filters) => {
    if (Array.isArray(filters[filterType])) {
      updateFilter(filterType, []);
    } else if (typeof filters[filterType] === 'boolean') {
      updateFilter(filterType, false);
    } else {
      updateFilter(filterType, '');
    }
  };

  const clearAllFilters = () => {
    onFiltersChange({
      industries: [],
      valueChainBlocks: [],
      solutionTypes: [],
      sapProducts: [],
      tags: [],
      videoOnly: false,
      newFeatured: false,
      search: ''
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => 
    (Array.isArray(value) && value.length > 0) || 
    (typeof value === 'boolean' && value) || 
    (typeof value === 'string' && value.length > 0)
  );

  return (
    <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Main Filter Row */}
        <div className="flex items-center gap-4 flex-wrap">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search solutions..."
              value={filters.search}
              onChange={(e) => updateFilter('search', e.target.value)}
              className="pl-10 bg-gray-50 border-gray-200 focus:border-[#007CC2] focus:ring-[#007CC2]"
            />
          </div>

          {/* Filter Toggles */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Switch
                id="video-only"
                checked={filters.videoOnly}
                onCheckedChange={(checked) => updateFilter('videoOnly', checked)}
              />
              <Label htmlFor="video-only" className="text-sm font-medium text-gray-700">
                Video/Demo Only
              </Label>
            </div>

            <div className="flex items-center gap-2">
              <Switch
                id="new-featured"
                checked={filters.newFeatured}
                onCheckedChange={(checked) => updateFilter('newFeatured', checked)}
              />
              <Label htmlFor="new-featured" className="text-sm font-medium text-gray-700">
                New/Featured
              </Label>
            </div>

            {hasActiveFilters && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearAllFilters}
                className="text-gray-600 hover:text-gray-800"
              >
                <X size={16} className="mr-1" />
                Clear All
              </Button>
            )}
          </div>
        </div>

        {/* Filter Sections */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Industry Filter */}
          <div className="space-y-2">
            <button
              onClick={() => toggleSection('industry')}
              className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Industry ({filters.industries.length})
              {expandedSections.industry ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {expandedSections.industry && (
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {availableOptions.industries.map((industry) => (
                  <label key={industry} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={filters.industries.includes(industry)}
                      onChange={() => toggleArrayFilter('industries', industry)}
                      className="rounded border-gray-300 text-[#007CC2] focus:ring-[#007CC2]"
                    />
                    {industry}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Value Chain Block Filter */}
          <div className="space-y-2">
            <button
              onClick={() => toggleSection('valueChain')}
              className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Value Chain Block ({filters.valueChainBlocks.length})
              {expandedSections.valueChain ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {expandedSections.valueChain && (
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {availableOptions.valueChainBlocks.map((block) => (
                  <label key={block} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={filters.valueChainBlocks.includes(block)}
                      onChange={() => toggleArrayFilter('valueChainBlocks', block)}
                      className="rounded border-gray-300 text-[#007CC2] focus:ring-[#007CC2]"
                    />
                    {block}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Solution Type Filter */}
          <div className="space-y-2">
            <button
              onClick={() => toggleSection('solutionType')}
              className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Solution Type ({filters.solutionTypes.length})
              {expandedSections.solutionType ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {expandedSections.solutionType && (
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {availableOptions.solutionTypes.map((type) => (
                  <label key={type} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={filters.solutionTypes.includes(type)}
                      onChange={() => toggleArrayFilter('solutionTypes', type)}
                      className="rounded border-gray-300 text-[#007CC2] focus:ring-[#007CC2]"
                    />
                    {type}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* SAP Product/Platform Filter */}
          <div className="space-y-2">
            <button
              onClick={() => toggleSection('sapProduct')}
              className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              SAP Product/Platform ({filters.sapProducts.length})
              {expandedSections.sapProduct ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {expandedSections.sapProduct && (
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {availableOptions.sapProducts.map((product) => (
                  <label key={product} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={filters.sapProducts.includes(product)}
                      onChange={() => toggleArrayFilter('sapProducts', product)}
                      className="rounded border-gray-300 text-[#007CC2] focus:ring-[#007CC2]"
                    />
                    {product}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Tags Filter */}
        <div className="mt-4">
          <button
            onClick={() => toggleSection('tags')}
            className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Tags ({filters.tags.length})
            {expandedSections.tags ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {expandedSections.tags && (
            <div className="mt-2 flex flex-wrap gap-2">
              {availableOptions.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant={filters.tags.includes(tag) ? "default" : "outline"}
                  className={cn(
                    "cursor-pointer hover:bg-[#007CC2] hover:text-white transition-colors",
                    filters.tags.includes(tag) 
                      ? "bg-[#007CC2] text-white" 
                      : "bg-gray-100 text-gray-700 border-gray-300"
                  )}
                  onClick={() => toggleArrayFilter('tags', tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {filters.industries.map((industry) => (
                <Badge key={industry} variant="secondary" className="bg-blue-100 text-blue-800">
                  Industry: {industry}
                  <X size={12} className="ml-1 cursor-pointer" onClick={() => toggleArrayFilter('industries', industry)} />
                </Badge>
              ))}
              {filters.valueChainBlocks.map((block) => (
                <Badge key={block} variant="secondary" className="bg-green-100 text-green-800">
                  Value Chain: {block}
                  <X size={12} className="ml-1 cursor-pointer" onClick={() => toggleArrayFilter('valueChainBlocks', block)} />
                </Badge>
              ))}
              {filters.solutionTypes.map((type) => (
                <Badge key={type} variant="secondary" className="bg-purple-100 text-purple-800">
                  Type: {type}
                  <X size={12} className="ml-1 cursor-pointer" onClick={() => toggleArrayFilter('solutionTypes', type)} />
                </Badge>
              ))}
              {filters.sapProducts.map((product) => (
                <Badge key={product} variant="secondary" className="bg-orange-100 text-orange-800">
                  SAP: {product}
                  <X size={12} className="ml-1 cursor-pointer" onClick={() => toggleArrayFilter('sapProducts', product)} />
                </Badge>
              ))}
              {filters.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-800">
                  Tag: {tag}
                  <X size={12} className="ml-1 cursor-pointer" onClick={() => toggleArrayFilter('tags', tag)} />
                </Badge>
              ))}
              {filters.videoOnly && (
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Video Only
                  <X size={12} className="ml-1 cursor-pointer" onClick={() => clearFilter('videoOnly')} />
                </Badge>
              )}
              {filters.newFeatured && (
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  New/Featured
                  <X size={12} className="ml-1 cursor-pointer" onClick={() => clearFilter('newFeatured')} />
                </Badge>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 