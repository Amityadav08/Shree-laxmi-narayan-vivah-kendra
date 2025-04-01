"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Heart, Mail, Filter, Search, ChevronDown, Users, Eye, MessageSquare } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function MatchesPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("recommended")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState(null)

  // Filter states
  const [filters, setFilters] = useState({
    ageRange: [24, 35],
    location: "",
    religion: "",
    education: "",
    maritalStatus: "",
    distance: 50,
  })

  // Mock matches data
  const matchesData = {
    recommended: [
      {
        id: 1,
        name: "Priya S.",
        age: 27,
        location: "Mumbai, Maharashtra",
        compatibility: 92,
        occupation: "Software Engineer",
        education: "M.Tech in Computer Science",
        about:
          "I love reading, traveling, and exploring new cuisines. Looking for someone who shares similar interests.",
        image: "/placeholder.svg?height=300&width=300",
        lastActive: "2 hours ago",
      },
      {
        id: 2,
        name: "Ananya M.",
        age: 26,
        location: "Pune, Maharashtra",
        compatibility: 88,
        occupation: "Doctor",
        education: "MBBS",
        about: "Passionate about healthcare and helping others. I enjoy painting and classical music in my free time.",
        image: "/placeholder.svg?height=300&width=300",
        lastActive: "5 hours ago",
      },
      {
        id: 3,
        name: "Neha K.",
        age: 28,
        location: "Delhi, NCR",
        compatibility: 85,
        occupation: "Marketing Manager",
        education: "MBA",
        about: "Creative and outgoing. I enjoy outdoor activities, photography, and meeting new people.",
        image: "/placeholder.svg?height=300&width=300",
        lastActive: "1 day ago",
      },
      {
        id: 4,
        name: "Meera R.",
        age: 25,
        location: "Bangalore, Karnataka",
        compatibility: 82,
        occupation: "Data Scientist",
        education: "MS in Statistics",
        about: "Analytical mind with a creative heart. Love data, music, and good conversations.",
        image: "/placeholder.svg?height=300&width=300",
        lastActive: "3 days ago",
      },
      {
        id: 5,
        name: "Pooja T.",
        age: 29,
        location: "Chennai, Tamil Nadu",
        compatibility: 80,
        occupation: "Architect",
        education: "B.Arch",
        about: "Passionate about design and aesthetics. Looking for someone who appreciates art and culture.",
        image: "/placeholder.svg?height=300&width=300",
        lastActive: "Just now",
      },
      {
        id: 6,
        name: "Aisha K.",
        age: 27,
        location: "Hyderabad, Telangana",
        compatibility: 78,
        occupation: "Financial Analyst",
        education: "MBA Finance",
        about: "Enjoy reading, traveling, and exploring new places. Looking for someone with similar interests.",
        image: "/placeholder.svg?height=300&width=300",
        lastActive: "4 hours ago",
      },
    ],
    interested: [
      {
        id: 7,
        name: "Divya P.",
        age: 26,
        location: "Mumbai, Maharashtra",
        compatibility: 75,
        occupation: "HR Manager",
        education: "MBA HR",
        about: "People person who loves to connect. Enjoy reading, yoga, and cooking.",
        image: "/placeholder.svg?height=300&width=300",
        lastActive: "1 day ago",
        interestShown: "2 days ago",
      },
      {
        id: 8,
        name: "Ritu S.",
        age: 28,
        location: "Kolkata, West Bengal",
        compatibility: 72,
        occupation: "Professor",
        education: "PhD in Literature",
        about: "Academic with a passion for literature and arts. Looking for an intellectual partner.",
        image: "/placeholder.svg?height=300&width=300",
        lastActive: "3 days ago",
        interestShown: "1 week ago",
      },
    ],
    viewed: [
      {
        id: 9,
        name: "Kavita M.",
        age: 27,
        location: "Ahmedabad, Gujarat",
        compatibility: 70,
        occupation: "Entrepreneur",
        education: "BBA",
        about: "Running my own startup. Passionate about business, innovation, and making a difference.",
        image: "/placeholder.svg?height=300&width=300",
        lastActive: "2 days ago",
        viewedOn: "Yesterday",
      },
      {
        id: 10,
        name: "Shalini R.",
        age: 29,
        location: "Jaipur, Rajasthan",
        compatibility: 68,
        occupation: "Fashion Designer",
        education: "Bachelor in Design",
        about: "Creative soul with a passion for fashion and art. Looking for someone who appreciates creativity.",
        image: "/placeholder.svg?height=300&width=300",
        lastActive: "5 days ago",
        viewedOn: "3 days ago",
      },
    ],
  }

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const resetFilters = () => {
    setFilters({
      ageRange: [24, 35],
      location: "",
      religion: "",
      education: "",
      maritalStatus: "",
      distance: 50,
    })
  }

  const viewProfile = (profile) => {
    setSelectedProfile(profile)
  }

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold text-burgundy-900">My Matches</h1>
                <p className="text-gray-600">Discover profiles that match your preferences</p>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4" />
                  Filters
                  <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
                </Button>
                <Button className="bg-burgundy-600 hover:bg-burgundy-700" onClick={() => router.push("/search")}>
                  <Search className="h-4 w-4 mr-2" />
                  Advanced Search
                </Button>
              </div>
            </div>
          </div>

          {/* Filters Section */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle>Filter Matches</CardTitle>
                    <Button variant="ghost" size="sm" onClick={resetFilters}>
                      Reset
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label>Age Range</Label>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{filters.ageRange[0]}</span>
                        <span className="mx-2">-</span>
                        <span className="text-sm text-gray-600">{filters.ageRange[1]}</span>
                      </div>
                      <Slider
                        min={18}
                        max={60}
                        step={1}
                        value={filters.ageRange}
                        onValueChange={(value) => handleFilterChange("ageRange", value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Select value={filters.location} onValueChange={(value) => handleFilterChange("location", value)}>
                        <SelectTrigger id="location">
                          <SelectValue placeholder="Any location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="Mumbai">Mumbai</SelectItem>
                          <SelectItem value="Delhi">Delhi</SelectItem>
                          <SelectItem value="Bangalore">Bangalore</SelectItem>
                          <SelectItem value="Chennai">Chennai</SelectItem>
                          <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                          <SelectItem value="Pune">Pune</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="religion">Religion</Label>
                      <Select value={filters.religion} onValueChange={(value) => handleFilterChange("religion", value)}>
                        <SelectTrigger id="religion">
                          <SelectValue placeholder="Any religion" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="Hindu">Hindu</SelectItem>
                          <SelectItem value="Muslim">Muslim</SelectItem>
                          <SelectItem value="Christian">Christian</SelectItem>
                          <SelectItem value="Sikh">Sikh</SelectItem>
                          <SelectItem value="Jain">Jain</SelectItem>
                          <SelectItem value="Buddhist">Buddhist</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="education">Education</Label>
                      <Select
                        value={filters.education}
                        onValueChange={(value) => handleFilterChange("education", value)}
                      >
                        <SelectTrigger id="education">
                          <SelectValue placeholder="Any education" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="High School">High School</SelectItem>
                          <SelectItem value="Bachelor's">Bachelor's Degree</SelectItem>
                          <SelectItem value="Master's">Master's Degree</SelectItem>
                          <SelectItem value="PhD">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="maritalStatus">Marital Status</Label>
                      <Select
                        value={filters.maritalStatus}
                        onValueChange={(value) => handleFilterChange("maritalStatus", value)}
                      >
                        <SelectTrigger id="maritalStatus">
                          <SelectValue placeholder="Any status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="Never Married">Never Married</SelectItem>
                          <SelectItem value="Divorced">Divorced</SelectItem>
                          <SelectItem value="Widowed">Widowed</SelectItem>
                          <SelectItem value="Separated">Separated</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Distance (km)</Label>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">0</span>
                        <span className="text-sm text-gray-600">{filters.distance} km</span>
                      </div>
                      <Slider
                        min={0}
                        max={500}
                        step={10}
                        value={[filters.distance]}
                        onValueChange={(value) => handleFilterChange("distance", value[0])}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-burgundy-600 hover:bg-burgundy-700">Apply Filters</Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {/* Matches Tabs */}
          <Tabs defaultValue="recommended" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto mb-8 grid-cols-3">
              <TabsTrigger value="recommended" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Recommended
              </TabsTrigger>
              <TabsTrigger value="interested" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Interested
              </TabsTrigger>
              <TabsTrigger value="viewed" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Viewed
              </TabsTrigger>
            </TabsList>

            {/* Recommended Matches */}
            <TabsContent value="recommended">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchesData.recommended.map((profile) => (
                  <Card key={profile.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-64 w-full">
                      <Image
                        src={profile.image || "/placeholder.svg"}
                        alt={profile.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-burgundy-600">{profile.compatibility}% Match</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg text-burgundy-900">
                            {profile.name}, {profile.age}
                          </h3>
                          <p className="text-sm text-gray-600">{profile.location}</p>
                        </div>
                        <div className="text-xs text-gray-500">{profile.lastActive}</div>
                      </div>

                      <div className="mb-3">
                        <p className="text-sm text-gray-700 mb-1">
                          <span className="font-medium">Occupation:</span> {profile.occupation}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Education:</span> {profile.education}
                        </p>
                      </div>

                      <p className="text-sm text-gray-600 italic mb-4 line-clamp-2">{profile.about}</p>

                      <div className="flex justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-burgundy-600 border-burgundy-200 hover:bg-burgundy-50"
                          onClick={() => viewProfile(profile)}
                        >
                          View Profile
                        </Button>
                        <div className="flex gap-2">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                  <Heart className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Show Interest</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                  <Mail className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Send Message</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Interested Matches */}
            <TabsContent value="interested">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchesData.interested.length > 0 ? (
                  matchesData.interested.map((profile) => (
                    <Card key={profile.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-64 w-full">
                        <Image
                          src={profile.image || "/placeholder.svg"}
                          alt={profile.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-burgundy-600">{profile.compatibility}% Match</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-lg text-burgundy-900">
                              {profile.name}, {profile.age}
                            </h3>
                            <p className="text-sm text-gray-600">{profile.location}</p>
                          </div>
                        </div>

                        <div className="mb-3">
                          <p className="text-sm text-gray-700 mb-1">
                            <span className="font-medium">Occupation:</span> {profile.occupation}
                          </p>
                          <p className="text-sm text-gray-700 mb-1">
                            <span className="font-medium">Education:</span> {profile.education}
                          </p>
                          <p className="text-sm text-burgundy-600">
                            <span className="font-medium">Interest shown:</span> {profile.interestShown}
                          </p>
                        </div>

                        <p className="text-sm text-gray-600 italic mb-4 line-clamp-2">{profile.about}</p>

                        <div className="flex justify-between">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-burgundy-600 border-burgundy-200 hover:bg-burgundy-50"
                            onClick={() => viewProfile(profile)}
                          >
                            View Profile
                          </Button>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              Respond
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <Heart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No interests yet</h3>
                    <p className="text-gray-500 mb-4">
                      When someone shows interest in your profile, they'll appear here
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Viewed Matches */}
            <TabsContent value="viewed">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchesData.viewed.length > 0 ? (
                  matchesData.viewed.map((profile) => (
                    <Card key={profile.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-64 w-full">
                        <Image
                          src={profile.image || "/placeholder.svg"}
                          alt={profile.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-burgundy-600">{profile.compatibility}% Match</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-lg text-burgundy-900">
                              {profile.name}, {profile.age}
                            </h3>
                            <p className="text-sm text-gray-600">{profile.location}</p>
                          </div>
                        </div>

                        <div className="mb-3">
                          <p className="text-sm text-gray-700 mb-1">
                            <span className="font-medium">Occupation:</span> {profile.occupation}
                          </p>
                          <p className="text-sm text-gray-700 mb-1">
                            <span className="font-medium">Education:</span> {profile.education}
                          </p>
                          <p className="text-sm text-burgundy-600">
                            <span className="font-medium">Viewed:</span> {profile.viewedOn}
                          </p>
                        </div>

                        <p className="text-sm text-gray-600 italic mb-4 line-clamp-2">{profile.about}</p>

                        <div className="flex justify-between">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-burgundy-600 border-burgundy-200 hover:bg-burgundy-50"
                            onClick={() => viewProfile(profile)}
                          >
                            View Again
                          </Button>
                          <div className="flex gap-2">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                    <Heart className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Show Interest</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <Eye className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No viewed profiles</h3>
                    <p className="text-gray-500 mb-4">Profiles you've viewed will appear here</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>

          {/* Profile View Dialog */}
          {selectedProfile && (
            <Dialog open={!!selectedProfile} onOpenChange={() => setSelectedProfile(null)}>
              <DialogContent className="max-w-3xl h-[80vh]">
                <DialogHeader>
                  <DialogTitle>Profile Details</DialogTitle>
                  <DialogDescription>View detailed information about this profile</DialogDescription>
                </DialogHeader>

                <ScrollArea className="h-full pr-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="relative aspect-square w-full rounded-md overflow-hidden mb-4">
                        <Image
                          src={selectedProfile.image || "/placeholder.svg"}
                          alt={selectedProfile.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex justify-between mb-4">
                        <Button variant="outline" className="flex-1 mr-2">
                          <Heart className="h-4 w-4 mr-2" />
                          Show Interest
                        </Button>
                        <Button className="flex-1 bg-burgundy-600 hover:bg-burgundy-700">
                          <Mail className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                      </div>
                    </div>

                    <div>
                      <div className="mb-4">
                        <h2 className="text-2xl font-bold text-burgundy-900 mb-1">
                          {selectedProfile.name}, {selectedProfile.age}
                        </h2>
                        <p className="text-gray-600 flex items-center gap-1 mb-2">
                          <Users className="h-4 w-4" />
                          {selectedProfile.location}
                        </p>
                        <Badge className="bg-burgundy-600 mb-4">{selectedProfile.compatibility}% Match</Badge>

                        <h3 className="font-medium text-lg mb-2">About Me</h3>
                        <p className="text-gray-700 mb-4">{selectedProfile.about}</p>

                        <Separator className="my-4" />

                        <h3 className="font-medium text-lg mb-2">Basic Details</h3>
                        <dl className="grid grid-cols-2 gap-2 mb-4">
                          <dt className="text-gray-500">Occupation:</dt>
                          <dd>{selectedProfile.occupation}</dd>
                          <dt className="text-gray-500">Education:</dt>
                          <dd>{selectedProfile.education}</dd>
                          <dt className="text-gray-500">Last Active:</dt>
                          <dd>{selectedProfile.lastActive}</dd>
                        </dl>

                        <Separator className="my-4" />

                        <h3 className="font-medium text-lg mb-2">Contact Information</h3>
                        <p className="text-gray-600 mb-4">
                          Contact information will be visible after you connect with this profile.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          )}
        </motion.div>
      </div>
    </div>
  )
}

