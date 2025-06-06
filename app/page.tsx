"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"

export default function Component() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const links = [
    {
      name: "زين الكويت  ",
      href: "#",
      color: "from-green-700 green-900",
      hoverColor: "from-green-700 to-green-900",
    },
    {
      name: "اس تي سي الكويت",
      href: "#",
      color: "from-purple-600 to-purple-800",
      hoverColor: "from-purple-700 to-purple-900",
    },
    {
      name: "اوريدو ",
      href: "#",
      color: "from-red-600 to-red-800",
      hoverColor: "from-red-500 to-red-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg animate-fade-in-delay">اشحن خطك و تصفح اخر العروض</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <div key={link.name} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <a
                href={link.href}
                className={`
                  group relative block p-8 rounded-2xl shadow-lg transition-all duration-500 ease-out
                  bg-gradient-to-br ${hoveredLink === link.name ? link.hoverColor : link.color}
                  hover:shadow-2xl hover:scale-105 transform
                  border border-white/90 backdrop-blur-lg
                `}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{link.name}</h3>
                    <ExternalLink
                      className={`
                        w-6 h-6 text-white/80 transition-all duration-300
                        ${hoveredLink === link.name ? "rotate-45 scale-110" : ""}
                      `}
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                      <div
                        className={`
                          h-full bg-white rounded-full transition-all duration-1000 ease-out
                          ${hoveredLink === link.name ? "w-full" : "w-0"}
                        `}
                      />
                    </div>

                    <p className="text-white/90 text-sm">  اضغط لأستكشاف  {link.name} </p>
                  </div>
                </div>

                {/* Animated background overlay */}
                <div
                  className={`
                  absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
                  bg-gradient-to-br from-white/10 to-transparent
                  ${hoveredLink === link.name ? "opacity-100" : ""}
                `}
                />

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`
                        absolute w-2 h-2 bg-white/20 rounded-full
                        transition-all duration-1000 ease-out
                        ${hoveredLink === link.name ? "animate-float" : "opacity-0"}
                      `}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                  ))}
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-500 animate-pulse">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          </div>
        </div>
      </div>
    </div>
  )
}
