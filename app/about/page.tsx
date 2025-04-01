"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import AboutContent from "@/components/about/content"
import CustomerReviews from "@/components/about/customer-reviews"
import AboutTimeline from "@/components/about/timeline"
import AboutTeam from "@/components/about/team"
import AboutContact from "@/components/about/contact"

export default function AboutPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with static animation */}
      <motion.div className="h-screen relative" style={{ opacity, scale }}>
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6wzL4f8zt2pGSmf8Fi3PStPiCCtHpE.png"
            alt="Traditional Indian wedding decoration with mandap and flowers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-burgundy-900/60 via-burgundy-900/40 to-burgundy-900/80" />
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            {/* Static title with animated elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 opacity-80"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 0.8 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M50 0L61.8 38.2L100 50L61.8 61.8L50 100L38.2 61.8L0 50L38.2 38.2L50 0Z"
                    fill="#FCD34D"
                    fillOpacity="0.7"
                  />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -bottom-12 right-1/4 w-16 h-16 opacity-60"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" fill="#F4A9B3" fillOpacity="0.7" />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 left-1/4 w-12 h-12 opacity-70"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.7 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="20" fill="#EBD7B7" fillOpacity="0.8" />
                </svg>
              </motion.div>

              {/* Main title */}
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-gold-300 drop-shadow-[0_0_15px_rgba(253,220,150,0.3)] relative z-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Shree Laxminarayan Vivah Kendra
              </motion.h1>

              {/* Animated gradient line */}
              <motion.div
                className="h-1.5 bg-gradient-to-r from-gold-300 via-burgundy-300 to-gold-300 mx-auto mt-6 rounded-full relative z-10"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "80%", opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.6,
                  ease: "easeInOut",
                }}
              />

              {/* Tagline with fade-in animation */}
              <motion.p
                className="text-xl md:text-2xl text-cream-100 mt-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Where hearts unite in sacred harmony
              </motion.p>

              {/* Additional tagline with staggered animation */}
              <motion.p
                className="text-lg md:text-xl text-cream-100/80 mt-4 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                Tying souls, binding dreams
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <AboutContent />

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Timeline */}
      <AboutTimeline />

      {/* Team */}
      <AboutTeam />

      {/* Contact Form */}
      <AboutContact />
    </div>
  )
}

