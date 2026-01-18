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

## ▶️ How to Run the Application

### Prerequisites

- Docker Desktop installed and running

### Steps

```bash
git clone https://github.com/ParasJagdale/docker-fullstack-app
cd docker-fullstack-app
```
