"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

const Dashboard = () => {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    age: "28",
    location: "New York, USA",
    occupation: "Software Engineer",
    education: "Master's Degree",
    religion: "Christian",
    diet: "Non-vegetarian",
    smoking: "Non-smoker",
    drinking: "Social drinker",
  })

  const [searchParams, setSearchParams] = useState({
    ageRange: [25, 35],
    location: "",
    religion: "",
    nationality: "",
    education: "",
    occupation: "",
    diet: "",
    smoking: "",
    drinking: "",
    hasPhoto: false,
  })

  const { toast } = useToast()

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value })
  }

  const handleProfileSelectChange = (name: string, value: string) => {
    setProfileData({ ...profileData, [name]: value })
  }

  const handleSearchChange = (name: string, value: any) => {
    setSearchParams({ ...searchParams, [name]: value })
  }

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Profile updated:", profileData)
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    })
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Search params:", searchParams)
    toast({
      title: "Search Initiated",
      description: "Searching for matches based on your criteria.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome, {profileData.name}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
          <form onSubmit={handleProfileSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" type="text" value={profileData.name} onChange={handleProfileChange} />
            </div>
            <div>
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" type="text" value={profileData.age} onChange={handleProfileChange} />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                type="text"
                value={profileData.location}
                onChange={handleProfileChange}
              />
            </div>
            <div>
              <Label htmlFor="occupation">Occupation</Label>
              <Input
                id="occupation"
                name="occupation"
                type="text"
                value={profileData.occupation}
                onChange={handleProfileChange}
              />
            </div>
            <div>
              <Label htmlFor="education">Education</Label>
              <Input
                id="education"
                name="education"
                type="text"
                value={profileData.education}
                onChange={handleProfileChange}
              />
            </div>
            <div>
              <Label htmlFor="religion">Religion</Label>
              <Select onValueChange={(value) => handleProfileSelectChange("religion", value)}>
                <SelectTrigger>
                  <SelectValue placeholder={profileData.religion} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="christian">Christian</SelectItem>
                  <SelectItem value="hindu">Hindu</SelectItem>
                  <SelectItem value="muslim">Muslim</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="diet">Dietary Preference</Label>
              <Select onValueChange={(value) => handleProfileSelectChange("diet", value)}>
                <SelectTrigger>
                  <SelectValue placeholder={profileData.diet} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="non-vegetarian">Non-vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="smoking">Smoking Habits</Label>
              <Select onValueChange={(value) => handleProfileSelectChange("smoking", value)}>
                <SelectTrigger>
                  <SelectValue placeholder={profileData.smoking} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="non-smoker">Non-smoker</SelectItem>
                  <SelectItem value="social-smoker">Social smoker</SelectItem>
                  <SelectItem value="regular-smoker">Regular smoker</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="drinking">Drinking Habits</Label>
              <Select onValueChange={(value) => handleProfileSelectChange("drinking", value)}>
                <SelectTrigger>
                  <SelectValue placeholder={profileData.drinking} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="non-drinker">Non-drinker</SelectItem>
                  <SelectItem value="social-drinker">Social drinker</SelectItem>
                  <SelectItem value="regular-drinker">Regular drinker</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit">Update Profile</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Advanced Search</h2>
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <Label htmlFor="ageRange">Age Range</Label>
              <Slider
                min={18}
                max={70}
                step={1}
                value={searchParams.ageRange}
                onValueChange={(value) => handleSearchChange("ageRange", value)}
              />
              <p className="text-sm text-gray-500 mt-1">
                {searchParams.ageRange[0]} - {searchParams.ageRange[1]} years
              </p>
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                type="text"
                value={searchParams.location}
                onChange={(e) => handleSearchChange("location", e.target.value)}
                placeholder="City, Country"
              />
            </div>
            <div>
              <Label htmlFor="religion">Religion</Label>
              <Select onValueChange={(value) => handleSearchChange("religion", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select religion" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any</SelectItem>
                  <SelectItem value="christian">Christian</SelectItem>
                  <SelectItem value="hindu">Hindu</SelectItem>
                  <SelectItem value="muslim">Muslim</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="nationality">Nationality</Label>
              <Input
                id="nationality"
                name="nationality"
                type="text"
                value={searchParams.nationality}
                onChange={(e) => handleSearchChange("nationality", e.target.value)}
                placeholder="e.g., American, Indian, etc."
              />
            </div>
            <div>
              <Label htmlFor="education">Education</Label>
              <Select onValueChange={(value) => handleSearchChange("education", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select education level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any</SelectItem>
                  <SelectItem value="high-school">High School</SelectItem>
                  <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                  <SelectItem value="masters">Master's Degree</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="occupation">Occupation</Label>
              <Input
                id="occupation"
                name="occupation"
                type="text"
                value={searchParams.occupation}
                onChange={(e) => handleSearchChange("occupation", e.target.value)}
                placeholder="e.g., Engineer, Doctor, etc."
              />
            </div>
            <div>
              <Label htmlFor="diet">Dietary Preference</Label>
              <Select onValueChange={(value) => handleSearchChange("diet", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select dietary preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any</SelectItem>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="non-vegetarian">Non-vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="smoking">Smoking Habits</Label>
              <Select onValueChange={(value) => handleSearchChange("smoking", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select smoking habits" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any</SelectItem>
                  <SelectItem value="non-smoker">Non-smoker</SelectItem>
                  <SelectItem value="social-smoker">Social smoker</SelectItem>
                  <SelectItem value="regular-smoker">Regular smoker</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="drinking">Drinking Habits</Label>
              <Select onValueChange={(value) => handleSearchChange("drinking", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select drinking habits" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any</SelectItem>
                  <SelectItem value="non-drinker">Non-drinker</SelectItem>
                  <SelectItem value="social-drinker">Social drinker</SelectItem>
                  <SelectItem value="regular-drinker">Regular drinker</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="hasPhoto"
                checked={searchParams.hasPhoto}
                onCheckedChange={(checked) => handleSearchChange("hasPhoto", checked)}
              />
              <Label htmlFor="hasPhoto">Only show profiles with photos</Label>
            </div>
            <Button type="submit">Search Matches</Button>
          </form>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Your Matches</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white shadow rounded-lg p-4 flex items-center space-x-4">
              <Image src={`/placeholder.svg`} alt={`Match ${i}`} width={60} height={60} className="rounded-full" />
              <div>
                <h3 className="font-semibold">Match {i}</h3>
                <p className="text-sm text-gray-500">
                  Age: 2{i}, Location: City {i}
                </p>
                <p className="text-sm text-gray-500">Occupation: Professional {i}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard

