# 🛡️ Project 3: NestJS User Profile REST API

## 📝 Overview

This project is a **Backend REST API** built with **NestJS** for managing user profiles. [cite_start]It is required to handle CRUD operations (listing, reading, creating, updating, and deleting) for a "Profile" entity using **TypeORM**[cite: 3, 5, 7]. The project emphasizes strong validation and secure file handling.

## ✨ Key Features

* [cite_start]**RESTful Endpoints:** Full CRUD operations for user profiles[cite: 7]. [cite_start](e.g., `@GET/profiles`, `@POST/profiles`, `@DELETE/profiles/:id` [cite: 8, 10, 12])
* [cite_start]**Database ORM:** Utilizes **TypeORM** for persistence[cite: 5].
* [cite_start]**Profile Entity:** Contains attributes: `username`, `password`, `email`, and `photo`[cite: 6].
* [cite_start]**Strong Validation:** Incoming requests pass through a validation process[cite: 13]. [cite_start]All variables are mandatory[cite: 14]. [cite_start]Specific controls are applied to email and password (including a check for confirm password)[cite: 15, 16, 17].
* [cite_start]**File Upload:** A photo is uploaded to the system, and its server URL (not a local path) is stored in the `photo` column of the table[cite: 18, 19].

## 🛠️ Technologies Used

* **Backend:** NestJS (TypeScript)
* [cite_start]**ORM:** TypeORM [cite: 5]
* **Validation:** Class-Validator / Validation Pipes
* **Database:** [Specify your database, e.g., PostgreSQL / MySQL]

## ☁️ Setup Instructions

1.  Navigate to the project directory: `cd Project-3`
2.  Install dependencies: `npm install` or `yarn install`
3.  **Database Configuration:** Update the database connection settings in the relevant file.
4.  Run the application: `npm run start:dev`
