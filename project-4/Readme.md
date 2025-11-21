# Project 4: Advanced NestJS & React Integration

This project is a comprehensive Full-Stack application that extends the capabilities of previous assignments. It involves updating a NestJS backend to support relational data (TypeORM), file uploads, and strict validation, while creating a React frontend to consume these APIs.

## 🎯 Objective

To build a CRUD application where users can manage "Profiles" and their associated "Profile Types". The project focuses on handling database relationships (One-to-Many), server-side validation, file storage, and dynamic frontend forms.

## ✨ Features

### 🔙 Backend (NestJS)
* [cite_start]**TypeORM Integration:** Utilizes TypeORM for database interactions[cite: 4].
* [cite_start]**Entity Relations:** Implements a **One-to-Many** relationship between `ProfileType` (parent) and `Profile` (child) entities[cite: 7].
* [cite_start]**File Upload:** Handles photo uploads, storing the file path as a locally accessible server URL rather than a physical system path[cite: 31, 32].
* **Advanced Validation:**
    * [cite_start]Checks for existing emails[cite: 27].
    * [cite_start]**Password Complexity:** Requires at least 1 uppercase, 1 lowercase, 1 number, and 1 symbol[cite: 28].
    * [cite_start]**Confirm Password:** Validates that the password matches the confirmation field[cite: 30].
    * [cite_start]Validate `profileTypeId` existence[cite: 26].
* **API Endpoints:**
    * [cite_start]`GET /profileTypes` (List all types for dropdowns)[cite: 16].
    * [cite_start]`GET /profiles` (List all profiles)[cite: 18].
    * [cite_start]`POST /profiles` (Create profile with photo & relation)[cite: 20].
    * [cite_start]`PATCH /profiles/:id` (Update profile)[cite: 21].
    * [cite_start]`DELETE /profiles/:id` (Delete profile)[cite: 22].

### 🖥️ Frontend (React)
* [cite_start]**CRUD Operations:** User interface for Listing, Creating, Updating, and Deleting profiles[cite: 8].
* [cite_start]**Dynamic Select Inputs:** The "Profile Type" selection in forms is populated dynamically from the API, hiding IDs from the user[cite: 13, 14].
* **Data Visualization:**
    * Displays user photos fetched from the server.
    * [cite_start]Shows the *Name* of the ProfileType in the list view instead of the ID[cite: 10].
* [cite_start]**UI Library:** Utilizes **Flowbite-React** for components like Select inputs[cite: 15].

## 🛠️ Tech Stack

* **Frameworks:** NestJS, React
* **Language:** TypeScript
* **Database/ORM:** TypeORM
* **UI Components:** Flowbite React
* **Tools:** Axios (for API requests), Class-Validator

## 🚀 Getting Started

### Backend Setup
1.  Navigate to the backend directory.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the server:
    ```bash
    npm run start:dev
    ```
    *The server usually runs on `http://localhost:3000` (or configured port).*

### Frontend Setup
1.  Navigate to the frontend directory.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the application:
    ```bash
    npm start
    ```

## 📝 Notes
* Ensure the backend is running before starting the frontend.
* Uploaded photos are served statically; ensure the static assets folder is correctly configured in NestJS.
