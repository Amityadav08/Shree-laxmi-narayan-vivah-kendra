"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const profileBatches = [
  [
    {
      name: "Rahul Sharma",
      age: 28,
      religion: "Hindu",
      profession: "Software Engineer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2WtXQXVJJBNVmsDH9uG21PB2S9oRo.png"
    },
    {
      name: "Priya Patel",
      age: 26,
      religion: "Hindu",
      profession: "Doctor",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HlXue6uHjb38woHRZzf9PAk5rZL1YR.png"
    },
    {
      name: "Amit Singh",
      age: 30,
      religion: "Sikh",
      profession: "Business Owner",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2WtXQXVJJBNVmsDH9uG21PB2S9oRo.png"
    },
    {
      name: "Neha Gupta",
      age: 27,
      religion: "Hindu",
      profession: "Teacher",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HlXue6uHjb38woHRZzf9PAk5rZL1YR.png"
    }
  ],
  [
    {
      name: "Vikram Joshi",
      age: 32,
      religion: "Hindu",
      profession: "Architect",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2WtXQXVJJBNVmsDH9uG21PB2S9oRo.png"
    },
    {
      name: "Ananya Reddy",
      age: 25,
      religion: "Christian",
      profession: "Graphic Designer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HlXue6uHjb38woHRZzf9PAk5rZL1YR.png"
    },
    {
      name: "Rohan Malhotra",
      age: 29,
      religion: "Hindu",
      profession: "Marketing Manager",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2WtXQXVJJBNVmsDH9uG21PB2S9oRo.png"
    },
    {
      name: "Divya Nair",
      age: 24,
      religion: "Hindu",
      profession: "Fashion Designer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HlXue6uHjb38woHRZzf9PAk5rZL1YR.png"
    }
  ]
]

export default function ProfileCards() {
  const [currentBatch, setCurrentBatch] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBatch((prev) => (prev + 1) % profileBatches.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextBatch = () => {
    setCurrentBatch((prev) => (prev + 1) % profileBatches.length)
  }

  const prevBatch = () => {
    setCurrentBatch((prev) => (prev - 1 + profileBatches.length) % profileBatches.length)
  }

  return (
    <section className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-burgundy-900 mb-4">
          Featured Profiles
        </h2>
        <div className="relative w-fit mx-auto mb-12">
          <p className="text-xl text-gray-600 text-center">Find your perfect match from our verified members</p>
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
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
              {profileBatches[currentBatch].map((profile, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3 text-burgundy-900">{profile.name}</h3>
                  <div className="space-y-2 text-center">
                    <p className="text-gray-700"><span className="font-medium">Age:</span> {profile.age}</p>
                    <p className="text-gray-700"><span className="font-medium">Religion:</span> {profile.religion}</p>
                    <p className="text-gray-700"><span className="font-medium">Profession:</span> {profile.profession}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevBatch}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-cream-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy-500"
            aria-label="Previous profiles"
          >
            <ChevronLeft className="w-6 h-6 text-burgundy-900" />
          </button>
          <button
            onClick={nextBatch}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-cream-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy-500"
            aria-label="Next profiles"
          >
            <ChevronRight className="w-6 h-6 text-burgundy-900" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {profileBatches.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBatch(index)}
              className={`w-3 h-3 rounded-full ${
                currentBatch === index ? "bg-burgundy-600" : "bg-burgundy-200"
              } transition-colors duration-300`}
              aria-label={`Go to profile batch ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}