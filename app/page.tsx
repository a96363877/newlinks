"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Zap, Star, Sparkles } from "lucide-react"

export default function Component() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const links = [
    {
      name: "Zian",
      href: "#",
      color: "from-blue-600 to-blue-800",
      hoverColor: "from-blue-700 to-blue-900",
      icon: Zap,
    },
    {
      name: "STC",
      href: "#",
      color: "from-purple-600 to-purple-800",
      hoverColor: "from-purple-700 to-purple-900",
      icon: Star,
    },
    {
      name: "Ooredoo KW",
      href: "#",
      color: "from-red-600 to-red-800",
      hoverColor: "from-red-700 to-red-900",
      icon: Sparkles,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center p-8 animate-gradient-shift" dir="rtl">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          
          <p className="text-gray-600 text-lg animate-fade-in-delay animate-pulse-slow">اشحن خطك او تصفح اخر العروض</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {links.map((link, index) => {
            const IconComponent = link.icon
            return (
              <div
                key={link.name}
                className="animate-slide-up animate-float-continuous"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: `${3 + index * 0.5}s`,
                }}
              >
                <a
                  href={link.href}
                  className={`
                    group relative block p-8 rounded-2xl shadow-lg transition-all duration-500 ease-out
                    bg-gradient-to-br ${hoveredLink === link.name ? link.hoverColor : link.color}
                    hover:shadow-2xl hover:scale-105 transform animate-subtle-pulse
                    border border-white/20 backdrop-blur-sm overflow-hidden
                  `}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{ animationDelay: `${index * 0.8}s` }}
                >
                  {/* Animated background waves */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-wave-slide" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent animate-wave-slide-reverse" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-8 h-8 text-white animate-spin-slow" />
                        <h3 className="text-2xl font-bold text-white animate-text-glow">{link.name}</h3>
                      </div>
                      <ExternalLink
                        className={`
                          w-6 h-6 text-white/80 transition-all duration-300 animate-bounce-subtle
                          ${hoveredLink === link.name ? "rotate-45 scale-110" : ""}
                        `}
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                        <div className="h-full bg-white rounded-full animate-progress-loop" />
                      </div>

                      <p className="text-white/90 text-sm animate-fade-in-out">Click to explore {link.name} services</p>
                    </div>
                  </div>

                  {/* Always active floating particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full animate-float-particles"
                        style={{
                          left: `${10 + i * 20}%`,
                          top: `${20 + i * 15}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: `${2 + i * 0.3}s`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Rotating border effect */}
                  <div className="absolute inset-0 rounded-2xl">
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/20 animate-rotate-border" />
                  </div>

                  {/* Pulsing glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur-sm animate-pulse-glow" />
                </a>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-500">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce-sequence"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Background animated elements */}
        {mounted && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full animate-float-background"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: `${4 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
