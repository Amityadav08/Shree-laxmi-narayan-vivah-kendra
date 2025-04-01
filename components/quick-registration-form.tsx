"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import { User, Phone, Mail, Lock } from "lucide-react"

export default function QuickRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    profileFor: "",
    motherTongue: "",
    mobile: "",
    email: "",
    password: "",
    agreedToTerms: false,
  })

  const [errors, setErrors] = useState({
    name: false,
    profileFor: false,
    motherTongue: false,
    mobile: false,
    email: false,
    password: false,
    terms: false,
  })

  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = {
      name: !formData.name,
      profileFor: !formData.profileFor,
      motherTongue: !formData.motherTongue,
      mobile: !formData.mobile,
      email: !formData.email,
      password: !formData.password,
      terms: !formData.agreedToTerms,
    }

    setErrors(newErrors)

    if (Object.values(newErrors).some((error) => error)) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Success",
      description: "Registration successful! Welcome to Modern Matrimony.",
    })
  }

  const profileForOptions = ["Myself", "Son", "Daughter", "Brother", "Sister", "Relative", "Friend"]

  const motherTongueOptions = [
    "Hindi",
    "English",
    "Bengali",
    "Telugu",
    "Marathi",
    "Tamil",
    "Urdu",
    "Gujarati",
    "Kannada",
    "Malayalam",
  ]

  const inputClasses =
    "transition-all duration-200 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
  const iconClasses =
    "absolute left-3 top-3 h-5 w-5 text-gray-400 transition-colors duration-200 group-hover:text-blue-500"

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative group">
        <User className={iconClasses} />
        <Input
          placeholder="Name"
          className={`pl-10 ${inputClasses} ${errors.name ? "border-red-500" : ""}`}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && (
          <motion.p
            className="text-sm text-red-500 mt-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            This field is required
          </motion.p>
        )}
      </div>

      <div>
        <Select value={formData.profileFor} onValueChange={(value) => setFormData({ ...formData, profileFor: value })}>
          <SelectTrigger className={`${inputClasses} ${errors.profileFor ? "border-red-500" : ""}`}>
            <SelectValue placeholder="Create Profile For" />
          </SelectTrigger>
          <SelectContent>
            {profileForOptions.map((option) => (
              <SelectItem key={option} value={option.toLowerCase()}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.profileFor && (
          <motion.p
            className="text-sm text-red-500 mt-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            This field is required
          </motion.p>
        )}
      </div>

      <div>
        <Select
          value={formData.motherTongue}
          onValueChange={(value) => setFormData({ ...formData, motherTongue: value })}
        >
          <SelectTrigger className={`${inputClasses} ${errors.motherTongue ? "border-red-500" : ""}`}>
            <SelectValue placeholder="Mother Tongue" />
          </SelectTrigger>
          <SelectContent>
            {motherTongueOptions.map((option) => (
              <SelectItem key={option} value={option.toLowerCase()}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.motherTongue && (
          <motion.p
            className="text-sm text-red-500 mt-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            This field is required
          </motion.p>
        )}
      </div>

      <div className="relative group">
        <Phone className={iconClasses} />
        <div className="flex">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm transition-colors group-hover:border-blue-400">
            +91
          </span>
          <Input
            placeholder="Mobile Number"
            className={`rounded-l-none ${inputClasses} ${errors.mobile ? "border-red-500" : ""}`}
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          />
        </div>
        {errors.mobile && (
          <motion.p
            className="text-sm text-red-500 mt-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            This field is required
          </motion.p>
        )}
      </div>

      <div className="relative group">
        <Mail className={iconClasses} />
        <Input
          type="email"
          placeholder="Email Address"
          className={`pl-10 ${inputClasses} ${errors.email ? "border-red-500" : ""}`}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && (
          <motion.p
            className="text-sm text-red-500 mt-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            This field is required
          </motion.p>
        )}
      </div>

      <div className="relative group">
        <Lock className={iconClasses} />
        <Input
          type="password"
          placeholder="Create Password"
          className={`pl-10 ${inputClasses} ${errors.password ? "border-red-500" : ""}`}
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {errors.password && (
          <motion.p
            className="text-sm text-red-500 mt-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            This field is required
          </motion.p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={formData.agreedToTerms}
          onCheckedChange={(checked) => setFormData({ ...formData, agreedToTerms: checked as boolean })}
        />
        <label htmlFor="terms" className={`text-sm ${errors.terms ? "text-red-500" : "text-gray-600"}`}>
          By clicking Register Free, you agree to our{" "}
          <Link href="/terms" className="text-blue-600 hover:underline">
            Terms & Conditions
          </Link>
        </label>
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Register Free
        </Button>
      </motion.div>
    </form>
  )
}

