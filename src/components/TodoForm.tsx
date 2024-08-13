import React, { Dispatch, SetStateAction, useState } from "react";
import TodoService from "../TodoService";
import TodoTypes from "../todo";
import { useTranslation } from "react-i18next";
import "../styles/TodoForm.css"

interface PropTypes {
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

const TodoForm: React.FC<PropTypes> = ({ setTodos }) => {
  const [newTodoText, setNewTodoText] = useState<string>("");
  const { t } = useTranslation();

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      const newTodo = {...TodoService.addTodo(newTodoText), isImportant: false };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodoText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  

  return (
    <div className="inputForm">
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        onKeyPress={handleKeyPress}  
        autoFocus={true}
        placeholder={t("Add a Task")}
      />
      <button onClick={handleAddTodo}>{t("Add Todo")}</button>
    </div>
  );
};

export default TodoForm;
