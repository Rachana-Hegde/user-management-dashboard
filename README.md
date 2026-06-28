# 👥 User Management Dashboard

A modern **React-based User Management Dashboard** built using **React, Vite, Axios, React Icons, React Toastify, and JSONPlaceholder API**. The application enables users to view, search, filter, sort, paginate, add, edit, and delete user records through a clean, responsive, and interactive interface while following reusable component architecture and best coding practices.


# 🚀 Features

## 👥 User Management

* View all users in a responsive table
* Display User ID, First Name, Last Name, Email, and Department
* Fetch user data from JSONPlaceholder API
* Responsive dashboard layout


## ➕ Add User

* Add a new user using a modal form
* Client-side validation
* POST request to JSONPlaceholder API
* Success and error notifications using React Toastify


## ✏️ Edit User

* Edit existing user details
* Pre-filled user information
* PUT request to update user
* Instant UI update after editing


## 🗑️ Delete User

* Delete confirmation modal
* DELETE request to JSONPlaceholder API
* Removes user from the table instantly
* Success and error notifications


## 🔍 Search

Search users dynamically by:

* First Name
* Last Name
* Email
* Department

Real-time filtering while typing.


## 🎯 Filter

Advanced filter popup allowing filtering by:

* First Name
* Last Name
* Email
* Department

Supports Apply and Reset functionality.


## ↕️ Sorting

Sortable columns:

* User ID
* First Name
* Last Name
* Email
* Department

Supports both ascending and descending order.

## 📄 Pagination

Supports multiple page sizes:

* 10 Users
* 25 Users
* 50 Users
* 100 Users

Includes Previous and Next navigation.


## ✅ Form Validation

Client-side validation includes:

* Required fields
* Valid email format
* Alphabet-only validation for names
* Department selection validation


## 🔔 Toast Notifications

Interactive notifications for:

* User Added
* User Updated
* User Deleted
* API Errors
* Validation Errors


## 📱 Responsive Design

Fully responsive across:

* Desktop
* Tablet
* Mobile Devices


## 🧪 Unit Testing

Implemented using **Vitest** and **React Testing Library**.

Test coverage includes:

* Search functionality
* Sorting logic
* Pagination
* Form validation
* Delete functionality
* User table rendering


# 🛠️ Tech Stack

| Layer         | Technology                     |
| ------------- | ------------------------------ |
| Frontend      | React.js                       |
| Build Tool    | Vite                           |
| Styling       | CSS3                           |
| HTTP Client   | Axios                          |
| Icons         | React Icons                    |
| Notifications | React Toastify                 |
| Testing       | Vitest + React Testing Library |
| API           | JSONPlaceholder REST API       |


# 📁 Project Structure

```text
user-management-dashboard/
│
├── public/
│
├── src/
│   ├── api/
│   │   └── userService.js
│   │
│   ├── components/
│   │   ├── DeleteModal/
│   │   ├── EmptyState/
│   │   ├── FilterModal/
│   │   ├── Header/
│   │   ├── Loader/
│   │   ├── Pagination/
│   │   ├── SearchBar/
│   │   ├── Toolbar/
│   │   ├── UserForm/
│   │   └── UserTable/
│   │
│   ├── hooks/
│   │   └── useUsers.js
│   │
│   ├── pages/
│   │   └── Dashboard.jsx
│   │
│   ├── tests/
│   │   ├── Delete.test.jsx
│   │   ├── Filter.test.jsx
│   │   ├── Pagination.test.jsx
│   │   ├── Search.test.jsx
│   │   ├── Sort.test.jsx
│   │   ├── UserForm.test.jsx
│   │   └── UserTable.test.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```


# ⚙️ Setup Instructions

## 🔹 1. Clone the Repository

```bash
git clone https://github.com/Rachana-Hegde/user-management-dashboard.git

cd user-management-dashboard
```


## 🔹 2. Install Dependencies

```bash
npm install
```


## 🔹 3. Run Development Server

```bash
npm run dev
```


## ▶️ Open in Browser

```
http://localhost:5173
```

# 🌐 API Used

**JSONPlaceholder REST API**

```
https://jsonplaceholder.typicode.com/users
```

API Endpoints Used:

* GET `/users`
* POST `/users`
* PUT `/users/:id`
* DELETE `/users/:id`

> **Note:** JSONPlaceholder simulates POST, PUT, and DELETE requests. Changes are not permanently stored and will reset after refreshing the page.


# 📱 Application Flow

1. Load user data from API
2. Search or filter users
3. Sort user records
4. Navigate using pagination
5. Add a new user
6. Edit existing user details
7. Delete users with confirmation
8. Receive instant feedback through toast notifications


# 🔐 Features

* CRUD Operations
* Search & Filtering
* Sorting
* Pagination
* Responsive Design
* Form Validation
* Toast Notifications
* API Integration
* Reusable Components
* Error Handling
* Unit Testing


# 📌 Assumptions

* JSONPlaceholder is used as a mock backend API.
* User data added, edited, or deleted is maintained only in the local application state.
* Changes will not persist after page refresh because of the mock API behavior.


# 🚧 Challenges Faced

* Managing multiple UI states for search, sorting, filtering, and pagination simultaneously.
* Reusing a single form component for both adding and editing users.
* Handling JSONPlaceholder's mock API responses while keeping the UI synchronized.
* Designing reusable and maintainable React components following DRY principles.


# 🚀 Future Improvements

* Backend authentication
* Persistent database integration
* Role-based access control
* Export users to CSV/PDF
* Bulk user actions
* Advanced filtering options
* Dark and Light theme
* Server-side pagination
* Improved test coverage
* Docker deployment


# 📌 Conclusion

This project demonstrates:

* Modern React development practices
* Component-based architecture
* Custom React Hooks
* REST API integration using Axios
* Responsive UI Design
* Client-side validation
* State management using React Hooks
* Unit testing with Vitest
* Clean and maintainable code following DRY principles


# 👩‍💻 Author

**Rachana Hegde**

🔗 GitHub: https://github.com/Rachana-Hegde


# 🌐 Live Demo

**Live Application:**



> Replace the above URL with your deployed Vercel or Netlify application.
