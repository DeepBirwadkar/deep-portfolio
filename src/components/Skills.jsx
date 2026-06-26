import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '../data'

const categories = [
  { label: 'All', icon: '🧩' },
  { label: 'Frontend', icon: '🎨' },
  { label: 'Backend', icon: '⚙️' },
  { label: 'Tools', icon: '🛠️' },
  { label: 'AI', icon: '🤖' },
  { label: 'Soft Skills', icon: '🤝' },
]

function SkillCard({ skill, index, inView }) {
  const isSoft = skill.category === 'Soft Skills'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22,1,0.36,1] }}
      whileHover={{ y: -5, scale: 1.04 }}
      className="group relative p-4 rounded-2xl bg-[#1c1c28] border border-white/6 hover:border-accent/40 transition-all duration-300 cursor-default overflow-hidden"
    >
      {/* Hover glow bg */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${skill.color}18, transparent 70%)` }}
      />

      {/* Top border accent on hover */}
      <div
        className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
        style={{ background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)` }}
      />

      <div className="relative flex flex-col items-center text-center gap-2">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-1 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}25` }}
        >
          {skill.icon}
        </div>

        {/* Name */}
        <div className="font-semibold text-white/70 text-xs group-hover:text-white transition-colors leading-tight">
          {skill.name}
        </div>

        {/* Progress bar for tech skills */}
        {!isSoft && (
          <div className="w-full">
            <div className="h-1 rounded-full bg-white/5 overflow-hidden w-full">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1.2, delay: 0.3 + index * 0.04, ease: [0.22,1,0.36,1] }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
              />
            </div>
            <div className="text-[10px] text-white/20 font-mono mt-1">{skill.level}%</div>
          </div>
        )}

        {/* Dot indicators for soft skills */}
        {isSoft && (
          <div className="flex gap-1 justify-center mt-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.04 + i * 0.07 }}
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: i < Math.round(skill.level / 20)
                    ? skill.color
                    : 'rgba(255,255,255,0.08)'
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  return (
    <section id="skills" ref={ref} className="py-28 bg-[#0a0a0f] relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-accent/4 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">What I Use</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 tracking-tight">Tech Stack</h2>
          <div className="mt-4 w-12 h-0.5 rounded-full bg-gradient-to-r from-accent to-pink-500" />
          <p className="text-white/40 text-sm mt-3 max-w-md">
            Tools and technologies I use to build fast, scalable, and intelligent products.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                activeCategory === cat.label
                  ? 'bg-accent text-white shadow-lg shadow-accent/30 scale-105'
                  : 'bg-white/5 text-white/40 hover:text-white hover:bg-white/10 border border-white/8'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
              {activeCategory === cat.label && (
                <span className="ml-1 bg-white/20 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                  {cat.label === 'All' ? skills.length : skills.filter(s => s.category === cat.label).length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#1c1c28] via-[#1e1e2e] to-[#1c1c28] border border-white/6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
        >
          {[
            { n: '12', l: 'Skills', icon: '⚡', color: '#7C6FFF' },
            { n: '3',   l: 'Projects Shipped', icon: '🚀', color: '#4ADE80' },
            { n: '2+',  l: 'Years Coding', icon: '💻', color: '#22D3EE' },
            { n: '∞',   l: 'Still Learning', icon: '📚', color: '#F472B6' },
          ].map(s => (
            <div key={s.l} className="flex flex-col items-center gap-1 group cursor-default">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{s.icon}</span>
              <span
                className="font-display text-2xl font-bold"
                style={{ color: s.color }}
              >
                {s.n}
              </span>
              <span className="text-white/30 text-xs font-medium">{s.l}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}