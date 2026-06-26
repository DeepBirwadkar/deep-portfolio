import React from 'react'
import { motion } from 'framer-motion'

const traits = [
  { icon: '🚀', label: 'Fast Learner', desc: 'Picks up new tech quickly' },
  { icon: '💡', label: 'Problem Solver', desc: 'Analytical mindset' },
  { icon: '🤝', label: 'Team Player', desc: 'Collaboration-first' },
  { icon: '🎨', label: 'UI Focused', desc: 'Design-aware dev' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } },
}

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0d0d14] relative overflow-hidden">
      {/* bg accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
        >
          {/* Header */}
          <motion.div variants={item} className="mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">Who I Am</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 tracking-tight">About Me</h2>
            <div className="mt-4 w-12 h-0.5 rounded-full bg-gradient-to-r from-accent to-pink-500" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: text */}
            <div className="space-y-5">
              <motion.p variants={item} className="text-white/80 text-lg leading-relaxed">
                I'm a Diploma Engineering student (Sem IV, MSBTE K-Scheme) from Virar, Maharashtra — passionate about building fast, intelligent, and beautiful web applications.
              </motion.p>
              <motion.p variants={item} className="text-white/50 leading-relaxed">
                From full-stack e-commerce platforms like DeepCart to AI-powered pitch tools like SharkPitch, I love turning raw ideas into polished, shipped products. I blend modern frontend craft with backend logic and AI integrations.
              </motion.p>
              <motion.p variants={item} className="text-white/50 leading-relaxed">
                When I'm not coding, I'm building resources for fellow diploma students at <span className="text-accent-light font-medium">Deep Study Zone</span>, exploring new AI tools, and contributing to open-source.
              </motion.p>

              {/* Career objective card */}
              <motion.div
                variants={item}
                className="mt-8 p-6 rounded-2xl bg-accent/5 border border-accent/15 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-pink-500 rounded-l-2xl" />
                <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                  🎯 Career Objective
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  To work as a Full Stack Developer where I can build impactful products, grow in AI integration, and ship fast with great teams. Open to internships, freelance, and collaborative projects.
                </p>
              </motion.div>
            </div>

            {/* Right: trait grid + info */}
            <div>
              <motion.div variants={item} className="grid grid-cols-2 gap-3 mb-6">
                {traits.map(t => (
                  <motion.div
                    key={t.label}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="p-4 rounded-2xl bg-[#1c1c28] border border-white/6 hover:border-accent/25 transition-all duration-300 cursor-default group"
                  >
                    <div className="text-2xl mb-2">{t.icon}</div>
                    <div className="text-white text-sm font-semibold group-hover:text-accent-light transition-colors">{t.label}</div>
                    <div className="text-white/30 text-xs mt-0.5">{t.desc}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quick info */}
              <motion.div variants={item} className="p-5 rounded-2xl bg-[#1c1c28] border border-white/6 space-y-3">
                {[
                  { icon: '📍', label: 'Location', value: 'Virar, Maharashtra, India' },
                  { icon: '🎓', label: 'Education', value: 'Diploma CE — MSBTE K-Scheme' },
                  { icon: '💼', label: 'Status', value: 'Available for Opportunities' },
                  { icon: '🌐', label: 'Languages', value: 'English, Hindi, Marathi' },
                ].map(r => (
                  <div key={r.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-2.5 text-white/40 text-sm">
                      <span>{r.icon}</span>{r.label}
                    </div>
                    <div className="text-white/80 text-sm font-medium">{r.value}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
