"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Heart, Star, ChevronLeft } from "lucide-react"

const benefits = [
  {
    title: "AI-Powered Matchmaking",
    description: "Get personalized matches based on your preferences and lifestyle.",
    icon: "❤️",
  },
  {
    title: "Video Calls with Matches",
    description: "Connect via secure video calls to get to know your match better.",
    icon: "📹",
  },
  {
    title: "Verified Profiles",
    description: "Our team ensures all profiles are genuine and verified for authenticity.",
    icon: "✅",
  },
]

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "₹499",
    duration: "/month",
    features: ["Basic matchmaking features", "Limited profile views", "Email support", "Basic search filters"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Premium Plan",
    price: "₹4,999",
    duration: "/year",
    features: [
      "AI-powered matchmaking",
      "Unlimited profile views",
      "Video call feature",
      "24/7 priority support",
      "Advanced search filters",
      "Profile highlighting",
    ],
    cta: "Get Premium",
    popular: true,
  },
  {
    name: "Elite Plan",
    price: "₹14,999",
    duration: " lifetime",
    features: [
      "All Premium features",
      "Personal matchmaking consultant",
      "Priority profile boost",
      "Exclusive events access",
      "Background verification",
      "Relationship counseling",
    ],
    cta: "Go Elite",
    popular: false,
  },
]

const reviews = [
  {
    name: "Priya & Rahul",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2WtXQXVJJBNVmsDH9uG21PB2S9oRo.png",
    testimonial: "Shree Laxminarayan Vivah Kendra helped us find our perfect match. The AI matchmaking was spot on!",
    duration: "Together for 2 years",
  },
  {
    name: "Anita & Vikram",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HlXue6uHjb38woHRZzf9PAk5rZL1YR.png",
    testimonial: "The video call feature made it so easy to connect before meeting in person.",
    duration: "Together for 1.5 years",
  },
  {
    name: "Neha & Arjun",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2WtXQXVJJBNVmsDH9uG21PB2S9oRo.png",
    testimonial: "We felt safe knowing all profiles were verified. Found our soulmate here!",
    duration: "Together for 3 years",
  },
  {
    name: "Raj & Simran",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HlXue6uHjb38woHRZzf9PAk5rZL1YR.png",
    testimonial: "The personalized matchmaking suggestions were incredibly accurate. We're so grateful!",
    duration: "Together for 1 year",
  },
  {
    name: "Amit & Pooja",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2WtXQXVJJBNVmsDH9uG21PB2S9oRo.png",
    testimonial: "Shree Laxminarayan Vivah Kendra's privacy features gave us the confidence to be ourselves. Now we're happily married!",
    duration: "Together for 4 years",
  },
]

export default function PricingPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  const [currentReview, setCurrentReview] = useState(0)
  const [isAutoSliding, setIsAutoSliding] = useState(true)
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right")

  const handleReviewChange = useCallback((direction: "prev" | "next") => {
    setIsAutoSliding(false)
    setSlideDirection(direction === "prev" ? "right" : "left")
    setCurrentReview((prev) => {
      if (direction === "prev") {
        return prev === 0 ? reviews.length - 1 : prev - 1
      } else {
        return (prev + 1) % reviews.length
      }
    })
    setTimeout(() => setIsAutoSliding(true), 5000)
  }, [])

  useEffect(() => {
    if (isAutoSliding) {
      const interval = setInterval(() => {
        setSlideDirection("left")
        setCurrentReview((prev) => (prev + 1) % reviews.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoSliding])

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-awENOJtyPAhF8u05oTUJiX7Zk9itEl.png"
          alt="Luxurious Indian wedding venue with elegant drapes and chandeliers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-900/60 via-burgundy-900/40 to-burgundy-900/60" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-serif font-bold text-gold-300 mb-6 drop-shadow-[0_0_15px_rgba(253,220,150,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Start Your Forever with Shree Laxminarayan Vivah Kendra
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-cream-100 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Tailored matchmaking, exclusive features, and the perfect partner await.
          </motion.p>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-center text-burgundy-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Shree Laxminarayan Vivah Kendra Premium?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-cream-50 p-8 rounded-xl shadow-lg border border-gold-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-burgundy-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-burgundy-900 mb-12">
            Choose Your Perfect Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                  plan.popular ? "border-gold-400" : "border-cream-200"
                } overflow-hidden`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.2 },
                }}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <Star className="w-6 h-6 text-gold-400 fill-gold-400" />
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-burgundy-800 mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-burgundy-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.duration}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <ChevronRight className="w-5 h-5 mr-2 text-burgundy-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-burgundy-600 hover:bg-burgundy-700 text-white"
                        : "bg-cream-100 hover:bg-cream-200 text-burgundy-900"
                    } transition-all duration-200 transform hover:scale-105`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-burgundy-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-burgundy-900 mb-12">
            Love Stories from Our Members
          </h2>
          <div className="relative max-w-xl mx-auto review-carousel-container">
            <AnimatePresence custom={slideDirection} mode="wait">
              <motion.div
                key={currentReview}
                custom={slideDirection}
                variants={{
                  enter: (direction: "left" | "right") => ({
                    x: direction === "right" ? 100 : -100,
                    opacity: 0,
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                  },
                  exit: (direction: "left" | "right") => ({
                    x: direction === "right" ? -100 : 100,
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-cream-200"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <Image
                      src={reviews[currentReview].image || "/placeholder.svg"}
                      alt={reviews[currentReview].name}
                      fill
                      className="rounded-full object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2">
                      <Heart className="w-6 h-6 text-burgundy-500 fill-burgundy-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-burgundy-800 mb-2">
                    {reviews[currentReview].name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{reviews[currentReview].duration}</p>
                  <p className="text-gray-600 text-center italic">"{reviews[currentReview].testimonial}"</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() => handleReviewChange("prev")}
              className="review-carousel-arrow left absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-cream-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy-500 hover:scale-110"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6 text-burgundy-900" />
            </button>
            <button
              onClick={() => handleReviewChange("next")}
              className="review-carousel-arrow right absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-cream-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy-500 hover:scale-110"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6 text-burgundy-900" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    currentReview === index ? "bg-burgundy-600" : "bg-burgundy-200"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquire Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-burgundy-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Have questions about our premium features? We'd love to help you find your perfect match.
            </p>
            <form className="space-y-6">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-white border-cream-200 focus:border-burgundy-500 focus:ring-burgundy-500/20"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-white border-cream-200 focus:border-burgundy-500 focus:ring-burgundy-500/20"
              />
              <Textarea
                placeholder="Your Message"
                className="bg-white border-cream-200 focus:border-burgundy-500 focus:ring-burgundy-500/20 min-h-[150px]"
              />
              <Button
                type="submit"
                className="w-full bg-burgundy-600 hover:bg-burgundy-700 text-white transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                Send Enquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
    </div>
  )
}

