# Node.js Backend Learning Repository

Practical repository for learning Node.js and Express.js backend concepts. Contents are updated frequently with small, focused examples.

## What's included (high level)
- Node.js core examples (modules, HTTP, FS, streams, events)
- Express basics (server, routing, HTTP methods)
- Modular routing and controllers
- Middleware examples (logging, custom middleware)
- Query string handling
- Static file serving
- Mongoose / MongoDB examples (models and basic CRUD)

## New: Mongoose
- Folder: Mongoose
- Entry: Mongoose/index.js — connects to MongoDB using dotenv and runs sample model operations.
- Model: Mongoose/models/Movies.js — schema and example CRUD helpers (createDoc, getDoc, updateDoc, updateMany, del)
- Required: provide a .env file with DATABASE_URL for the MongoDB connection string.

## Quick start
Prerequisites: Node.js (v14+) and npm

```bash
# Install dependencies (root or per-folder if needed)
npm install

# Run main Express app
node Express/index.js

# Run a specific example (each folder's index.js is the entry point)
node Express/QueryString/index.js
node Express/middlewares/index.js
node Express/routes/app.js

# Run Mongoose examples (ensure .env contains DATABASE_URL)
node Mongoose/index.js
```

## Conventions
- Each topic folder exposes index.js as the primary entry point; other files are supportive modules.
- Default example server port: 8000.

## Notes
- This repository is a living learning resource and will be updated as new topics are explored.
- For Mongoose examples, create a .env at the repository root with DATABASE_URL set to your MongoDB URI.