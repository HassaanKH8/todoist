import React from 'react';

const Habit = ({ task, onToggle, onRemove }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: "400px",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 20px',
        background: '#36454f',
        margin: '10px 0',
        borderRadius: '6px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
      }}
    >
      <p className='taskname'>{task.name}</p>
      <div style={{display: 'flex'}}>
        <button
          onClick={onToggle}
          style={{
            background: task.completed ? '#6aa66f' : 'gray',
            color: '#fff',
            border: 'none',
            borderRadius: '3px',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          {task.completed ? 'Completed' : 'Mark as Done'}
        </button>
        <button
          onClick={onRemove}
          style={{
            border: "none",
            cursor: 'pointer',
            background: 'none',
          }}
        >
          <img alt='delete' src={require('./assets/trash.png')} className='trashimg'/>
        </button>
      </div>
    </div>
  );
};

export default Habit;
