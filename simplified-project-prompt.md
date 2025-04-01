Build "Shree Laxmi Narayan Vivah Kendra" - A Simple Matrimonial Website

Database URI: mongodb+srv://amityadav04866:j4WqKeAqutbFTQZF@cluster1.c8qhs5v.mongodb.net/

Tech Stack:
- Frontend: React.js
- Backend: Express.js + Node.js
- Database: MongoDB
- Styling: Tailwind CSS + shadcn/ui
- Forms: React Hook Form

Core Pages & Features:

1. Home Page (/):
- Hero section with traditional Indian wedding image
- Registration button
- About section highlighting traditional values
- Services offered
- Contact section
- Hindu matrimonial-themed design elements

2. Authentication:
a) Login (/login):
```javascript
{
  email: String,
  password: String
}
```

b) Registration (/register):
```javascript
{
  name: String,
  email: String,
  password: String,
  phone: String,
  gender: String,
  age: Number,
  gotra: String,
  birthPlace: String,
  education: String,
  occupation: String,
  income: String,
  address: String,
  photo: File
}
```

3. Profile Page (/profile):
- Personal Information:
  - Name
  - Age
  - Gotra
  - Birth Place
  - Education
  - Occupation
  - Income
  - Address
- Family Information:
  - Father's Name
  - Mother's Name
  - Family Occupation
- Profile Photo
- Horoscope Details (optional)

4. Search Page (/search):
- Filters:
  - Age Range
  - Education
  - Occupation
  - Gotra
  - Location
- Simple grid of profiles
- Basic pagination

5. Admin Dashboard (/admin):
- User Management
- Profile Approvals
- Basic Statistics

Database Schema:

1. User Model:
```javascript
{
  name: String,
  email: String,
  password: String,
  phone: String,
  gender: String,
  age: Number,
  gotra: String,
  birthPlace: String,
  education: String,
  occupation: String,
  income: String,
  address: String,
  photo: String,
  familyDetails: {
    fatherName: String,
    motherName: String,
    familyOccupation: String
  },
  isAdmin: Boolean,
  isApproved: Boolean,
  createdAt: Date
}
```

API Routes:

1. Auth Routes:
```javascript
POST /api/auth/register
POST /api/auth/login
```

2. Profile Routes:
```javascript
GET /api/profile/:id
PUT /api/profile/update
POST /api/profile/upload-photo
```

3. Search Routes:
```javascript
GET /api/search
```

4. Admin Routes:
```javascript
GET /api/admin/users
PUT /api/admin/approve/:id
DELETE /api/admin/user/:id
```

Frontend Components:
1. Shared:
- Navbar
- Footer
- Form Inputs
- Profile Card
- Loading Spinner
- Alert Messages

2. Pages:
- Home
- Login/Register
- Profile
- Search
- Admin Dashboard

Key Features:
1. User Authentication
2. Profile Management
3. Basic Search
4. Admin Controls
5. Photo Upload

Environment Setup:
```javascript
// .env
MONGODB_URI=mongodb+srv://amityadav04866:j4WqKeAqutbFTQZF@cluster1.c8qhs5v.mongodb.net/
JWT_SECRET=your_secret_key
PORT=5000
```

Design Focus:
- Traditional Indian matrimonial theme
- Red and gold color scheme
- Easy-to-use interface
- Mobile responsive
- Clean and professional look

Additional Notes:
- Keep forms simple and user-friendly
- Include traditional Indian matrimonial fields
- Focus on basic functionality first
- Implement proper form validations
- Add loading states for better UX
- Include error handling