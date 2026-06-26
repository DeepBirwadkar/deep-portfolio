import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ROLES = ['Full Stack Developer', 'AI Enthusiast', 'React Engineer', 'Problem Solver']

function TypewriterText({ texts }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((index + 1) % texts.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, texts])

  return (
    <span className="gradient-text-accent typewriter">{displayed}</span>
  )
}

const floatingBadges = [
  { text: '⚛️ React.js', position: 'top-[12%] left-[5%]', delay: 0 },
  { text: '🤖 Groq AI', position: 'top-[18%] right-[3%]', delay: 0.3 },
  { text: '🔥 Supabase', position: 'bottom-[30%] left-[2%]', delay: 0.6 },
  { text: '⚡ Vite', position: 'bottom-[20%] right-[6%]', delay: 0.9 },
  { text: '🐍 Python', position: 'top-[45%] right-[0%]', delay: 1.2 },
]

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    let particles = []
    let animId

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(124,111,255,${p.alpha})`
        ctx.fill()
      })
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(124,111,255,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />

      {/* Radial glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-pink-500/6 blur-[100px]" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 z-0 grid-bg opacity-40" />

      {/* Floating badges */}
      {floatingBadges.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + b.delay, duration: 0.5 }}
          className={`absolute ${b.position} hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1c1c28]/80 border border-white/10 backdrop-blur-sm text-white/70 text-xs font-semibold z-10 animate-float`}
          style={{ animationDelay: `${b.delay}s` }}
        >
          {b.text}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent-light text-xs font-bold tracking-widest uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for Work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.22,1,0.36,1] }}
              className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight mb-4"
            >
              <span className="text-white">Hi, I'm</span><br />
              <span className="gradient-text">Deep Birwadkar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl text-white/50 font-medium mb-8 h-8"
            >
              <TypewriterText texts={ROLES} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-white/50 text-base leading-relaxed mb-10 max-w-lg"
            >
              Building fast, intelligent, and beautiful web experiences with React, Node.js, and cutting-edge AI tools. From idea to shipped product.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-accent font-semibold text-white text-sm btn-glow shadow-xl shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/15 text-white/80 text-sm font-semibold hover:border-accent/50 hover:text-white hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex gap-8"
            >
              {[
                { n: '10+', l: 'Projects Built' },
                { n: '8+', l: 'Technologies' },
                { n: '2026', l: 'Diploma Grad' },
              ].map(s => (
                <div key={s.l} className="border-l-2 border-accent/30 pl-4">
                  <div className="font-display text-2xl font-bold text-white">{s.n}</div>
                  <div className="text-xs text-white/40 font-medium">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Avatar orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22,1,0.36,1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[380px] h-[380px]">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-pink-500 to-cyan-400 opacity-20 blur-2xl animate-pulse-slow" />

              {/* Spinning gradient ring */}
              <div className="absolute inset-0 rounded-full p-[2px] animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-accent via-transparent to-pink-500" />
              </div>

              {/* Orbit dots */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[260px] h-[260px]">
                  <div className="absolute inset-0 rounded-full border border-accent/20" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0"
                  >
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/50" />
                  </motion.div>
                  <div className="absolute inset-6 rounded-full border border-pink-500/15" />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-6"
                  >
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-pink-400 shadow-lg shadow-pink-400/50" />
                  </motion.div>
                </div>
              </div>

              {/* Avatar center */}
              <div className="absolute inset-6 rounded-full bg-[#111118] border border-white/10 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="font-display text-6xl font-bold gradient-text leading-none">DB</div>
                  <div className="text-white/30 text-xs mt-2 font-mono">Deep Birwadkar</div>
                </div>
              </div>

              {/* Floating tech chips */}
              {[
                { text: 'React', top: '-8%', left: '15%', color: '#61DAFB' },
                { text: 'AI', top: '10%', right: '-5%', color: '#7C6FFF' },
                { text: 'Node', bottom: '8%', left: '-5%', color: '#4ADE80' },
                { text: 'Python', bottom: '-5%', right: '15%', color: '#FCD34D' },
              ].map((chip, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
                  className="absolute px-2.5 py-1 rounded-lg bg-[#1c1c28] border border-white/10 text-xs font-bold shadow-lg"
                  style={{ top: chip.top, left: chip.left, right: chip.right, bottom: chip.bottom, color: chip.color }}
                >
                  {chip.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/25 text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
