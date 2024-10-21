Queue Management Application
A modern queue management system with a REST API and web interface, built with Express and React. This application provides real-time queue monitoring and message handling capabilities through a clean, Voyantis-inspired interface.
✨ Features
Backend (Express + TypeScript)

REST API endpoints for queue management
Message queuing with customizable timeouts
Real-time queue status monitoring
TypeScript implementation for type safety

Frontend (React + Vite + TypeScript)

Dynamic queue visualization
Real-time message count display
Interactive queue selection
Modern UI with Voyantis design system
Built with performance in mind using Vite

🚀 Getting Started
Prerequisites

Node.js (Latest LTS version recommended)
Git

Backend Setup

Clone the repository

bashCopygit clone https://github.com/your-repository/queue-management.git
cd queue-management/backend

Install dependencies

bashCopynpm install

Start the development server

bashCopynpm run dev
The server will be available at http://localhost:3000
Frontend Setup

Navigate to the frontend directory

bashCopycd ../frontend

Install dependencies

bashCopynpm install

Start the development server

bashCopynpm run dev
The frontend will be available at http://localhost:5173
📡 API Reference
Add Message to Queue
httpCopyPOST /api/{queue_name}

Adds a new message to the specified queue
Request body: JSON object containing the message

Retrieve Message from Queue
httpCopyGET /api/{queue_name}?timeout={ms}

Retrieves the next message from the specified queue
Optional timeout parameter in milliseconds (default: 10000)
Returns 204 No Content if queue is empty after timeout

🛠️ Technical Stack
Backend

Express.js
TypeScript
Node.js

Frontend

React
Vite
TypeScript
Modern CSS

📝 Notes

Scalable architecture for future feature additions
Built with performance and maintainability in mind
Easy to set up and extend
Clean, modern UI design