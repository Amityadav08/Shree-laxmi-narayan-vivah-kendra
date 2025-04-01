"use client"

import { motion } from "framer-motion"

export default function AboutTimeline() {
  const timelineEvents = [
    {
      year: "2020",
      title: "Foundation",
      description: "Shree Laxminarayan Vivah Kendra was established with a vision to revolutionize matchmaking.",
    },
    {
      year: "2021",
      title: "Growth",
      description: "Expanded our services across major cities in India.",
    },
    {
      year: "2022",
      title: "Innovation",
      description: "Introduced AI-powered matchmaking and video profiles.",
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Extended our services to NRI communities worldwide.",
    },
  ]

  return (
    <section className="py-20 bg-burgundy-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-burgundy-900 mb-16">Our Journey</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-burgundy-200" />

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className={`${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <span className="text-2xl font-bold text-burgundy-600">{event.year}</span>
                    <h3 className="text-xl font-semibold text-burgundy-900 mt-2">{event.title}</h3>
                    <p className="text-gray-600 mt-2">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-burgundy-500 rounded-full" />
                <div className="w-1/2 pl-8" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

