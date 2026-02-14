# 🚀 Work-Space

### A Jira-Inspired Full Stack Project Management Platform

Work-Space is a cloud-deployed, scalable project management application inspired by Jira. It enables teams to manage projects, tasks, priorities, and collaboration in a secure, role-based environment.

Built using modern full-stack architecture and deployed fully on AWS infrastructure.

---

# 🌐 Live Architecture Overview

Frontend (Amplify)
⬇
API Gateway
⬇
EC2 (Express + Prisma)
⬇
RDS PostgreSQL
⬇
S3 (File Storage)
⬇
Cognito (Authentication)

---

# 🧱 Technology Stack

## 🎨 Frontend

* **Next.js (App Router)**
* **Tailwind CSS**
* **Redux Toolkit**
* **Redux Toolkit Query**
* **Material UI Data Grid**
* AWS Amplify (Hosting)

## 🖥 Backend

* **Node.js**
* **Express**
* **Prisma ORM**
* RESTful API Architecture

## 🗄 Database

* **PostgreSQL**
* Managed via **AWS RDS**
* Administered using **PgAdmin**

## ☁ Cloud Infrastructure

* **AWS EC2** (Backend Hosting)
* **AWS RDS** (Managed PostgreSQL)
* **AWS API Gateway** (Public API Layer)
* **AWS Amplify** (Frontend Deployment)
* **AWS S3** (File Storage for Attachments)
* **AWS Lambda** (Cognito Trigger Integration)
* **AWS Cognito** (Authentication & Authorization)

---

# 🔐 Authentication Flow

* User signs in via AWS Cognito
* Cognito returns JWT access token
* Frontend attaches Bearer token in API requests
* Backend verifies and syncs user with database
* If user does not exist → auto-created with incremental `userId`

---

# 📌 Core Features

### ✅ User Authentication

* Secure login via AWS Cognito
* Automatic user database synchronization
* Role-ready architecture

### 📊 Project Management

* Create and manage projects
* Start & due dates
* Team association

### 🗂 Task Management

* Drag-and-drop Kanban board
* Task priority (Urgent, High, Medium, Low, Backlog)
* Status tracking (To Do, In Progress, Under Review, Completed)
* Assign authors and assignees

### 📈 Priority Views

* Dedicated pages for filtering tasks by priority
* List view
* Table view (Material UI Data Grid)

### 👥 Team Support

* Team-based project grouping
* Product Owner & Project Manager roles

### 📎 Attachments & Comments

* File upload to S3
* Task discussion threads

### 🔍 Search

* Global search for projects, users, and tasks

---

# 🧠 Architecture Highlights

* Clean separation of concerns (Frontend / API / Database)
* Prisma relational modeling
* Auto-increment numeric user IDs synced with Cognito UUID
* RTK Query for optimized API caching
* API Gateway proxy integration
* Secure EC2 private networking with RDS
* Production-ready deployment pipeline via Amplify

---

# 🗄 Database Schema Overview

Key Models:

* User
* Team
* Project
* Task
* ProjectTeam
* TaskAssignment
* Attachment
* Comment

Relational integrity handled via Prisma ORM.

---

# ⚙️ Local Development Setup

## 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd work-space
```

---

## 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create `.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

Run migrations:

```bash
npx prisma migrate dev
```

Start server:

```bash
npm run dev
```

---

## 3️⃣ Frontend Setup

```bash
cd client
npm install
```

Create `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/
```

Run:

```bash
npm run dev
```

---

# ☁ Production Deployment

### Backend

* Hosted on AWS EC2
* Managed via PM2
* Connected to RDS PostgreSQL

### API

* Exposed via AWS API Gateway (REST)
* CORS configured for Amplify domain

### Frontend

* Hosted via AWS Amplify
* Connected to GitHub repository
* Auto CI/CD pipeline

---

# 🔄 Environment Variables (Production)

### Backend

* DATABASE_URL
* COGNITO_USER_POOL_ID
* COGNITO_CLIENT_ID

### Frontend

* NEXT_PUBLIC_API_BASE_URL
* NEXT_PUBLIC_AWS_REGION
* NEXT_PUBLIC_COGNITO_USER_POOL_ID
* NEXT_PUBLIC_COGNITO_CLIENT_ID

---

# 📦 Future Enhancements

* Role-based access control (RBAC)
* Real-time updates (WebSockets)
* Activity logging
* Notifications system
* Analytics dashboard
* Microservices migration

---

# 🛡 Security Considerations

* JWT-based authentication
* HTTPS via API Gateway
* RDS private subnet configuration
* CORS restricted to Amplify domain
* Secure environment variable handling

---

# 📈 Scalability Strategy

* API Gateway for horizontal scaling
* EC2 instance auto-scaling ready
* RDS managed service
* S3 for scalable file storage
* Lambda for event-driven logic

---

# 🧑‍💻 Author

Harsh Gupta
Full Stack Developer
Built as a production-grade cloud-native SaaS architecture.

---

# ⭐ Project Vision

Work-Space aims to be a scalable, secure, and modern project collaboration tool built using industry-standard architecture patterns and AWS infrastructure.

---

