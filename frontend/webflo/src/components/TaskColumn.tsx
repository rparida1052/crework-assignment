import React from 'react'
import Task from './Task';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { ITask } from '@/types/types';
import CreateNewTask from './CreateNewTask';

interface TaskColumnProps {
  taskName: string;
  tasks: ITask[];
}
const TaskColumn = ({taskName,tasks}:TaskColumnProps) => {
  return (
    <div className=" w-[25%]">
      <div className="flex items-center justify-between">
        <h3>{taskName}</h3>
        <img src="/column_icon.png" alt="" />
      </div>
      {tasks.map((task,index)=>{
        return <Task task={task} key={index}/>
      })}

      <div className="m-3">
        <CreateNewTask position='dashboard'/>
      </div>
    </div>
  );
}

export default TaskColumn