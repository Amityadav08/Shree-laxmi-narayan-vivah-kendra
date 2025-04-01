"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const reviews = [
  [
    {
      names: "Ravi & Meera",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2WtXQXVJJBNVmsDH9uG21PB2S9oRo.png",
      duration: "Together for 3 years",
      quote: "Shree Laxminarayan Vivah Kendra brought us together when we least expected it.",
    },
    {
      names: "Ankit & Aditi",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HlXue6uHjb38woHRZzf9PAk5rZL1YR.png",
      duration: "Together for 2 years",
      quote: "The AI matchmaking was so accurate! We couldn't be happier.",
    },
    {
      names: "Arjun & Neha",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2WtXQXVJJBNVmsDH9uG21PB2S9oRo.png",
      duration: "Together for 1 year",
      quote: "The video profile feature helped us connect instantly.",
    },
    {
      names: "Aman & Priya",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HlXue6uHjb38woHRZzf9PAk5rZL1YR.png",
      duration: "Together for 4 years",
      quote: "Our journey started here, and now we're happily married!",
    },
  ],
  [
    {
      names: "Rahul & Sneha",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2WtXQXVJJBNVmsDH9uG21PB2S9oRo.png",
      duration: "Together for 5 years",
      quote: "The verified profiles gave us peace of mind while searching.",
    },
    {
      names: "Kabir & Simran",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HlXue6uHjb38woHRZzf9PAk5rZL1YR.png",
      duration: "Together for 2.5 years",
      quote: "The privacy controls allowed us to be ourselves while building trust.",
    },
    {
      names: "Karthik & Divya",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2WtXQXVJJBNVmsDH9uG21PB2S9oRo.png",
      duration: "Together for 3 years",
      quote: "Shree Laxminarayan Vivah Kendra made our long-distance love story possible.",
    },
    {
      names: "Varun & Shruti",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HlXue6uHjb38woHRZzf9PAk5rZL1YR.png",
      duration: "Together for 2 years",
      quote: "The platform's simplicity and advanced search made finding each other so easy.",
    },
  ],
  [
    {
      names: "Rohan & Ankita",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2WtXQXVJJBNVmsDH9uG21PB2S9oRo.png",
      duration: "Together for 1.5 years",
      quote: "It was love at first sight, thanks to the unique matchmaking features.",
    },
    {
      names: "Vikram & Pooja",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HlXue6uHjb38woHRZzf9PAk5rZL1YR.png",
      duration: "Together for 4 years",
      quote: "We couldn't have asked for a better platform to meet our life partner!",
    },
    {
      names: "Ravi & Meera",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2WtXQXVJJBNVmsDH9uG21PB2S9oRo.png",
      duration: "Together for 3 years",
      quote: "Shree Laxminarayan Vivah Kendra brought us together when we least expected it.",
    },
    {
      names: "Ankit & Aditi",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HlXue6uHjb38woHRZzf9PAk5rZL1YR.png",
      duration: "Together for 2 years",
      quote: "The AI matchmaking was so accurate! We couldn't be happier.",
    },
  ],
]

export default function CustomerReviews() {
  const [currentBatch, setCurrentBatch] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBatch((prev) => (prev + 1) % reviews.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextBatch = () => {
    setCurrentBatch((prev) => (prev + 1) % reviews.length)
  }

  const prevBatch = () => {
    setCurrentBatch((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-20 bg-cream-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-burgundy-900 mb-4">
          What Our Happy Couples Say
        </h2>
        <div className="relative w-fit mx-auto mb-12">
          <p className="text-xl text-gray-600 text-center">Stories of love, trust, and happily ever afters</p>
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBatch}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {reviews[currentBatch].map((review, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={review.image}
                      alt={review.names}
                      fill
                      className="rounded-full object-cover"
                      sizes="(max-width: 768px) 96px, 96px"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-burgundy-900 text-center mb-2">{review.names}</h3>
                  <p className="text-sm text-gray-600 text-center mb-4">{review.duration}</p>
                  <p className="text-gray-700 italic text-center">"{review.quote}"</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevBatch}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-white p-2 rounded-full shadow-lg hover:bg-cream-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy-500"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-6 h-6 text-burgundy-900" />
          </button>
          <button
            onClick={nextBatch}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-white p-2 rounded-full shadow-lg hover:bg-cream-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy-500"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-6 h-6 text-burgundy-900" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBatch(index)}
              className={`w-3 h-3 rounded-full ${
                currentBatch === index ? "bg-burgundy-600" : "bg-burgundy-200"
              } transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy-500`}
              aria-label={`Go to review batch ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

