"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Filter, Heart, MessageCircle, SearchIcon } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function SearchPage() {
  const [searchParams, setSearchParams] = useState({
    gender: "",
    ageRange: [24, 35],
    religion: "",
    state: "",
    city: "",
    motherTongue: "",
    education: "",
    profession: "",
  })

  const { toast } = useToast()
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Search Complete",
        description: "Found 42 matches based on your criteria",
      })
    }, 1000)
  }

  const handleSelectChange = (name: string, value: string) => {
    setSearchParams({ ...searchParams, [name]: value })
  }

  const handleAgeRangeChange = (value: number[]) => {
    setSearchParams({ ...searchParams, ageRange: value })
  }

  // Sample profiles data
  const sampleProfiles = [
    {
      id: 1,
      name: "Priya S.",
      age: 27,
      location: "Mumbai, Maharashtra",
      religion: "Hindu",
      education: "MBA Finance",
      profession: "Investment Banker",
      about: "Passionate about travel, music, and making a difference in the world.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Rahul M.",
      age: 30,
      location: "Bangalore, Karnataka",
      religion: "Hindu",
      education: "MS Computer Science",
      profession: "Software Engineer",
      about: "Tech enthusiast who loves hiking and photography in my free time.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Aisha K.",
      age: 26,
      location: "Delhi, NCR",
      religion: "Muslim",
      education: "MBBS",
      profession: "Doctor",
      about: "Dedicated to healthcare and enjoy reading novels and painting.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Vikram S.",
      age: 32,
      location: "Pune, Maharashtra",
      religion: "Sikh",
      education: "CA",
      profession: "Financial Analyst",
      about: "Love playing cricket, watching movies, and exploring new cuisines.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      name: "Ananya P.",
      age: 28,
      location: "Chennai, Tamil Nadu",
      religion: "Hindu",
      education: "PhD Economics",
      profession: "Professor",
      about: "Academic at heart with a passion for classical dance and literature.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      name: "Arjun R.",
      age: 31,
      location: "Hyderabad, Telangana",
      religion: "Christian",
      education: "B.Tech",
      profession: "Entrepreneur",
      about: "Building my startup while enjoying football and adventure sports.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-burgundy-900 mb-2">Find Your Perfect Match</h1>
          <p className="text-gray-600">Use our advanced search to discover compatible partners</p>
        </div>

        {/* Horizontal Filter Bar */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-8">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
              <div>
                <Label htmlFor="gender" className="text-sm font-medium text-gray-700 mb-1 block">
                  Looking for
                </Label>
                <Select value={searchParams.gender} onValueChange={(value) => handleSelectChange("gender", value)}>
                  <SelectTrigger id="gender" className="w-full">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Woman</SelectItem>
                    <SelectItem value="male">Man</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-1 block">Age Range</Label>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{searchParams.ageRange[0]}</span>
                  <span className="mx-2">-</span>
                  <span className="text-sm text-gray-600">{searchParams.ageRange[1]}</span>
                </div>
                <Slider
                  min={18}
                  max={60}
                  step={1}
                  value={searchParams.ageRange}
                  onValueChange={handleAgeRangeChange}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="religion" className="text-sm font-medium text-gray-700 mb-1 block">
                  Religion
                </Label>
                <Select value={searchParams.religion} onValueChange={(value) => handleSelectChange("religion", value)}>
                  <SelectTrigger id="religion" className="w-full">
                    <SelectValue placeholder="Any religion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hindu">Hindu</SelectItem>
                    <SelectItem value="muslim">Muslim</SelectItem>
                    <SelectItem value="christian">Christian</SelectItem>
                    <SelectItem value="sikh">Sikh</SelectItem>
                    <SelectItem value="jain">Jain</SelectItem>
                    <SelectItem value="buddhist">Buddhist</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="state" className="text-sm font-medium text-gray-700 mb-1 block">
                  State
                </Label>
                <Select value={searchParams.state} onValueChange={(value) => handleSelectChange("state", value)}>
                  <SelectTrigger id="state" className="w-full">
                    <SelectValue placeholder="Any state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                    <SelectItem value="telangana">Telangana</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="city" className="text-sm font-medium text-gray-700 mb-1 block">
                  City
                </Label>
                <Select value={searchParams.city} onValueChange={(value) => handleSelectChange("city", value)}>
                  <SelectTrigger id="city" className="w-full">
                    <SelectValue placeholder="Any city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="pune">Pune</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button
                  type="submit"
                  className="w-full bg-burgundy-600 hover:bg-burgundy-700 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Searching...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <SearchIcon className="mr-2 h-4 w-4" />
                      Search
                    </span>
                  )}
                </Button>
              </div>
            </div>

            {/* Advanced Filters Toggle */}
            <div className="flex justify-end">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="text-burgundy-600 hover:text-burgundy-700 hover:bg-burgundy-50"
              >
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${showAdvancedFilters ? "rotate-180" : ""}`}
                />
              </Button>
            </div>

            {/* Advanced Filters Panel */}
            {showAdvancedFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200"
              >
                <div>
                  <Label htmlFor="motherTongue" className="text-sm font-medium text-gray-700 mb-1 block">
                    Mother Tongue
                  </Label>
                  <Select
                    value={searchParams.motherTongue}
                    onValueChange={(value) => handleSelectChange("motherTongue", value)}
                  >
                    <SelectTrigger id="motherTongue" className="w-full">
                      <SelectValue placeholder="Any language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="marathi">Marathi</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                      <SelectItem value="telugu">Telugu</SelectItem>
                      <SelectItem value="kannada">Kannada</SelectItem>
                      <SelectItem value="malayalam">Malayalam</SelectItem>
                      <SelectItem value="bengali">Bengali</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="education" className="text-sm font-medium text-gray-700 mb-1 block">
                    Education
                  </Label>
                  <Select
                    value={searchParams.education}
                    onValueChange={(value) => handleSelectChange("education", value)}
                  >
                    <SelectTrigger id="education" className="w-full">
                      <SelectValue placeholder="Any education" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="highschool">High School</SelectItem>
                      <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                      <SelectItem value="masters">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="profession" className="text-sm font-medium text-gray-700 mb-1 block">
                    Profession
                  </Label>
                  <Select
                    value={searchParams.profession}
                    onValueChange={(value) => handleSelectChange("profession", value)}
                  >
                    <SelectTrigger id="profession" className="w-full">
                      <SelectValue placeholder="Any profession" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">IT Professional</SelectItem>
                      <SelectItem value="doctor">Doctor</SelectItem>
                      <SelectItem value="engineer">Engineer</SelectItem>
                      <SelectItem value="teacher">Teacher</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>
            )}
          </form>
        </div>

        {/* Search Results */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-burgundy-900">Recommended Matches</h2>
          <div className="text-sm text-gray-600">Showing 6 of 42 matches</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProfiles.map((profile) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 w-full">
                  <Image src={profile.image || "/placeholder.svg"} alt={profile.name} fill className="object-cover" />
                  <div className="absolute top-3 right-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
                    >
                      <Heart className="h-5 w-5 text-burgundy-600" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-burgundy-900">
                        {profile.name}, {profile.age}
                      </h3>
                      <p className="text-sm text-gray-600">{profile.location}</p>
                    </div>
                    <Badge variant="outline" className="bg-burgundy-50 text-burgundy-700 border-burgundy-200">
                      {profile.religion}
                    </Badge>
                  </div>

                  <div className="mb-3">
                    <p className="text-sm text-gray-700 mb-1">
                      <span className="font-medium">Education:</span> {profile.education}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Profession:</span> {profile.profession}
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 italic mb-4">"{profile.about}"</p>

                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-burgundy-600 border-burgundy-200 hover:bg-burgundy-50"
                    >
                      View Profile
                    </Button>
                    <Button variant="ghost" size="sm" className="text-burgundy-600 hover:bg-burgundy-50">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-burgundy-50 text-burgundy-700 border-burgundy-200">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <span className="text-gray-500">...</span>
            <Button variant="outline" size="sm">
              7
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </nav>
        </div>
      </div>
    </div>
  )
}

