import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./CSS/App.css";
import * as Tabs from "@radix-ui/react-tabs"; // Import Tabs

function App() {
  const [status, setStatus] = useState<'all' | 'pending' | 'completed'>('all'); // Define the state

  return (
    <div className="App">
      <header className="header">
        <div className="logoside">
          <h1 className="text-3xl font-bold text-gray-800">Todo?</h1>
        </div>
      </header>
      <main className="main-content mx-auto w-[480px] pt-12">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <Tabs.Root defaultValue="all" value={status} onValueChange={setStatus}>
            <Tabs.List className="flex space-x-2 pb-6 pt-8">
              <Tabs.Trigger
                value="all"
                className={`cursor-pointer rounded-full border px-6 py-3 font-semibold transition-colors duration-300 ${
                  status === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                }`}
                aria-label="All Todos"
              >
                All
              </Tabs.Trigger>
              <Tabs.Trigger
                value="pending"
                className={`cursor-pointer rounded-full border px-6 py-3 font-semibold transition-colors duration-300 ${
                  status === 'pending' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                }`}
                aria-label="Pending Todos"
              >
                Pending
              </Tabs.Trigger>
              <Tabs.Trigger
                value="completed"
                className={`cursor-pointer rounded-full border px-6 py-3 font-semibold transition-colors duration-300 ${
                  status === 'completed' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                }`}
                aria-label="Completed Todos"
              >
                Completed
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="all" className="mt-4">
              <TodoList filter="all" />
            </Tabs.Content>
            <Tabs.Content value="pending" className="mt-4">
              <TodoList filter="pending" />
            </Tabs.Content>
            <Tabs.Content value="completed" className="mt-4">
              <TodoList filter="completed" />
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </main>
    </div>
  );
}

export default App;
