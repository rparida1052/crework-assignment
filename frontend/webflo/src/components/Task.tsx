import React from 'react'
import { Badge } from './ui/badge'
import { Clock } from 'lucide-react';
import { ITask } from '@/types/types';

interface TaskProps {
  task:ITask
}
const Task = ({ task }: TaskProps) => {
  return (
    <div className="bg-whitesmoke-300 rounded-xl p-3 m-1">
      <h4 className="font-semibold text-gray-500 text-wrap">
        Implement User Authentication
      </h4>
      <p className="text-gray-300 text-wrap mb-2
      ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quam.
      </p>
      {task.priority === "urgent" && (
        <Badge className="bg-urgentRed p-2 rounded-lg">{task.priority}</Badge>
      )}
      {task.priority === "medium" && (
        <Badge className="bg-mediumOrange p-2 rounded-lg">
          {task.priority}
        </Badge>
      )}
      {task.priority === "low" && (
        <Badge className="bg-limegreen p-2 rounded-lg">{task.priority}</Badge>
      )}

      <div className="flex gap-2 my-1">
        <Clock />
        <p>2024-08-15</p>
      </div>

      <p>1 hr ago</p>
    </div>
  );
};

export default Task