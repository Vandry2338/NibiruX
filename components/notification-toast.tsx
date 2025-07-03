"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Toast {
  id: string
  type: "success" | "error" | "info" | "warning"
  title: string
  message?: string
  duration?: number
}

interface NotificationToastProps {
  toasts: Toast[]
  onRemove: (id: string) => void
}

export function NotificationToast({ toasts, onRemove }: NotificationToastProps) {
  const getIcon = (type: Toast["type"]) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />
    }
  }

  const getColors = (type: Toast["type"]) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200 text-green-800"
      case "error":
        return "bg-red-50 border-red-200 text-red-800"
      case "warning":
        return "bg-yellow-50 border-yellow-200 text-yellow-800"
      case "info":
        return "bg-blue-50 border-blue-200 text-blue-800"
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} getIcon={getIcon} getColors={getColors} />
        ))}
      </AnimatePresence>
    </div>
  )
}

function ToastItem({
  toast,
  onRemove,
  getIcon,
  getColors,
}: {
  toast: Toast
  onRemove: (id: string) => void
  getIcon: (type: Toast["type"]) => JSX.Element
  getColors: (type: Toast["type"]) => string
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(toast.id)
    }, toast.duration || 5000)

    return () => clearTimeout(timer)
  }, [toast.id, toast.duration, onRemove])

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.8 }}
      transition={{ duration: 0.3, type: "spring" }}
      className={`max-w-sm w-full border rounded-lg shadow-lg p-4 ${getColors(toast.type)}`}
    >
      <div className="flex items-start gap-3">
        {getIcon(toast.type)}
        <div className="flex-1">
          <h3 className="font-semibold text-sm">{toast.title}</h3>
          {toast.message && <p className="text-sm opacity-90 mt-1">{toast.message}</p>}
        </div>
        <Button variant="ghost" size="sm" onClick={() => onRemove(toast.id)} className="h-6 w-6 p-0 hover:bg-black/10">
          <X className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}

// Hook for managing toasts
export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prev) => [...prev, { ...toast, id }])
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return {
    toasts,
    addToast,
    removeToast,
    success: (title: string, message?: string) => addToast({ type: "success", title, message }),
    error: (title: string, message?: string) => addToast({ type: "error", title, message }),
    info: (title: string, message?: string) => addToast({ type: "info", title, message }),
    warning: (title: string, message?: string) => addToast({ type: "warning", title, message }),
  }
}
