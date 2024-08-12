import React, { useState, useEffect } from "react";
import TodoTypes from "../todo";
import TodoForm from "./TodoForm";
import "../styles/TodoList.css";
import { FaEdit, FaCheck, FaStar } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GiCancel } from "react-icons/gi";

interface TodoListProps {
  filter: 'all' | 'pending' | 'completed';
}

const TodoList: React.FC<TodoListProps> = ({ filter }) => {
  const [todos, setTodos] = useState<TodoTypes[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editedTodoText, setEditedTodoText] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleEditStart = (id: number, text: string) => {
    setEditingTodoId(id);
    setEditedTodoText(text);
  };

  const handleEditCancel = () => {
    setEditingTodoId(null);
    setEditedTodoText("");
  };

  const handleEditSave = (id: number) => {
    if (editedTodoText.trim() !== "") {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, text: editedTodoText } : todo
        )
      );
      setEditingTodoId(null);
      setEditedTodoText("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleCompletion = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleToggleImportant = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isImportant: !todo.isImportant } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="todoContainer">
      <div>
        <TodoForm setTodos={setTodos} />
      </div>
      <div className="todos">
        {filteredTodos.map((todo) => (
          <div className="items" key={todo.id}>
            {editingTodoId === todo.id ? (
              <div className="editText">
                <input
                  type="text"
                  value={editedTodoText}
                  onChange={(e) => setEditedTodoText(e.target.value)}
                  autoFocus={true}
                />
                <button onClick={() => handleEditSave(todo.id)}>
                  <FaCheck />
                </button>
                <button className="cancelBtn" onClick={handleEditCancel}>
                  <GiCancel />
                </button>
              </div>
            ) : (
              <div className="editBtn">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleCompletion(todo.id)}
                />
                <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
                <button onClick={() => handleToggleImportant(todo.id)}>
                  <FaStar color={todo.isImportant ? 'gold' : 'gray'} /> {/* Biểu tượng ngôi sao */}
                </button>
                <button onClick={() => handleEditStart(todo.id, todo.text)}>
                  <FaEdit />
                </button>
            
              </div>
            )}
            <button onClick={() => handleDeleteTodo(todo.id)}>
              <RiDeleteBin5Fill />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
