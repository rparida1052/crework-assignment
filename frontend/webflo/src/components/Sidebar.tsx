import { PlusCircleIcon } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button';

const Sidebar = () => {
  return (
    <div className=" h-screen w-[285px] bg-white box-border flex flex-col items-start justify-between pt-6 px-[15px] pb-8 border-r-[1px] border-solid border-gainsboro-200 mq950:hidden mq700:pt-5 mq700:pb-[21px] mq700:box-border">
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="h-[31px] w-[31px] relative rounded-lg overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/user_image.png"
              />
              <a className="[text-decoration:none] relative text-xl font-medium font-inter text-gray-500 text-left inline-block min-w-[118px] mq450:text-base">
                Joe Gardner
              </a>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/bell_icon.png"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/loading_icon.png"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/setting_icon.png"
              />
            </div>
            <div className="rounded bg-whitesmoke-300 overflow-hidden flex flex-row items-center justify-start py-[10.5px] px-2 cursor-pointer">
              <a className="[text-decoration:none] relative text-base font-inter text-gray-300 text-left inline-block min-w-[53px]">
                Logout
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch rounded bg-whitesmoke-300 overflow-hidden flex flex-row items-center justify-start py-1.5 pr-[150px] pl-[7px] gap-[14px] top-[0] z-[99] sticky border-[1px] border-solid border-gainsboro-300 mq450:pr-5 mq450:box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/home_icon.png"
                />
                <p className='text-gray-300'>Home</p>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-1 pr-[140px] pl-2 gap-[14px] mq450:pr-5 mq450:box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/board_icon.png"
                />
                <div className="relative text-xl font-inter text-gray-300 text-left inline-block min-w-[67px] mq450:text-base">
                  Boards
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-1 pr-32 pl-2 gap-[14px] mq450:pr-5 mq450:box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/setting_icon.png"
                />
                <a className="[text-decoration:none] relative text-xl font-inter text-gray-300 text-left inline-block min-w-[79px] mq450:text-base">
                  Settings
                </a>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-1 pr-[145px] pl-2 gap-[13px] mq450:pr-5 mq450:box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/team_icon.png"
                />
                <div className="relative text-xl font-inter text-gray-300 text-left inline-block min-w-[63px] mq450:text-base">
                  Teams
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-1 pr-[121px] pl-2 gap-[13px] mq450:pr-5 mq450:box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/analytics.png"
                />
                <a className="[text-decoration:none] relative text-xl font-inter text-gray-300 text-left inline-block min-w-[87px] mq450:text-base">
                  Analytics
                </a>
              </div>
            </div>
            <Button className="w-full bg-blueviolet flex gap-2">
              Create new
              <PlusCircleIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start mq450:gap-[121px]">
        <div className="self-stretch rounded-lg bg-whitesmoke-400 flex flex-row items-center justify-start p-2 gap-[8px]">
          <img
            className="h-10 w-10 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/download_icon.png"
          />

          <div className="flex-1 flex flex-col items-start justify-start gap-[4px] ">
            <div className="self-stretch relative text-xl font-medium font-inter text-dimgray-100 text-left mq450:text-base">
              Download the app
            </div>
            <div className="self-stretch relative text-sm font-inter text-dimgray-100 text-left">{`Get the full experience `}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar