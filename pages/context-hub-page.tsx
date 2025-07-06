import ContextHub from "@/components/context-hub"

interface ContextHubPageProps {
  onNavigate: (page: string) => void;
}

export default function ContextHubPage({ onNavigate }: ContextHubPageProps) {
  return <ContextHub selectedClient="" onClientChange={() => {}} />
} 