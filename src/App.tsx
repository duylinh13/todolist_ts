import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import * as Tabs from "@radix-ui/react-tabs"; // Import Tabs
import { useTranslation } from "react-i18next"; // Import useTranslation
import i18n from './i18n'; // Import i18n

function App() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'all' | 'pending' | 'completed'>('all'); // Define the state

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logoside">
          <h1 className="text-3xl font-bold text-gray-800">What is today's to-do list?</h1>
        </div>
        <div className="languageSwitcher">
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
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
      {t("All")}
    </Tabs.Trigger>
    <Tabs.Trigger
      value="pending"
      className={`TabsTrigger ${status === 'pending' ? 'active' : 'inactive'}`}
      aria-label="Pending Todos"
    >
      {t("Pending")}
    </Tabs.Trigger>
    <Tabs.Trigger
      value="completed"
      className={`TabsTrigger ${status === 'completed' ? 'active' : 'inactive'}`}
      aria-label="Completed Todos"
    >
     {t("Completed")}
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
