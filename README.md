# 🚀 Collaboration Platform (Trello-style)

A full-stack **team collaboration web application** built using **Angular + NestJS + PostgreSQL (Neon)**.
This project replicates core features of tools like **Trello / Jira**, enabling teams to manage workspaces, boards, tasks, and collaboration in real time.

---

## 🧠 Features

### 🔐 Authentication

* Email & Password login
* JWT-based authentication
* Google OAuth login
* Protected routes

### 🏢 Workspace Management

* Create and manage workspaces
* Invite users via email
* Workspace member roles

### 📋 Boards & Lists

* Create boards inside workspaces
* Organize work using lists (columns)
* Structured task hierarchy

### ✅ Task Management

* Create, update, and delete tasks
* Task details:

  * Description
  * Priority
  * Status
  * Due Date

### 👥 Collaboration

* Assign tasks to users
* View workspace members
* Multi-user support

### 📊 Activity Feed

* Track all actions:

  * Task created
  * Task updated
  * Task assigned
* Real-time collaboration visibility

---

## 🏗️ Tech Stack

### Frontend

* Angular 16
* Angular Material
* RxJS
* TypeScript

### Backend

* NestJS
* Prisma ORM
* PostgreSQL (Neon DB)
* JWT Authentication
* Passport.js

### Database

* Neon (Serverless PostgreSQL)

---

## 📂 Project Structure

```
collaboration/
│
├── backend/        # NestJS API
│   ├── src/
│   ├── prisma/
│   └── package.json
│
├── frontend/       # Angular App
│   ├── src/
│   └── angular.json
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/YOUR_USERNAME/collaboration.git
cd collaboration
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env`:

```
DATABASE_URL=your_neon_database_url
JWT_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_secret
```

Run migrations:

```
npx prisma migrate dev
```

Start backend:

```
npm run start:dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
ng serve
```

App will run at:

```
http://localhost:4200
```

---

## 🔗 API Overview

### Auth

* `POST /auth/register`
* `POST /auth/login`
* `GET /auth/profile`

### Workspace

* `POST /workspace`
* `GET /workspace`

### Boards

* `POST /board`
* `GET /board/:workspaceId`

### Tasks

* `POST /task`
* `PATCH /task/:taskId`
* `PATCH /task/:taskId/assign`

### Activity

* `GET /activity/workspace/:workspaceId`

---

## 📸 Screenshots (Optional)

*TODO

---

## 🚀 Future Improvements

* 🔔 Notifications system
* 📈 Dashboard analytics
* 🔍 Search & filters
* 📡 Real-time updates (WebSockets)
* 🎨 Improved UI/UX

---

## 💡 Key Learnings

* Full-stack architecture (Angular + NestJS)
* Scalable backend design with Prisma
* Authentication & authorization flows
* Real-world collaboration system design
* State management & API integration

---

## 👨‍💻 Author

**Kanishk Verma**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub — it helps a lot!
