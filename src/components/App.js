import {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }
// handler to update tasks array in set via spread syntax/creating new array and adding 

  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText))
  }
// handler to only display tasks that aren't deleted

const visibleTasks = tasks.filter(
  (task) => category === "All" || task.category === category
);
// handler to display tasks by category

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories= {CATEGORIES}
        selectedCategory= {category}
        onSelectCategory= {setCategory}
      />
      <NewTaskForm 
      categories={CATEGORIES.filter((cat) => cat !== "All")}
      onTaskFormSubmit={handleAddTask}
      />
      <TaskList 
      onDeleteTask={handleDeleteTask} 
      tasks={visibleTasks} />
    </div>
  );
}

//passing props to components with filter in New Task Form specififying what to display if "All" is not selected
export default App;
