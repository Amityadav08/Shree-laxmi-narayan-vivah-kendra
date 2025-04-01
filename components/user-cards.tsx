"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const dummyUsers = [
  {
    name: "Rahul Sharma",
    age: 28,
    education: "MBA, IIM Bangalore",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Priya Patel",
    age: 26,
    education: "MS Computer Science",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2WtXQXVJJBNVmsDH9uG21PB2S9oRo.png"
  },
  {
    name: "Amit Singh",
    age: 30,
    education: "CA, CFA",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Deepika Gupta",
    age: 25,
    education: "B.Tech Computer Science",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HlXue6uHjb38woHRZzf9PAk5rZL1YR.png"
  },
  {
    name: "Vikram Joshi",
    age: 32,
    education: "PhD Physics",
    image: "/placeholder-user.jpg"
  }
]

export default function UserCards() {
  const [users, setUsers] = useState(dummyUsers)

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(prev => {
        const first = prev[0]
        return [...prev.slice(1), first]
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 bg-cream-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-burgundy-900 mb-8">
          Featured Profiles
        </h2>
        
        <div className="relative h-[400px]">
          {users.map((user, index) => (
            <motion.div
              key={user.name}
              className="absolute inset-0 w-[300px] mx-auto bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
              initial={{ opacity: 0, x: 500 }}
              animate={{ 
                opacity: index === 0 ? 1 : 0.5 + (index * 0.1),
                x: index === 0 ? 0 : 100 + (index * 100),
                scale: index === 0 ? 1 : 0.9 - (index * 0.1)
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-[200px] mb-4 rounded-md overflow-hidden">
                <Image 
                  src={user.image}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-burgundy-900">{user.name}</h3>
              <p className="text-gray-600">Age: {user.age}</p>
              <p className="text-gray-600">Education: {user.education}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}