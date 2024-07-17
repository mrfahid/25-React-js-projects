import { createContext, useContext, useEffect, useState } from "react"


const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false
    }
  ],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleComplete: (id) => {},
})

 export const TodoContextProvider = TodoContext.Provider
 
 // ({children}) => {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (todo) => {
//     setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
//   };

//   const updateTodo = (id, todo) => {
//     setTodos((prev) =>
//       prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos((prev) => prev.filter((todo) => todo.id !== id));
//   };

//   const toggleComplete = (id) => {
//     //console.log(id);
//     setTodos((prev) =>
//       prev.map((prevTodo) =>
//         prevTodo.id === id
//           ? { ...prevTodo, completed: !prevTodo.completed }
//           : prevTodo
//       )
//     );
//   };

//   useEffect(() => {
//     const todos = JSON.parse(localStorage.getItem("todos"));

//     if (todos && todos.length > 0) {
//       setTodos(todos);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos))
//   }, [todos])

//   return (
//     <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
//       {children}
//     </TodoContext.Provider>
//   )
// }

export const useTodo = () => {
  return useContext(TodoContext)
}