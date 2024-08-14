import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import * as Tabs from "@radix-ui/react-tabs"; // Import Tabs
import { useTranslation } from "react-i18next"; // Import useTranslation
import i18n from './i18n'; // Import i18n
import { FaSun, FaMoon, FaSmile, FaGrin } from "react-icons/fa"; // Import icons

function App() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'all' | 'pending' | 'completed'>('all'); // Define the state
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // Trạng thái theme

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <header className="header">
  <div className="logoside">
  <h1 className="text-3xl font-bold title-with-icons">
            {t("What is today's to-do list?")}
            <FaSmile className="icon smile-icon" />
            <FaGrin className="icon grin-icon" />
            <FaSmile className="icon smile-icon" />
            <FaSmile className="icon smile-icon" />
            <FaGrin className="icon grin-icon" />
            <FaSmile className="icon smile-icon" />
            
          </h1>
  </div>
  <div className="controls theme-toggle-container">
    <button className="theme-toggle" onClick={toggleTheme}>
      <span className="icon">{theme === 'dark' ? <FaMoon /> : <FaSun />}</span>
    </button>
    <div className="languageSwitcher">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
    </div>
  </div>
</header>


      <main className="main-content mx-auto w-[480px] pt-12">
        <div className={`rounded-lg p-8 shadow-md ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
          <Tabs.Root defaultValue="all" value={status} onValueChange={setStatus}>
            <Tabs.List className="TabsList">
              <Tabs.Trigger value="all" className={`TabsTrigger ${status === 'all' ? 'active' : 'inactive'}`} aria-label="All Todos">
                {t("All")}
              </Tabs.Trigger>
              <Tabs.Trigger value="pending" className={`TabsTrigger ${status === 'pending' ? 'active' : 'inactive'}`} aria-label="Pending Todos">
                {t("Pending")}
              </Tabs.Trigger>
              <Tabs.Trigger value="completed" className={`TabsTrigger ${status === 'completed' ? 'active' : 'inactive'}`} aria-label="Completed Todos">
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