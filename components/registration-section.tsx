"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import QuickRegistrationForm from "./quick-registration-form"
import Image from "next/image"
import { useRef } from "react"

export default function RegistrationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden min-h-screen flex items-center">
      {/* Background with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EdIYXzIhRRjPxjCiSbtwR4u01tlRvX.png"
          alt="Beautiful Indian wedding couple under cherry blossoms"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side content with animations */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.h2
                className="text-4xl lg:text-5xl font-bold leading-tight text-white font-display"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                We help you find your{" "}
                <span className="relative">
                  <span className="relative z-10">perfect partner</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-2 bg-blue-500/30 -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>{" "}
                and <span className="text-yellow-400">perfect family</span>
              </motion.h2>

              <motion.p
                className="text-xl text-white max-w-xl font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Join thousands of happy couples who found their soulmate through our platform.
              </motion.p>
            </motion.div>
          </div>

          {/* Right side form */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.1)] p-6 md:p-8 hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] transition-shadow duration-300">
              <QuickRegistrationForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

