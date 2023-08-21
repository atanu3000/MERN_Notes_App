# MERN Notes App

A simple MERN (MongoDB, Express.js, React, Node.js) notes app for managing your notes.

## Introduction

This MERN Notes App is designed to help you manage and organize your notes efficiently. It uses a modern tech stack to provide a seamless user experience.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

- MongoDB: You will need a MongoDB instance. You can set up one locally or use a cloud-hosted solution like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/atanu3000/MERN_Notes_App.git
   ```
2. Navigate to the repository

    ```bash
    cd MERN_Notes_App
    ```
3. Install server dependencies
    ```bash
    cd server
    npm i
    ```
4. Install frontend dependencies
    ```bash
    cd ../frontend
    npm i
    ```
## Usage

1. Setup your MongoDB connection by creating the `.env` file in your `server` directory with your MongoDB URL
   
    ```bash
    cd ../server
    echo 'dbURL="your_mongodb_uri_here"' > .env
    ```
3. Start the server
    ```bash
   npm run dev
   ```
4. Start the frontend (in a separate terminal)
    ```bash
    cd frontend
    npm run dev
    ```
