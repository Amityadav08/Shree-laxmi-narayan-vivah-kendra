"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { PlusCircle, Search, UserPlus, Users, Activity, Calendar, ChevronLeft, ChevronRight } from "lucide-react"

export default function AdminDashboard() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  // Mock data for dashboard
  const dashboardStats = {
    totalUsers: 1245,
    newUsersToday: 28,
    activeUsers: 876,
    premiumUsers: 342,
    recentUsers: [
      { id: 1, name: "Priya Sharma", email: "priya.s@example.com", joinDate: "2023-05-15", status: "active" },
      { id: 2, name: "Vikram Patel", email: "vikram.p@example.com", joinDate: "2023-05-14", status: "active" },
      { id: 3, name: "Ananya Singh", email: "ananya.s@example.com", joinDate: "2023-05-14", status: "pending" },
      { id: 4, name: "Rajesh Kumar", email: "rajesh.k@example.com", joinDate: "2023-05-13", status: "active" },
      { id: 5, name: "Neha Gupta", email: "neha.g@example.com", joinDate: "2023-05-13", status: "inactive" },
    ],
  }

  // Mock data for users
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya.s@example.com",
      phone: "+91 9876543210",
      gender: "Female",
      location: "Mumbai",
      joinDate: "2023-05-15",
      status: "active",
    },
    {
      id: 2,
      name: "Vikram Patel",
      email: "vikram.p@example.com",
      phone: "+91 9876543211",
      gender: "Male",
      location: "Delhi",
      joinDate: "2023-05-14",
      status: "active",
    },
    {
      id: 3,
      name: "Ananya Singh",
      email: "ananya.s@example.com",
      phone: "+91 9876543212",
      gender: "Female",
      location: "Bangalore",
      joinDate: "2023-05-14",
      status: "pending",
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      email: "rajesh.k@example.com",
      phone: "+91 9876543213",
      gender: "Male",
      location: "Chennai",
      joinDate: "2023-05-13",
      status: "active",
    },
    {
      id: 5,
      name: "Neha Gupta",
      email: "neha.g@example.com",
      phone: "+91 9876543214",
      gender: "Female",
      location: "Kolkata",
      joinDate: "2023-05-13",
      status: "inactive",
    },
    {
      id: 6,
      name: "Amit Verma",
      email: "amit.v@example.com",
      phone: "+91 9876543215",
      gender: "Male",
      location: "Pune",
      joinDate: "2023-05-12",
      status: "active",
    },
    {
      id: 7,
      name: "Kavita Joshi",
      email: "kavita.j@example.com",
      phone: "+91 9876543216",
      gender: "Female",
      location: "Hyderabad",
      joinDate: "2023-05-12",
      status: "active",
    },
    {
      id: 8,
      name: "Sanjay Mehta",
      email: "sanjay.m@example.com",
      phone: "+91 9876543217",
      gender: "Male",
      location: "Ahmedabad",
      joinDate: "2023-05-11",
      status: "inactive",
    },
    {
      id: 9,
      name: "Pooja Reddy",
      email: "pooja.r@example.com",
      phone: "+91 9876543218",
      gender: "Female",
      location: "Jaipur",
      joinDate: "2023-05-11",
      status: "active",
    },
    {
      id: 10,
      name: "Rahul Sharma",
      email: "rahul.s@example.com",
      phone: "+91 9876543219",
      gender: "Male",
      location: "Lucknow",
      joinDate: "2023-05-10",
      status: "active",
    },
  ])

  // New user form state
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "Male",
    location: "",
    status: "active",
  })

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Pagination
  const usersPerPage = 5
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage)
  const paginatedUsers = filteredUsers.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage)

  const handleAddUser = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Add new user to the list
      const id = users.length + 1
      const joinDate = new Date().toISOString().split("T")[0]

      setUsers([{ id, joinDate, ...newUser }, ...users])

      // Reset form
      setNewUser({
        name: "",
        email: "",
        phone: "",
        gender: "Male",
        location: "",
        status: "active",
      })

      setIsLoading(false)
      setIsAddUserDialogOpen(false)

      toast({
        title: "User Added",
        description: "The new user has been added successfully.",
      })
    }, 1000)
  }

  const handleInputChange = (field, value) => {
    setNewUser((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const getUserInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-burgundy-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage users and view statistics</p>
          </div>

          <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Total Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-burgundy-600 mr-2" />
                      <span className="text-2xl font-bold">{dashboardStats.totalUsers}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">New Users Today</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <UserPlus className="h-5 w-5 text-burgundy-600 mr-2" />
                      <span className="text-2xl font-bold">{dashboardStats.newUsersToday}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Active Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Activity className="h-5 w-5 text-burgundy-600 mr-2" />
                      <span className="text-2xl font-bold">{dashboardStats.activeUsers}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Premium Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-burgundy-600 mr-2" />
                      <span className="text-2xl font-bold">{dashboardStats.premiumUsers}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Users</CardTitle>
                  <CardDescription>Users who recently joined the platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Join Date</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {dashboardStats.recentUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.joinDate}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(user.status)}`}>
                              {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users">
              <div className="flex justify-between items-center mb-6">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search users..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Dialog open={isAddUserDialogOpen} onOpenChange={setIsAddUserDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-burgundy-600 hover:bg-burgundy-700">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add User
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New User</DialogTitle>
                      <DialogDescription>Fill in the details to add a new user to the platform.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={newUser.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={newUser.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phone" className="text-right">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          value={newUser.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="gender" className="text-right">
                          Gender
                        </Label>
                        <Select value={newUser.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                          <SelectTrigger id="gender" className="col-span-3">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="location" className="text-right">
                          Location
                        </Label>
                        <Input
                          id="location"
                          value={newUser.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="status" className="text-right">
                          Status
                        </Label>
                        <Select value={newUser.status} onValueChange={(value) => handleInputChange("status", value)}>
                          <SelectTrigger id="status" className="col-span-3">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsAddUserDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleAddUser} disabled={isLoading}>
                        {isLoading ? "Adding..." : "Add User"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Join Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-9 w-9">
                                <AvatarFallback className="bg-burgundy-100 text-burgundy-700">
                                  {getUserInitials(user.name)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{user.name}</div>
                                <div className="text-xs text-gray-500">{user.gender}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">{user.email}</div>
                            <div className="text-xs text-gray-500">{user.phone}</div>
                          </TableCell>
                          <TableCell>{user.location}</TableCell>
                          <TableCell>{user.joinDate}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(user.status)}`}>
                              {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <div className="text-sm text-gray-500">
                    Showing <span className="font-medium">{(currentPage - 1) * usersPerPage + 1}</span> to{" "}
                    <span className="font-medium">{Math.min(currentPage * usersPerPage, filteredUsers.length)}</span> of{" "}
                    <span className="font-medium">{filteredUsers.length}</span> users
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous Page</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next Page</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

