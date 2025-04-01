"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ProfileCards from "@/components/ProfileCards"
import { Button } from "@/components/ui/button"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import RegistrationSection from "@/components/registration-section"

const FeatureItem = ({ title, description, icon, bgColor }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`${bgColor} p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-burgundy-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export default function Home() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-100 to-purple-100 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P3TvWmS6wySNuyeBRNczEFJIxffOOj.png"
                  alt="Beautiful Indian couple in traditional wedding attire"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Find Your Perfect Match</h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                Begin your journey to a beautiful lifelong partnership. Our platform helps you discover your soulmate
                through meaningful connections and shared values.
              </p>
              <Button
                size="lg"
                className="bg-pink-600 hover:bg-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/signup">Start Your Journey</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <RegistrationSection />

      {/* Profile Cards Section */}
      <ProfileCards />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose Shree Laxminarayan Vivah Kendra?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Profiles",
                description: "Every profile is thoroughly verified to ensure a safe and genuine experience.",
                icon: "✅",
                bgColor: "bg-pink-100",
              },
              {
                title: "AI Matchmaking",
                description: "Our advanced AI algorithm finds your most compatible matches.",
                icon: "🤖",
                bgColor: "bg-purple-100",
              },
              {
                title: "Privacy First",
                description: "Your privacy is our top priority. Control what you share and with whom.",
                icon: "🔒",
                bgColor: "bg-blue-100",
              },
            ].map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Success in Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-pink-600">50,000+</p>
              <p className="text-xl text-gray-600">Verified Profiles</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-600">20,000+</p>
              <p className="text-xl text-gray-600">Success Stories</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">100,000+</p>
              <p className="text-xl text-gray-600">Happy Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Happy Customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & John",
                years: 2,
                story: "We found our perfect match on Shree Laxminarayan Vivah Kendra. The AI matchmaking was spot on!",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Bwn0drwDYqKW4lh2GqZpXOp3Mr6xK8.png",
              },
              {
                name: "Priya & Rahul",
                years: 1,
                story: "The privacy controls gave us the confidence to be ourselves. We're getting married next month!",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M4cEzdZjjqzkgwTqZDDz3QU8QkOqRC.png",
              },
              {
                name: "Michael & Emily",
                years: 3,
                story:
                  "The video profiles feature helped us get to know each other before our first date. It was love at first sight!",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LMR9bPNTkCU4DL63OmG5GMMaqbbZxA.png",
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      fill
                      className="rounded-full object-cover"
                      sizes="(max-width: 768px) 96px, 96px"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-lg">{review.name}</h4>
                    <p className="text-gray-600 text-sm">
                      Together for {review.years} year{review.years > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 h-8 w-8 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 mt-4 italic relative z-10 pl-6">{review.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <motion.section
        className="py-16 bg-gray-50"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {["Create Profile", "Discover Matches", "Connect", "Find Love"].map((step, index) => (
              <motion.div key={step} className="text-center" variants={itemVariants}>
                <div className="bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step}</h3>
                <p className="text-gray-600">{getStepDescription(step)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Soulmate?</h2>
          <p className="text-xl mb-8">Join thousands of happy couples who found love on Shree Laxminarayan Vivah Kendra.</p>
          <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100" asChild>
            <Link href="/signup">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function getStepDescription(step: string): string {
  switch (step) {
    case "Create Profile":
      return "Sign up and create your detailed profile."
    case "Discover Matches":
      return "Browse through AI-recommended matches."
    case "Connect":
      return "Start conversations with potential partners."
    case "Find Love":
      return "Build meaningful relationships and find your soulmate."
    default:
      return ""
  }
}

