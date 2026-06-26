import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1400)
  }

  const contacts = [
    {
      icon: '📧', label: 'Email', value: 'deep.birwadkar@gmail.com',
      href: 'mailto:deep.birwadkar@gmail.com'
    },
    {
      icon: '🐙', label: 'GitHub', value: 'github.com/deepbirwadkar',
      href: 'https://github.com/DeepBirwadkar'
    },
    {
      icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/deepbirwadkar',
      href: 'https://linkedin.com'
    },
    {
      icon: '📍', label: 'Location', value: 'Virar, Maharashtra, India',
      href: null
    },
  ]

  const socials = [
    { icon: '𝕏', href: '#', label: 'Twitter/X' },
    { icon: 'gh', href: 'https://github.com/DeepBirwadkar', label: 'GitHub' },
    { icon: 'in', href: '#', label: 'LinkedIn' },
    { icon: '▣', href: '#', label: 'Instagram' },
  ]

  return (
    <section id="contact" className="py-28 bg-[#0d0d14] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">Get In Touch</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 tracking-tight">Let's Work Together</h2>
          <div className="mt-4 w-12 h-0.5 rounded-full bg-gradient-to-r from-accent to-pink-500" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Have a project in mind?</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                I'm always open to new opportunities, collaborations, or just a good conversation about tech. Drop me a message and I'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-2.5">
              {contacts.map(c => (
                <motion.div
                  key={c.label}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl border border-white/6 hover:border-accent/25 hover:bg-accent/5 transition-all"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-base flex-shrink-0">{c.icon}</div>
                      <div>
                        <div className="text-white/30 text-xs font-medium">{c.label}</div>
                        <div className="text-white/70 text-sm group-hover:text-white transition-colors">{c.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 p-3 rounded-xl border border-white/6">
                      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-base flex-shrink-0">{c.icon}</div>
                      <div>
                        <div className="text-white/30 text-xs font-medium">{c.label}</div>
                        <div className="text-white/70 text-sm">{c.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <div className="text-white/30 text-xs font-semibold tracking-wider uppercase mb-3">Social</div>
              <div className="flex gap-2">
                {socials.map(s => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-[#1c1c28] border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:border-accent/40 transition-all text-sm font-bold"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-7 rounded-3xl bg-[#1c1c28] border border-white/6"
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white/50 text-xs font-semibold mb-1.5">Name *</label>
                  <input
                    name="name" value={form.name} onChange={handleChange}
                    placeholder="Deep Birwadkar"
                    className="w-full bg-[#111118] border border-white/8 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder-white/20"
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs font-semibold mb-1.5">Email *</label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full bg-[#111118] border border-white/8 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder-white/20"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-white/50 text-xs font-semibold mb-1.5">Subject</label>
                <input
                  name="subject" value={form.subject} onChange={handleChange}
                  placeholder="Project Inquiry / Collaboration"
                  className="w-full bg-[#111118] border border-white/8 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder-white/20"
                />
              </div>
              <div className="mb-6">
                <label className="block text-white/50 text-xs font-semibold mb-1.5">Message *</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and budget..."
                  rows={5}
                  className="w-full bg-[#111118] border border-white/8 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder-white/20 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending' || status === 'sent'}
                className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 btn-glow flex items-center justify-center gap-2
                  ${status === 'sent'
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                    : status === 'sending'
                    ? 'bg-accent/60 text-white cursor-not-allowed'
                    : 'bg-accent text-white shadow-lg shadow-accent/30 hover:shadow-accent/50'
                  }`}
              >
                {status === 'sending' && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                )}
                {status === 'sent' ? '✅ Message Sent!' : status === 'sending' ? 'Sending...' : 'Send Message ✉️'}
              </motion.button>

              {status === 'sent' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-400 text-sm mt-3"
                >
                  Thanks! I'll get back to you within 24 hours. 🎉
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
