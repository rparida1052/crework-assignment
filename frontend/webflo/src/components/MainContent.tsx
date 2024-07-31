"use client";
import React, { useEffect, useState } from 'react'
import TagsHeader from './TagsHeader';
import ProgressColumns from './ProgressColumns';
import { PlusCircle, Search, Share2Icon } from 'lucide-react';
import { Button } from './ui/button';
import TaskColumn from './TaskColumn';
import MultiDropable from './MultiDropable';
import axios from 'axios';
import { ITask } from '@/types/types';


const MainContent = () => {
  const [tasks, setTasks] = useState<{
    todo: ITask[];
    inProgress: ITask[];
    underReview: ITask[];
    finished: ITask[];
  }>({
    todo: [],
    inProgress: [],
    underReview: [],
    finished: [],
  });
  const [loading, setLoading] = useState(false);
   const fetchTasks = async () => {
     try {
      setLoading(true);
       console.log("fetching tasks");

       const response = await axios.get(
         "https://crework-assignment-kkyk.onrender.com/api/v1/task/getTasks",
         {
           headers: {
             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
           },
         }
       );
        setLoading(false);
       console.log(response.data);
       const data = response.data
       const tasks:ITask[] = data.data;
       const todo = tasks.filter((task) => task.status === "todo");
       const inProgress = tasks.filter((task) => task.status === "inProgress");
       const underReview = tasks.filter(
          (task) => task.status === "underReview"
        );
       const finished = tasks.filter((task) => task.status === "finished");
       setTasks({
         todo,
         inProgress,
         underReview,
         finished,
       });
     } catch (error) {
       console.log(error);
     }
     
   };
   useEffect(() => {
      fetchTasks();
    }, []);
  return (
    <main className="w-full flex-1 flex flex-col items-start justify-start pt-6  pb-0 box-border ">
      <section className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full mq700:flex-wrap">
          <h1 className="m-0 relative text-[48px] font-semibold font-barlow text-gray-500 text-left inline-block max-w-full mq450:text-[29px] mq950:text-[38px]">
            Good morning, Joe!
          </h1>
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <a className="[text-decoration:none] relative text-base font-inter text-gray-500 text-left inline-block min-w-[125px]">{`Help & feedback`}</a>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/question_icon.png"
            />
          </div>
        </div>
        <nav className=" m-0 self-stretch flex flex-row flex-wrap items-center justify-start gap-[8px] max-w-full whitespace-nowrap">
          <TagsHeader
            propPadding="14px 15px"
            propGap="16px"
            undrawOpinionReJix41="/sketboard_icon.png"
            introducingTags="Introducing tags"
            easilyCategorizeAndFindYo="Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient."
          />
          <TagsHeader
            propPadding="14px 15px"
            propGap="16px"
            undrawOpinionReJix41="/undraw_link.png"
            introducingTags="Share Notes Instantly"
            easilyCategorizeAndFindYo="Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options."
          />
          <TagsHeader
            propPadding="14px 15px"
            propGap="16px"
            undrawOpinionReJix41="/undraw_phone.png"
            introducingTags="Access Anywhere"
            easilyCategorizeAndFindYo="Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer."
          />
        </nav>
        <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq950:flex-wrap">
          <div className="w-[196px] rounded-lg bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-between py-1.5 px-2 border-[1px] border-solid border-whitesmoke-500">
            <input
              className="w-[53px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[19px] relative text-gray-300 text-left inline-block p-0"
              placeholder="Search"
              type="text"
            />
            <Search />
          </div>
          <div className="w-[693px] flex flex-row items-center justify-start gap-[16px] max-w-full mq700:flex-wrap">
            <div className="flex-1 flex flex-row items-center justify-start gap-[16px] max-w-full mq450:flex-wrap mq450:min-w-full">
              <div className="flex-1 rounded bg-whitesmoke-300 overflow-hidden flex flex-row items-center justify-start p-2 box-border gap-[14px] min-w-[105px]">
                <input
                  className="w-[calc(100%_-_40px)] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[19px] flex-1 relative text-gray-300 text-left inline-block min-w-[65px] p-0"
                  placeholder="Calendar view"
                  type="text"
                />
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-12.svg"
                />
              </div>
              <button className="cursor-pointer [border:none] p-2 bg-whitesmoke-300 rounded overflow-hidden flex flex-row items-center justify-start gap-[14px] hover:bg-gainsboro-400">
                <div className="relative text-base font-inter text-gray-300 text-left inline-block min-w-[87px]">
                  Automation
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-13.svg"
                />
              </button>
              <div className="rounded bg-whitesmoke-300 overflow-hidden flex flex-row items-center justify-start p-2 gap-[14px]">
                <div className="relative text-base font-inter text-gray-300 text-left inline-block min-w-[38px]">
                  Filter
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-14.svg"
                />
              </div>
              <div className="rounded bg-whitesmoke-300 overflow-hidden flex flex-row items-center justify-start p-2 gap-[14px]">
                <a className="[text-decoration:none] relative text-base font-inter text-gray-300 text-left inline-block min-w-[44px]">
                  Share
                </a>
                <Share2Icon height={"15"} className="text-gray-300" />
              </div>
            </div>
            <Button className="bg-blueviolet gap-2">
              Create new <PlusCircle />
            </Button>
          </div>
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="self-stretch rounded-lg bg-white flex flex-row  items-start justify-center py-4 pr-[15px] pl-4 gap-[16px]">
            <TaskColumn taskName="To do" tasks={tasks.todo} />
            <TaskColumn taskName="In Progress" tasks={tasks.inProgress} />
            <TaskColumn taskName="Under Review" tasks={tasks.underReview} />
            <TaskColumn taskName="Finished" tasks={tasks.finished} />
          </div>
        )}
      </section>
    </main>
  );
}
export default MainContent