# 🚀 Dockerized Full-Stack Application

A production-style full-stack application containerized using Docker and orchestrated with Docker Compose.

## 🧱 Tech Stack

- Frontend: React (served via Nginx)
- Backend: Node.js (Express)
- Database: MongoDB
- Containerization: Docker
- Orchestration: Docker Compose

---

## 📐 Architecture

Browser  
↓  
React Frontend (Nginx container)  
↓  
Node.js Backend (API container)  
↓  
MongoDB (Database container with volume)

---

## 🐳 Docker Concepts Used

- Multi-stage Docker builds
- Docker images & containers
- Docker Compose orchestration
- Service-to-service communication
- Environment variables
- Persistent volumes for MongoDB
- Internal Docker networking

---

# 🐳 Docker Full-Stack App - Setup Guide

## 📥 Step 1: Clone the Repository
```bash
git clone https://github.com/ParasJagdale/docker-fullstack-app
cd docker-fullstack-app
```

## 🔐 Step 2: Configure Environment Variables

Create an environment file for the backend:
```bash
cp backend/.env.example backend/.env
```

The default configuration uses Docker networking:
```env
MONGO_URI=mongodb://mongo:27017/dockerdb
```

📌 **No changes needed for local Docker usage.**

## ▶️ Step 3: Build & Start the Application

Run the following command from the project root:
```bash
docker compose up --build
```

**What this command does:**
- Builds Docker images for frontend and backend
- Pulls MongoDB image if not present
- Creates an internal Docker network
- Creates a persistent MongoDB volume
- Starts all services together

⏳ **First run may take a few minutes.**

## 🌐 Step 4: Access the Application

Once everything is running, open your browser:

- **Frontend (UI)** 👉 [http://localhost:3000](http://localhost:3000)
- **Backend API** 👉 [http://localhost:5000](http://localhost:5000)

If both load successfully, the app is running correctly ✅

## 🛑 How to Stop the Application

To stop all running containers:
```bash
docker compose down
```

**This will:**
- Stop and remove containers
- Remove the Docker network
- Preserve MongoDB data (stored in volumes)

## 🔁 Re-running the App

Next time, you can simply run:
```bash
docker compose up
```

(use `--build` only if you changed code or Dockerfiles)

## 🧪 Useful Docker Commands (Optional)
```bash
docker ps                    # List running containers
docker compose logs          # View logs of all services
docker compose logs -f       # Follow logs live
docker system df             # Check Docker disk usage
```

## 🧠 Common Beginner Notes

- Containers communicate using service names, not localhost
- MongoDB data persists using Docker volumes
- Images remain even after containers stop
- Green status in Docker Desktop means containers are running
