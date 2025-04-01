"use client"

import { useState, ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { User } from "lucide-react"

interface FormData {
  name: string
  email: string
  password: string
  age: string
  gender: string
  location: string
  education: string
  occupation: string
  religion: string
  motherTongue: string
  maritalStatus: string
  profileImage: File | null
}

export default function SignupForm() {
  const [step, setStep] = useState(1)
  const { toast } = useToast()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    location: "",
    education: "",
    occupation: "",
    religion: "",
    motherTongue: "",
    maritalStatus: "",
    profileImage: null
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    location: "",
    education: "",
    occupation: "",
    religion: "",
    motherTongue: "",
    maritalStatus: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target
    if (name === 'profileImage' && files && files[0]) {
      const file = files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
        setFormData(prev => ({
          ...prev,
          profileImage: file
        }))
      }
      reader.readAsDataURL(file)
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  const validateStep = (currentStep: number) => {
    const newErrors = { ...errors }
    let isValid = true

    if (currentStep === 1) {
      if (!formData.name) {
        newErrors.name = "Name is required"
        isValid = false
      }

      if (!formData.email) {
        newErrors.email = "Email is required"
        isValid = false
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid"
        isValid = false
      }

      if (!formData.password) {
        newErrors.password = "Password is required"
        isValid = false
      } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters"
        isValid = false
      }

      if (!formData.age) {
        newErrors.age = "Age is required"
        isValid = false
      }

      if (!formData.gender) {
        newErrors.gender = "Gender is required"
        isValid = false
      }
    } else if (currentStep === 2) {
      if (!formData.location) {
        newErrors.location = "Location is required"
        isValid = false
      }

      if (!formData.education) {
        newErrors.education = "Education is required"
        isValid = false
      }

      if (!formData.occupation) {
        newErrors.occupation = "Occupation is required"
        isValid = false
      }
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (step < 3) {
      if (validateStep(step)) {
        setStep(step + 1)
      }
    } else {
      setIsLoading(true)
      
      try {
        const formDataToSend = new FormData()
        Object.entries(formData).forEach(([key, value]) => {
          if (value !== null && value !== undefined) {
            formDataToSend.append(key, value)
          }
        })

        const response = await fetch('/api/auth/register', {
          method: 'POST',
          body: formDataToSend
        })

        if (!response.ok) {
          const data = await response.json()
          toast({
            title: "Registration Failed",
            description: data.message || "There was an error creating your account",
            variant: "destructive"
          })
          return
        }

        const data = await response.json()
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("userData", JSON.stringify({
          name: formData.name,
          email: formData.email,
          profileImage: data.profileImageUrl || ""
        }))

        toast({
          title: "Registration Successful",
          description: "Welcome to Shree Laxminarayan Vivah Kendra!",
        })

        router.push("/search")
      } catch (err) {
        toast({
          title: "Registration Failed",
          description: "An unexpected error occurred",
          variant: "destructive"
        })
      } finally {
        setIsLoading(false)
      }
    }
  }

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`rounded-full h-8 w-8 flex items-center justify-center ${
                s === step
                  ? "bg-burgundy-600 text-white"
                  : s < step
                    ? "bg-green-100 text-green-600 border border-green-600"
                    : "bg-gray-100 text-gray-400"
              }`}
            >
              {s < step ? "✓" : s}
            </div>
            {s < 3 && <div className={`h-1 w-10 ${s < step ? "bg-burgundy-600" : "bg-gray-200"}`}></div>}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">Join Shree Laxminarayan Vivah Kendra and find your perfect match</p>
        </motion.div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-gray-100">
            {renderStepIndicator()}

            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <div className="flex items-center space-x-4 mb-4">
                      {previewImage ? (
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={previewImage}
                            alt="Profile preview"
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                          <User className="h-8 w-8 text-gray-500" />
                        </div>
                      )}
                      <label className="cursor-pointer">
                        <span className="text-sm font-medium text-burgundy-600 hover:text-burgundy-700">
                          Upload Photo
                        </span>
                        <input
                          type="file"
                          name="profileImage"
                          accept="image/*"
                          onChange={handleChange}
                          className="hidden"
                          disabled={isLoading}
                        />
                      </label>
                    </div>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-red-500" : ""}
                      disabled={isLoading}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  {/* Rest of the form fields remain the same */}
                  {/* ... */}
                </motion.div>
              )}

              {/* Steps 2 and 3 remain unchanged */}
              {/* ... */}

              <div className="flex justify-between">
                {step > 1 && (
                  <Button type="button" variant="outline" onClick={() => setStep(step - 1)} disabled={isLoading}>
                    Previous
                  </Button>
                )}
                <Button
                  type="submit"
                  className={`${step === 1 ? "w-full" : ""} bg-burgundy-600 hover:bg-burgundy-700`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
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
                      {step < 3 ? "Processing..." : "Creating Account..."}
                    </div>
                  ) : step < 3 ? (
                    "Next"
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-burgundy-600 hover:text-burgundy-500 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
