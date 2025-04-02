"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X, User, LogOut, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Montserrat } from "next/font/google"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const montserrat = Montserrat({ subsets: ["latin"] })

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentSection, setCurrentSection] = useState("/")
  // Add state to track if user is logged in (for demo purposes)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // User data state
  const [userData, setUserData] = useState<{
    name: string
    email?: string
    profileImage: string | null
  }>({
    name: "Rahul Sharma",
    email: undefined,
    profileImage: null,
  })
  const router = useRouter()

  // Check login status and listen for changes
  useEffect(() => {
    const checkLoginStatus = () => {
      const isUserLoggedIn = localStorage.getItem("isLoggedIn") === "true"
      setIsLoggedIn(isUserLoggedIn)

      const storedUserData = localStorage.getItem("userData")
      if (storedUserData) {
        setUserData((prev) => ({
          ...prev,
          ...JSON.parse(storedUserData),
        }))
      }
    }

    // Check immediately
    checkLoginStatus()

    // Listen for storage events to handle auth changes from other tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "isLoggedIn" || e.key === "userData") {
        checkLoginStatus()
      }
    }

    // Listen for custom auth events from same tab
    const handleAuthEvent = () => checkLoginStatus()

    window.addEventListener("storage", handleStorageChange)
    window.addEventListener("auth", handleAuthEvent)

    // Cleanup
    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("auth", handleAuthEvent)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    setCurrentSection(window.location.pathname)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (!userData.name) return "U"
    return userData.name
      .split(" ")
      .map((name) => name[0])
      .join("")
      .toUpperCase()
  }

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false")
    localStorage.removeItem("authToken")
    localStorage.removeItem("userData")
    setIsLoggedIn(false)
    window.dispatchEvent(new Event("auth"))
    router.push("/")
  }

  const navItems = ["Home", "About", "Pricing", "Search"]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        montserrat.className,
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-sm" : "bg-white",
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm">
          <Image
            src="/logo2c1.jpg"
            alt="Shree Laxminarayan Vivah Kendra "
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={cn(
                "relative px-2 py-1 text-base font-medium text-gray-800 hover:text-burgundy-600 transition-all duration-200",
                "after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5",
                "after:bg-gradient-to-r after:from-burgundy-600 after:to-gold-400",
                "after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300",
                "hover:after:scale-x-100 hover:text-burgundy-600",
                currentSection === (item === "Home" ? "/" : `/${item.toLowerCase()}`) &&
                  "text-burgundy-600 after:scale-x-100",
              )}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-6">
          {isLoggedIn ? (
            /* Profile Avatar and Dropdown when logged in */
            <div className="flex items-center space-x-4">
              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 hover:bg-transparent">
                    <Avatar className="h-10 w-10 cursor-pointer transition-all duration-200 ring-2 ring-transparent hover:ring-burgundy-300">
                      {userData.profileImage ? (
                        <AvatarImage
                          src={userData.profileImage.startsWith('http') ?
                            userData.profileImage :
                            `http://localhost:5000${userData.profileImage}`}
                          alt={userData.name}
                        />
                      ) : (
                        <AvatarFallback className="bg-burgundy-100 text-burgundy-700 font-medium">
                          {getUserInitials()}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{userData.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {userData.email || "user@example.com"}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/profile")}>
                    <User className="mr-2 h-4 w-4" />
                    <span>My Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/settings")}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  {/* Admin link for demo purposes */}
                  <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/admin")}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Admin Dashboard</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-red-600" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            /* Auth Buttons when not logged in */
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                asChild
                className="border-burgundy-600 text-burgundy-600 hover:bg-burgundy-50 font-medium"
              >
                <Link href="/login">Log In</Link>
              </Button>
              <Button
                asChild
                className="bg-burgundy-600 hover:bg-burgundy-700 font-medium shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          {isLoggedIn && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="relative">
                  <Avatar className="h-8 w-8 cursor-pointer">
                    {userData.profileImage ? (
                      <AvatarImage src={userData.profileImage} alt={userData.name} />
                    ) : (
                      <AvatarFallback className="bg-burgundy-100 text-burgundy-700 font-medium text-xs">
                        {getUserInitials()}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{userData.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{userData.email || "user@example.com"}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/profile")}>
                  <User className="mr-2 h-4 w-4" />
                  <span>My Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/admin")}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Admin Dashboard</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-600" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="text-burgundy-600 hover:bg-burgundy-50"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-[400px] border-t border-gray-100" : "max-h-0",
        )}
      >
        <nav className="bg-white flex flex-col py-4 px-6">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={cn(
                "py-3 text-base font-medium text-gray-800 hover:text-burgundy-600 transition-colors",
                currentSection === (item === "Home" ? "/" : `/${item.toLowerCase()}`) && "text-burgundy-600",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100 mt-4">
            {isLoggedIn ? (
              <>
                <Button asChild className="w-full bg-burgundy-600 hover:bg-burgundy-700">
                  <Link href="/profile">My Profile</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/admin">Admin Dashboard</Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-red-600 border-red-200 hover:bg-red-50"
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  asChild
                  className="w-full border-burgundy-600 text-burgundy-600 hover:bg-burgundy-50"
                >
                  <Link href="/login">Log In</Link>
                </Button>
                <Button asChild className="w-full bg-burgundy-600 hover:bg-burgundy-700">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
