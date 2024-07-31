"use client"
import { createaTaskSchema } from '@/schema/taskSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from './ui/input'
import { priority, status } from '@/lib/constants'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { Calendar } from './ui/calendar'
import { CalendarIcon, Plus } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Separator } from './ui/separator'
import axios from 'axios'
import { title } from 'process'

const CreateTaskForm = () => {
  const form = useForm({
    resolver: zodResolver(createaTaskSchema),
    defaultValues: {
      title: "",
      status: "",
      priority: "",
      deadline: new Date(),
      description: "",
    },
  });
  // https://crework-assignment-kkyk.onrender.com/api/v1/task/addTask
  const onSubmitForm = async (data: z.infer<typeof createaTaskSchema>) => {
    console.log({...data});
    console.log("bearrer token", localStorage.getItem("accessToken"));
   try{
     const response = await axios.post(
       "https://crework-assignment-kkyk.onrender.com/api/v1/task/addTask",
       {
            ...data,
        },
        {
            headers: {  Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
       }
     );
     console.log(response);
     
   }catch(error){
    console.log(error);
    
   }
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitForm)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Title"
                    className="border-none text-5xl"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="flex items-center ">
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Not Selected" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {status.map((stat) => (
                        <SelectItem value={stat.value}>{stat.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem className="flex items-center ">
                <FormLabel>Priority</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Not Selected" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {priority.map((stat) => (
                        <SelectItem value={stat.value}>{stat.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="deadline"
            render={({ field }) => (
              <FormItem className="flex ">
                <FormLabel>Deadline</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="flex items-center ">
                <FormLabel>description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="description"
                    className="border-none "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-4 mt-5">
            <Plus /> Add custom property
          </div>
          <div className="min-w-full mt-5 p-2">
            <Separator className="bg-whitesmoke-500 mb-3" />
            <p className="text-gray-100">
              start writing, drag your own file here
            </p>
          </div>
          <Button type="submit">save</Button>
        </form>
      </Form>
    </div>
  );
}

export default CreateTaskForm