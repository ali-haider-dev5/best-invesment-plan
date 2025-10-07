'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    // Avoid rendering wrong icon before hydration
    return (
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm"
        aria-label="Toggle theme"
      >
        …
      </button>
    )
  }

  const isDark = resolvedTheme === 'dark'
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10
                 bg-white/70 dark:bg-black/30 backdrop-blur px-3 py-2 text-sm
                 hover:opacity-90 transition"
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
