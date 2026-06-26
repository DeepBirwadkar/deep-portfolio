import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="font-display text-lg font-bold mb-1">
              <span className="gradient-text-accent">Deep</span>
              <span className="text-white/30">.</span>
            </div>
            <div className="text-white/25 text-xs">Full Stack Developer & AI Enthusiast</div>
          </div>

          <div className="text-white/25 text-xs text-center">
            Designed & Built by{' '}
            <span className="text-accent-light font-semibold">Deep Birwadkar</span>
            {' '}· {year} · Made with ❤️ and ☕
          </div>

          <motion.a
            href="#hero"
            whileHover={{ y: -2 }}
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-accent/30 transition-all"
          >
            ↑
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
