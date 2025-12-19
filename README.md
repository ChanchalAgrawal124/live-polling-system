Live Polling System

A real-time web application where a teacher can create live polls and students can answer them instantly. Poll results are updated live for all users without refreshing the page.

Tech Stack

React (Frontend)

Node.js & Express (Backend)

Socket.io (Real-time communication)

Features

Teacher can create a poll question

Students can submit one answer per poll

Live polling results visible to everyone

Real-time updates using WebSockets

How to Run
Backend
cd backend
npm install
npm start


Runs on http://localhost:5000

Frontend
cd frontend
npm install
npm start


Runs on http://localhost:3000

Project Flow

Teacher creates a poll → students answer → results update live → next poll can be created.
