import React, { useEffect, useState } from 'react';
import Task from "./Task.js"
import './App.css';

const App = () => {

  const [taskinput, setTaskInput] = useState('')
  
  const loadStoredTasks = () => {
    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }
    else {
      return []
    }
  }

  const [tasklist, setTasklist] = useState(loadStoredTasks);

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasklist))
  }, [tasklist])

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleTaskSubmit();
    }
  };

  const handleTaskChange = (e) => {
    setTaskInput(e.target.value)
  }

  const toggleTask = (taskid) => {
    setTasklist((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskid
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasklist((prevTasks) => prevTasks.filter((task) => task.id !== taskId)); 
  };

  const handleTaskSubmit = () => {
    if (taskinput.trim() !== '') {
      const newTask = {
        id: tasklist.length, // Generate new task id based on current length
        name: taskinput,
        completed: false
      };
      setTasklist([...tasklist, newTask]);
      setTaskInput(''); // Reset the input field after adding a task
    }
  }

  return (
    <div className="page">
      <div className='navbar'>
        <h1 className='heading'>Todo-List App</h1>
      </div>
      <div className='bottom-section'>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 className='enteratask'>Enter a Task</h1>
          <input type='text' placeholder='Enter Task' className='tinput' value={taskinput} onChange={handleTaskChange}   onKeyDown={handleKeyPress}/>
          <button className='tsubtn' onClick={handleTaskSubmit}>Submit</button>
        </div>
        <div className='taskdiv'>
          {tasklist.map((data, index) => {
            return (
              <div key={index}>
                <Task task={data} onToggle={() => { toggleTask(data.id) }} onRemove={() => {deleteTask(data.id)}} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
