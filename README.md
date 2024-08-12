TodoList Application
A simple and interactive Todo List application built with React, TypeScript, and Vite. This project features a modern interface for managing tasks with functionalities such as adding, editing, deleting, and marking tasks as completed or important.

Features
Add New Tasks: Enter a new task and add it to the list.
Edit Tasks: Modify existing tasks' text.
Delete Tasks: Remove tasks from the list.
Toggle Completion: Mark tasks as completed or pending.
Toggle Importance: Mark tasks as important or not important.
Filter Tasks: View tasks based on their status (All, Pending, Completed).
Filter Tasks: View tasks based on their status (All, Pending, Completed).

Technologies Used
React: JavaScript library for building user interfaces.
TypeScript: Adds static types to JavaScript for improved developer experience and safety.
Vite: Fast build tool and development server.
Radix UI: For the tabbed interface.
ESLint: Linting tool for identifying and fixing problems in JavaScript/TypeScript code.

Installation
Clone the Repository
git clone https://github.com/duylinh13/todolist_ts
cd todolist_react_ts
npm install
npm run dev
Open your browser and go to http://localhost:3000 to view the application.

Project Structure
components/: Contains React components.
TodoForm.tsx: Component for adding new tasks.
TodoList.tsx: Component for displaying and managing tasks.
App.tsx: Main application component, including the tabbed interface.
main.tsx: Entry point of the React application.
todo.ts: TypeScript interface for Todo items.
TodoService.ts: Service for handling local storage operations.
styles/: Contains CSS files for styling components.

Usage
TodoForm Component
Props
setTodos: Dispatch<SetStateAction<TodoTypes[]>>: Function to update the list of todos.
TodoList Component
Props
filter: 'all' | 'pending' | 'completed': Filter to apply to the list of todos.
Main Application (App Component)
Tabs
Use tabs to switch between views: All, Pending, and Completed tasks.
Contributing
Feel free to submit issues and pull requests. For larger changes, please open an issue to discuss what you’d like to change.

License
This project is licensed under the MIT License - see the LICENSE file for details.
