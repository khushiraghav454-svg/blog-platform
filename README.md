Blog Platform

A simple Blog Platform built with ReactJS for frontend and Node.js + Express + MongoDB for backend. Users can register, login, create posts, and view posts.

Features

User registration and login with JWT authentication

Create, read, update, and delete blog posts (CRUD)

View all posts on the home page

Profile page shows logged-in user's name

JWT token automatically used for authenticated API requests

Fully responsive and beginner-friendly

Project Structure
blog-platform/
├─ backend/          # Node.js + Express backend
│  ├─ models/        # MongoDB schemas
│  ├─ routes/        # API routes for auth and posts
│  ├─ controllers/   # Business logic
│  └─ server.js      # Entry point
│
├─ frontend/         # ReactJS frontend
│  ├─ src/
│  │  ├─ pages/      # Login, Register, Home, CreatePost, Profile
│  │  ├─ services/   # Axios API calls
│  │  ├─ context/    # AuthContext for user management
│  │  └─ App.js
│  └─ package.json
│
├─ .gitignore        # Node modules, build files, .env
└─ README.md
Installation
Backend

Go to the backend folder:

cd backend

Install dependencies:

npm install

Create a .env file with:

PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>

Start the server:

npm run dev

Backend runs on http://localhost:5000.

Frontend

Go to the frontend folder:

cd frontend

Install dependencies:

npm install

Start the frontend:

npm start

Frontend runs on http://localhost:3000.

API Endpoints
Method	Route	Description	Auth Required
POST	/api/auth/register	Register a new user	No
POST	/api/auth/login	Login user, returns JWT token	No
GET	/api/posts	Get all posts	No
POST	/api/posts	Create a new post	Yes
GET	/api/posts/:id	Get a single post by ID	No
PUT	/api/posts/:id	Update a post	Yes
DELETE	/api/posts/:id	Delete a post	Yes

JWT token should be included in request headers as:

Authorization: Bearer <your_token_here>
Using Postman

Register a user:

POST http://localhost:5000/api/auth/register

Body (JSON):

{
  "name": "Khushi",
  "email": "khushi223@gmail.com",
  "password": "12345446"
}

Login:

POST http://localhost:5000/api/auth/login

Body (JSON):

{
  "email": "khushi223@gmail.com",
  "password": "123456"
}

Copy the token from the response

Create Post:

POST http://localhost:5000/api/posts

Headers: Authorization: Bearer <token>

Body (JSON):

{
  "title": "My First Post",
  "content": "Hello world!"
}

View Posts:

GET http://localhost:5000/api/posts
