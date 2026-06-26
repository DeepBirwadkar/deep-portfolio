import React from 'react'
import { motion } from 'framer-motion'
import { education, certifications } from '../data'

export default function Education() {
  return (
    <section id="education" className="py-28 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Background glows */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[300px] h-[300px] rounded-full bg-pink-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">My Journey</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 tracking-tight">Education</h2>
          <div className="mt-4 w-12 h-0.5 rounded-full bg-gradient-to-r from-accent to-pink-500" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Timeline */}
          <div>
            <div className="relative pl-10">
              {/* Gradient line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-pink-500 to-transparent" />

              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22,1,0.36,1] }}
                  className={`relative ${i !== education.length - 1 ? 'mb-10' : ''}`}
                >
                  {/* Animated dot */}
                  <div className="absolute -left-[2.6rem] top-2 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-accent border-2 border-[#0a0a0f] shadow-lg shadow-accent/50 timeline-dot-pulse z-10" />
                    <div className="absolute w-8 h-8 rounded-full bg-accent/20 animate-ping" style={{ animationDuration: '2s' }} />
                  </div>

                  <div className="text-xs font-bold tracking-wider uppercase text-accent mb-2 flex items-center gap-2">
                    <span>{edu.year}</span>
                  </div>

                  {/* 3D Card */}
                  <motion.div
                    whileHover={{
                      y: -6,
                      rotateX: 2,
                      rotateY: -2,
                      boxShadow: '0 20px 40px rgba(124,111,255,0.15)',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="p-5 rounded-2xl bg-[#1c1c28] border border-white/6 hover:border-accent/30 transition-colors group cursor-default"
                    style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                  >
                    {/* Top accent line */}
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                        🎓
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-white text-base group-hover:text-accent-light transition-colors">{edu.degree}</h3>
                        <div className="text-accent-light text-xs font-semibold mt-0.5">{edu.institution}</div>
                      </div>
                    </div>

                    <div className="text-white/30 text-xs mb-3 flex items-center gap-1.5">
                      <span>📍</span> {edu.location}
                    </div>

                    <p className="text-white/40 text-xs leading-relaxed mb-3">{edu.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="inline-flex px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent-lighter text-xs font-semibold">
                        {edu.grade}
                      </div>
                      <div className="text-white/20 text-xs font-mono">{edu.year}</div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-2"
            >
              <span className="text-2xl">📜</span> Certifications
            </motion.h3>

            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{
                    x: 6,
                    scale: 1.02,
                    boxShadow: '0 8px 24px rgba(124,111,255,0.12)',
                  }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#1c1c28] border border-white/6 hover:border-accent/25 transition-all group cursor-default relative overflow-hidden"
                >
                  {/* Hover bg */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 group-hover:bg-accent/20 transition-all relative z-10">
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0 relative z-10">
                    <div className="text-white text-sm font-semibold truncate group-hover:text-accent-light transition-colors">{cert.name}</div>
                    <div className="text-white/30 text-xs mt-0.5">{cert.issuer} · {cert.year}</div>
                  </div>
                  <svg className="w-4 h-4 text-white/15 group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </motion.div>
              ))}
            </div>

            {/* Achievement card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -4, boxShadow: '0 16px 32px rgba(124,111,255,0.15)' }}
              className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-accent/10 via-purple-500/5 to-pink-500/5 border border-accent/20 relative overflow-hidden cursor-default"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/15 border border-yellow-500/25 flex items-center justify-center text-xl">
                  🏆
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Elite Forums 2026</h4>
                  <div className="text-yellow-400/70 text-xs font-semibold">Achievement</div>
                </div>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">
                Showcased skillbridge ai — a visual AI automation SaaS concept — receiving recognition for innovation and UI design at the 2026 showcase event.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}