import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import * as Tabs from "@radix-ui/react-tabs"; // Import Tabs

function App() {
  const [status, setStatus] = useState<'all' | 'pending' | 'completed'>('all'); // Define the state

  return (
    <div className="App">
      <header className="header">
        <div className="logoside">
          <h1 className="text-3xl font-bold text-gray-800">What is today's to-do list?</h1>
        </div>
      </header>
      <main className="main-content mx-auto w-[480px] pt-12">
        <div className="rounded-lg bg-white p-8 shadow-md">
        <Tabs.Root defaultValue="all" value={status} onValueChange={setStatus}>
  <Tabs.List className="TabsList">
    <Tabs.Trigger
      value="all"
      className={`TabsTrigger ${status === 'all' ? 'active' : 'inactive'}`}
      aria-label="All Todos"
    >
      All
    </Tabs.Trigger>
    <Tabs.Trigger
      value="pending"
      className={`TabsTrigger ${status === 'pending' ? 'active' : 'inactive'}`}
      aria-label="Pending Todos"
    >
      Pending
    </Tabs.Trigger>
    <Tabs.Trigger
      value="completed"
      className={`TabsTrigger ${status === 'completed' ? 'active' : 'inactive'}`}
      aria-label="Completed Todos"
    >
      Completed
    </Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="all" className="TabsContent">
    <TodoList filter="all" />
  </Tabs.Content>
  <Tabs.Content value="pending" className="TabsContent">
    <TodoList filter="pending" />
  </Tabs.Content>
  <Tabs.Content value="completed" className="TabsContent">
    <TodoList filter="completed" />
  </Tabs.Content>
</Tabs.Root>

        </div>
      </main>
    </div>
  );
}

export default App;
