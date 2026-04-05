# Skill-10: React State Management using useState Object

| Field   | Details                                              |
|---------|------------------------------------------------------|
| Student | Ch. Venkata Sai Nikesh                               |
| ID      | 2400080138                                           |
| Section | 51                                                   |
| GitHub  | https://github.com/NIkesh7474/FSAD-Skill-10          |

---

## Aim

To implement a React component (StudentManager) using the useState hook to manage an array of student objects. Users can add, display, and delete students instantly without page refresh.

---

## What is This Project?

This project is a React web application that manages a list of students using React Hooks (useState).

Instead of reloading the page every time data changes, React automatically re-renders the UI whenever the state (students list) is updated.

- Click **+ Add Student** — new student appears in table instantly
- Click **Delete** — student disappears instantly
- If all deleted — shows **"No students available"**

---

## Key Concepts

| Concept           | Description                                              |
|-------------------|----------------------------------------------------------|
| useState Hook     | Stores and updates data inside a component               |
| Spread Operator   | Adds new student to existing array [...students, newStudent] |
| Array.filter()    | Removes student by ID from array                         |
| onChange Handler  | Updates newStudent fields as user types                  |

---

## State Variables

| State Variable  | Type             | Purpose                          |
|-----------------|------------------|----------------------------------|
| students        | Array of Objects | Stores all student records       |
| newStudent      | Object           | Holds current input field values |
| setStudents()   | Setter           | Updates list and re-renders UI   |
| setNewStudent() | Setter           | Clears inputs after adding       |

---

## Project Structure
```FullStack-Skill-10/
├── src/
│   ├── StudentManager.jsx
│   ├── StudentManager.css
│   └── App.jsx
├── public/
│   └── index.html
├── package.json
└── README.md

---

## Tech Stack

| Technology | Version | Purpose                  |
|------------|---------|--------------------------|
| React      | 18.2.0  | Frontend UI library       |
| useState   | Hook    | State management          |
| CSS        | -       | Styling and layout        |
| Node.js    | 16+     | Runtime environment       |
| npm        | -       | Package manager           |

---

## Expected Output+----+---------+-----------------+--------+
| ID | Name    | Course          | Action |
+----+---------+-----------------+--------+
|  1 | Adithya | Full Stack Dev  | Delete |
|  2 | Ravi    | Java Backend    | Delete |
|  3 | Priya   | UI/UX Design    | Delete |
|  4 | Kiran   | Cloud Computing | Delete |
|  5 | Sneha   | Data Science    | Delete |
+----+---------+-----------------+--------+

When all students deleted:No students available

---

## How to Run

**Step 1** — Create React App
```cmdnpx create-react-app student-manager
cd student-manager

**Step 2** — Copy files into src/ folderStudentManager.jsx
StudentManager.css
App.jsx
index.js

**Step 3** — Start the app
```cmdnpm start

**Step 4** — Open browserhttp://localhost:3000

---

## Tasks Completed

- [x] Task 1  - Created StudentManager React component
- [x] Task 2  - Added 5 initial student objects
- [x] Task 3  - Used useState for students array and newStudent
- [x] Task 4  - Created input boxes with onChange handler
- [x] Task 5  - Add Student button with spread operator
- [x] Task 6  - Displayed student list using map()
- [x] Task 7  - Delete button using Array.filter()
- [x] Task 8  - Empty message when list is empty
- [x] Task 9  - Added CSS styling for table and buttons
- [x] Task 10 - Pushed project to GitHub

---

## Git Commands
```cmdcd C:\Users\HP\student-managergit init
git add .
git commit -m "Skill10: React useState StudentManager"
git remote add origin https://github.com/NIkesh7474/FSAD-Skill-10
git branch -M main
git push -u origin main --force
