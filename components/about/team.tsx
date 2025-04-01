"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Playfair_Display } from "next/font/google"
import { X, Award } from "lucide-react"
import { useState, useEffect } from "react"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function AboutTeam() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LBp9DnGp2C0A92HworIRXNW3kpsqWS.png",
      description:
        "Rajesh Kumar is the visionary behind Shree Laxminarayan Vivah Kendra. With over 15 years of experience, he has redefined matchmaking through technology and innovation.",
      specialization: "Driving innovation and operational excellence",
    },
    {
      name: "Priya Sharma",
      role: "Head of Matchmaking",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XZko9Xzoe5c7v3lofOuYlZqF4qjzye.png",
      description:
        "Priya Sharma ensures personalized matchmaking services. Her expertise in understanding client needs has led to countless success stories.",
      specialization: "Expert in creating human connections with a personal touch",
    },
    {
      name: "Amit Patel",
      role: "Technical Director",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xUUIvUgxyN4jsARMs12ocGbowBNFPg.png",
      description:
        "Amit Patel leads the technical development of Shree Laxminarayan Vivah Kendra. His expertise in AI-powered solutions ensures a seamless client experience.",
      specialization: "Building secure and innovative matchmaking platforms",
    },
  ]

  const CardContent = ({ member }: { member: (typeof team)[0] }) => (
    <div className="space-y-3">
      <h4 className={`text-lg font-semibold text-burgundy-900 ${playfair.className}`}>{member.name}</h4>
      <p className="text-burgundy-700 text-sm font-medium">{member.role}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
      <div className="flex items-center gap-2 text-sm text-burgundy-800">
        <Award className="w-4 h-4" />
        <span className="italic">{member.specialization}</span>
      </div>
    </div>
  )

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-burgundy-900 mb-16 ${playfair.className}`}>
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center relative"
              onMouseEnter={() => !isMobile && setHoveredMember(index)}
              onMouseLeave={() => !isMobile && setHoveredMember(null)}
              onClick={() => isMobile && setHoveredMember(hoveredMember === index ? null : index)}
            >
              {/* Hover Card - Desktop */}
              <AnimatePresence>
                {!isMobile && hoveredMember === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute left-1/2 -translate-x-1/2 w-[calc(100%+2rem)] z-10"
                    style={{
                      top: "-220px", // Adjust this value to position the card above the image
                      filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                    }}
                  >
                    <div className="bg-cream-100 rounded-xl p-6 relative">
                      <CardContent member={member} />
                      {/* Decorative arrow */}
                      <div
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 
                                   bg-cream-100 transform rotate-45"
                        style={{ boxShadow: "2px 2px 0 0 rgba(251, 248, 241, 0.8)" }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Image Container */}
              <div className="relative mx-auto mb-6">
                <div
                  className="relative w-48 h-48 mx-auto overflow-hidden rounded-full 
                                 shadow-lg transition-all duration-500 ease-in-out
                                 hover:shadow-2xl"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 ease-in-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>

              {/* Basic Info */}
              <h3 className={`text-2xl font-semibold text-burgundy-900 mb-2 ${playfair.className}`}>{member.name}</h3>
              <p className="text-gray-600 font-light mb-4">{member.role}</p>

              {/* Mobile Overlay */}
              <AnimatePresence>
                {isMobile && hoveredMember === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="bg-cream-100 rounded-xl p-6 max-w-sm relative"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setHoveredMember(null)
                        }}
                        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-6 h-6" />
                      </button>
                      <CardContent member={member} />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

