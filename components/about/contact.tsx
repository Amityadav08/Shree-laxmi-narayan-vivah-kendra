"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AboutContact() {
  return (
    <section className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-burgundy-900 mb-8">Get in Touch</h2>
          <p className="text-center text-gray-600 mb-12">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" placeholder="Your Name" className="bg-white" />
              <Input type="email" placeholder="Your Email" className="bg-white" />
            </div>
            <Input type="text" placeholder="Subject" className="bg-white" />
            <Textarea placeholder="Your Message" className="bg-white min-h-[150px]" />
            <Button type="submit" className="w-full bg-burgundy-600 hover:bg-burgundy-700 text-white">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

