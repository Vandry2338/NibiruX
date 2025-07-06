"use client"

import { useRouter } from "next/navigation"
import HeroSection from "@/components/hero-section"

export default function Home() {
  const router = useRouter();
  return (
    <HeroSection onNavigate={() => router.push("/client-hub")}/>
  );
}
