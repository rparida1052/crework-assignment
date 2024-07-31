
import MainContent from '@/components/MainContent'
import Sidebar from '@/components/Sidebar'
import axios from 'axios';
import { Menu } from 'lucide-react';
import React from 'react';

const Dashboard:React.FC = () => { 
   
  return (
    <div className=" flex ">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="block md:hidden">
        <Menu />
      </div>
      <div className='mx-3'>
        {/* main column */}
        <MainContent />
      </div>
    </div>
  );
}

export default Dashboard