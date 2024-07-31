import React from 'react'
import { Button } from './ui/button';
import { ArrowBigLeft, PlusCircleIcon, PlusIcon } from 'lucide-react';
import { useToast } from './ui/use-toast';
import axios from 'axios';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from './ui/label';
import { Input } from './ui/input';
import CreateTaskForm from './CreateTaskForm';

interface CreateNewTaskProps {
    position: string;
}
const CreateNewTask = ({position}:CreateNewTaskProps) => {
    const handleClick = async ()=>{
        try{    

            const response = await axios.post("https://crework-assignment-kkyk.onrender.com/api/v1/task/createTask",{

            })

        }catch(error){
            console.log(error);
           
        }
    }

  return (
    <Sheet >
      <SheetTrigger asChild>
        <Sheet>
          <SheetTrigger asChild >
            <div className='w-full flex'>
              <Button
                className={`${position === "sidebar" ? "bg-blueviolet" : ""} gap-3`}
              >
                Create new
              {position === "sidebar" ? <PlusCircleIcon/>:<PlusIcon/>}
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
             
            </SheetHeader>
            <div className="grid gap-4 py-4">
                <CreateTaskForm/>
                
            </div>
          
          </SheetContent>
        </Sheet>
      </SheetTrigger>
    
    </Sheet>
  );
}

export default CreateNewTask