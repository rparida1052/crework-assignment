import React from 'react'
import Task from './Task';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';

interface TaskColumnProps {
    taskName: string;
    tasks:any[];
}
const TaskColumn = ({taskName,tasks}:TaskColumnProps) => {
  return (
    <div className=" w-[25%]">
      <div className="flex items-center justify-between">
        <h3>{taskName}</h3>
        <img src="/column_icon.png" alt="" />
      </div>
      {tasks.map((task)=>{
        return <Task task={task} />
      })}

      <div className="m-3">
        <Button>
          Create new <Plus />
        </Button>
      </div>
    </div>
  );
}

export default TaskColumn