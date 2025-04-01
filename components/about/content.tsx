"use client"

import { motion } from "framer-motion"

export default function AboutContent() {
  return (
    <section className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-burgundy-900 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 mb-12">
            At Ujwal Bandhan, we believe in creating meaningful connections that last a lifetime. Our platform combines
            traditional values with modern technology to help you find your perfect life partner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Traditional Values",
              description: "We understand and respect the importance of cultural traditions in marriage.",
              icon: "🕉️",
            },
            {
              title: "Modern Approach",
              description: "Leveraging technology to make your partner search smooth and efficient.",
              icon: "💻",
            },
            {
              title: "Trusted Platform",
              description: "Building trust through verified profiles and secure communications.",
              icon: "🤝",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-burgundy-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

