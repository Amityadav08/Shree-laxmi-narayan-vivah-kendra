"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Camera, Edit, Save } from "lucide-react"

export default function ProfilePage() {
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  // Mock user data - will be replaced with API call
  const [userData, setUserData] = useState({
    name: "Rahul Sharma",
    age: 28,
    gender: "Male",
    location: "Mumbai, Maharashtra",
    about:
      "I'm a software engineer who loves to travel and explore new cultures. I enjoy reading, hiking, and cooking in my free time. Looking for someone who shares similar interests and values.",
    occupation: "Software Engineer",
    company: "Tech Innovations Ltd.",
    education: "M.Tech in Computer Science",
    religion: "Hindu",
    motherTongue: "Hindi",
    maritalStatus: "Never Married",
    height: "5'10\"",
    profileImage: null, // Set to null to demonstrate fallback
    email: "rahul.sharma@example.com",
    phone: "+91 9876543210",
    dateOfBirth: "1995-05-15",
  })

  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (!userData.name) return "U"
    return userData.name
      .split(" ")
      .map((name) => name[0])
      .join("")
      .toUpperCase()
  }

  const handleSaveProfile = () => {
    // Show loading state
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsEditing(false)

      // Show success message
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      })

      // TODO: Replace with actual API call
      // const response = await fetch('/api/users/profile', {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(userData),
      // })

      // For demo purposes, save to localStorage
      localStorage.setItem("userData", JSON.stringify(userData))
    }, 1000)
  }

  const handleInputChange = (field: string, value: any) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleProfilePictureUpload = () => {
    // Trigger file input click
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, you would upload this to a server
      // For demo, we'll use a local URL
      const imageUrl = URL.createObjectURL(file)
      setUserData((prev) => ({
        ...prev,
        profileImage: imageUrl,
      }))

      toast({
        title: "Profile Picture Updated",
        description: "Your profile picture has been successfully updated.",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-burgundy-900">My Profile</h1>
            <p className="text-gray-600">View and manage your profile information</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Profile Image & Basic Info */}
            <Card className="md:col-span-1 overflow-hidden border-none shadow-lg">
              <div className="bg-gradient-to-br from-burgundy-600 to-burgundy-800 pt-8 pb-4 px-4 text-white text-center">
                <div className="relative mx-auto mb-4">
                  <Avatar className="w-32 h-32 mx-auto border-4 border-white shadow-lg">
                    {userData.profileImage ? (
                      <AvatarImage src={userData.profileImage} alt={userData.name} />
                    ) : (
                      <AvatarFallback className="bg-burgundy-100 text-burgundy-700 text-4xl font-medium">
                        {getUserInitials()}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <Button
                    size="icon"
                    className="absolute bottom-0 right-1/3 bg-white text-burgundy-600 hover:bg-gray-100 rounded-full h-8 w-8 shadow-md"
                    onClick={handleProfilePictureUpload}
                  >
                    <Camera className="h-4 w-4" />
                    <span className="sr-only">Upload photo</span>
                  </Button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
                <h2 className="text-xl font-semibold">
                  {userData.name}, {userData.age}
                </h2>
                <p className="text-burgundy-100">{userData.location}</p>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Contact Information</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="bg-burgundy-50 p-2 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-burgundy-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <span className="text-sm">{userData.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-burgundy-50 p-2 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-burgundy-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <span className="text-sm">{userData.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Basic Details</h3>
                    <div className="mt-2 grid grid-cols-2 gap-y-2 text-sm">
                      <span className="text-gray-500">Date of Birth:</span>
                      <span>{userData.dateOfBirth}</span>
                      <span className="text-gray-500">Religion:</span>
                      <span>{userData.religion}</span>
                      <span className="text-gray-500">Mother Tongue:</span>
                      <span>{userData.motherTongue}</span>
                      <span className="text-gray-500">Marital Status:</span>
                      <span>{userData.maritalStatus}</span>
                      <span className="text-gray-500">Height:</span>
                      <span>{userData.height}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Professional Details</h3>
                    <div className="mt-2 grid grid-cols-2 gap-y-2 text-sm">
                      <span className="text-gray-500">Occupation:</span>
                      <span>{userData.occupation}</span>
                      <span className="text-gray-500">Company:</span>
                      <span>{userData.company}</span>
                      <span className="text-gray-500">Education:</span>
                      <span>{userData.education}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right Column - About & Edit Form */}
            <Card className="md:col-span-2 border-none shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-burgundy-50 to-cream-100 border-b">
                <div>
                  <CardTitle>About Me</CardTitle>
                </div>
                <Button
                  variant={isEditing ? "ghost" : "outline"}
                  onClick={() => (isEditing ? handleSaveProfile() : setIsEditing(true))}
                  className={isEditing ? "bg-burgundy-600 text-white hover:bg-burgundy-700" : ""}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
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
                      Saving...
                    </div>
                  ) : isEditing ? (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Profile
                    </>
                  ) : (
                    <>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </>
                  )}
                </Button>
              </CardHeader>
              <CardContent className="p-6">
                {isEditing ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={userData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          type="number"
                          value={userData.age}
                          onChange={(e) => handleInputChange("age", Number.parseInt(e.target.value))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={userData.dateOfBirth}
                          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select value={userData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                          <SelectTrigger id="gender">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={userData.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="religion">Religion</Label>
                        <Select
                          value={userData.religion}
                          onValueChange={(value) => handleInputChange("religion", value)}
                        >
                          <SelectTrigger id="religion">
                            <SelectValue placeholder="Select religion" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Hindu">Hindu</SelectItem>
                            <SelectItem value="Muslim">Muslim</SelectItem>
                            <SelectItem value="Christian">Christian</SelectItem>
                            <SelectItem value="Sikh">Sikh</SelectItem>
                            <SelectItem value="Jain">Jain</SelectItem>
                            <SelectItem value="Buddhist">Buddhist</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="motherTongue">Mother Tongue</Label>
                        <Select
                          value={userData.motherTongue}
                          onValueChange={(value) => handleInputChange("motherTongue", value)}
                        >
                          <SelectTrigger id="motherTongue">
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Hindi">Hindi</SelectItem>
                            <SelectItem value="Bengali">Bengali</SelectItem>
                            <SelectItem value="Telugu">Telugu</SelectItem>
                            <SelectItem value="Marathi">Marathi</SelectItem>
                            <SelectItem value="Tamil">Tamil</SelectItem>
                            <SelectItem value="Gujarati">Gujarati</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="maritalStatus">Marital Status</Label>
                        <Select
                          value={userData.maritalStatus}
                          onValueChange={(value) => handleInputChange("maritalStatus", value)}
                        >
                          <SelectTrigger id="maritalStatus">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Never Married">Never Married</SelectItem>
                            <SelectItem value="Divorced">Divorced</SelectItem>
                            <SelectItem value="Widowed">Widowed</SelectItem>
                            <SelectItem value="Separated">Separated</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="height">Height</Label>
                        <Input
                          id="height"
                          value={userData.height}
                          onChange={(e) => handleInputChange("height", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="occupation">Occupation</Label>
                      <Input
                        id="occupation"
                        value={userData.occupation}
                        onChange={(e) => handleInputChange("occupation", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        value={userData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="education">Education</Label>
                      <Input
                        id="education"
                        value={userData.education}
                        onChange={(e) => handleInputChange("education", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={userData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={userData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="about">About Me</Label>
                      <Textarea
                        id="about"
                        rows={5}
                        value={userData.about}
                        onChange={(e) => handleInputChange("about", e.target.value)}
                        placeholder="Tell others about yourself, your interests, and what you're looking for..."
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed">{userData.about}</p>
                    </div>
                  </div>
                )}
              </CardContent>
              {isEditing && (
                <CardFooter className="flex justify-end space-x-4 border-t bg-gray-50 p-4">
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSaveProfile}
                    disabled={isLoading}
                    className="bg-burgundy-600 hover:bg-burgundy-700 text-white"
                  >
                    {isLoading ? "Saving..." : "Save Changes"}
                  </Button>
                </CardFooter>
              )}
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

