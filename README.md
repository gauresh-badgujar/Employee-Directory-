# 👨‍💼 Employee Directory

<p align="center">
  <strong>A modern and responsive Employee Management application built with React, TypeScript, and Vite.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/CSS3-Responsive-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</p>

---

## 📌 Overview

Employee Directory is a modern and responsive web application designed to manage employee records efficiently.

The application allows users to add, view, search, edit, and delete employee information through a clean and user-friendly interface.

The project demonstrates modern frontend development practices using React functional components, TypeScript, React Hooks, reusable components, form validation, and state management.

---

## ✨ Features

### 👥 Employee Management

- ➕ Add new employees
- 📋 View all employee records
- ✏️ Edit existing employee information
- 🗑️ Delete employees
- 🔎 Search employees by name
- 📊 Display employee count

### 📝 Employee Information

Each employee record contains:

- 👤 Full Name
- 🏢 Department
- 💼 Designation
- 📧 Email
- 📱 Mobile Number
- 🆔 Employee ID

### 🔐 Form Validation

- Required field validation
- Email format validation
- Mobile number validation
- Duplicate email prevention
- Form reset functionality

### 🎨 UI / UX

- Modern card-based layout
- Responsive design
- Clean navigation
- Employee initials avatar
- Department badges
- Hover effects
- Empty search-result state
- Clean and user-friendly forms

---

## 🖥️ Application Preview

The Employee Directory provides a clean dashboard-style interface where users can easily manage employee records.

The application includes:

- Employee listing
- Employee search
- Add Employee form
- Edit Employee functionality
- Delete Employee functionality
- Responsive employee cards

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React | User Interface Development |
| TypeScript | Type-Safe Development |
| Vite | Development and Build Tool |
| HTML5 | Application Structure |
| CSS3 | Styling and Responsive Design |
| React Hooks | State and Lifecycle Management |
| Git | Version Control |
| GitHub | Source Code Management |

---

## 🏗️ Project Structure

Employee-Directory/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── AddEmployeeForm/
│   │   │   ├── AddEmployeeForm.tsx
│   │   │   └── AddEmployeeForm.css
│   │   │
│   │   ├── EmployeeCard/
│   │   │   ├── EmployeeCard.tsx
│   │   │   └── EmployeeCard.css
│   │   │
│   │   └── EmployeeList/
│   │       ├── EmployeeList.tsx
│   │       └── EmployeeList.css
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── .gitignore
└── README.md

---

## 🔄 Application Flow

Employee Directory
        |
        |-------------------------|
        |                         |
        v                         v
Employee List              Add Employee
        |                         |
        |                         |
   |----|----|                    |
   |    |    |                    |
 Search Edit Delete              Submit
   |    |    |                    |
   |    |    |                    v
   |    |    |             Add / Update
   |    |    |               Employee
   |    |    |                    |
   |----|----|--------------------|
                |
                v
        Updated Employee List

---

## ⚙️ Getting Started

Follow the steps below to run the project locally.

### 1. Clone the Repository

Using HTTPS:

git clone https://github.com/gauresh-badgujar/Employee-Directory-.git

Or using SSH:

git clone git@github.com:gauresh-badgujar/Employee-Directory-.git

---

### 2. Navigate to the Project

cd Employee-Directory-

---

### 3. Install Dependencies

npm install

---

### 4. Start the Development Server

npm run dev

The application will run on:

http://localhost:5173

---

## 🏗️ Build for Production

To create a production-ready build:

npm run build

---

## 🔍 Preview Production Build

To preview the production build:

npm run preview

---

## 🧹 Code Quality

Run the linting command:

npm run lint

---

## 📦 Available Scripts

npm run dev

Starts the Vite development server.

npm run build

Creates an optimized production build.

npm run preview

Runs the production build locally.

npm run lint

Checks the project code using the configured linting rules.

---

## 💡 React Concepts Used

This project demonstrates the following React and TypeScript concepts:

- Functional Components
- React Hooks
- useState
- useEffect
- Props
- TypeScript Interfaces
- Type-safe Event Handling
- Conditional Rendering
- Component Reusability
- Controlled Components
- Form Handling
- State Management
- Array Methods
- Event Handling

---

## 🎯 Learning Objectives

This project was developed to improve practical knowledge of:

- React application development
- TypeScript with React
- Component-based architecture
- CRUD operations
- Form validation
- State management
- Responsive UI development
- Reusable components
- Git and GitHub workflow
- Modern frontend development

---

## 🚀 Future Enhancements

The following features can be added in future versions:

- Backend API integration
- MySQL database integration
- MongoDB database integration
- User authentication
- Pagination
- Department-based filtering
- Employee sorting
- Employee profile page
- Toast notifications
- Dark mode
- Export employee data to CSV
- Export employee data to PDF
- Cloud deployment

---

## 👨‍💻 Author

Gauresh Badgujar

MCA | Software Developer

Passionate about building modern web applications using Java, Spring Boot, React, TypeScript, and modern web technologies.

GitHub:
https://github.com/gauresh-badgujar

---

## ⭐ Support

If you like this project or find it useful, please consider giving the repository a star on GitHub.

Your support is appreciated!

---

## 📄 License

This project is created for educational, learning, and portfolio purposes.

© 2026 Gauresh Badgujar. All Rights Reserved.
