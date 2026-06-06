# Thrifty Mini Marketplace

A vintage clothing mini marketplace built with React TypeScript, Node.js, Express and MongoDB.

## Prerequisites

Make sure you have installed:
- [Node.js](https://nodejs.org/)
- MongoDB Atlas account

## Getting Started

### 1. Clone the repository

git clone https://github.com/Spickyy/thrifty-marketplace.git
cd thrifty-marketplace

### 2. Setup the Server

cd server
npm install

Create a `.env` file inside the `server` folder:

MONGODB_URI=your_mongodb_connection_string

Start the server:

node index.js


Server runs on **http://localhost:5000**

### 3. Setup the Client

Open a new terminal:

cd client
npm install
npm start

Client runs on **http://localhost:3000**

## Features

- Browse and filter products by category
- Add items to cart
- User registration with profile photo upload
- User login with JWT authentication
- Profile picture and name shown in navbar after login
- Logout functionality
- Emoji animation on home page
