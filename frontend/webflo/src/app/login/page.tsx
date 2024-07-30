
import AuthForm from '@/components/Form';
import { Card } from '@/components/ui/card'
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'

const LoginPage = () => {

	const handleSubmit = async(data:any)=>{
		console.log(data)
	}
    
  return (
		<div className=" relative [background:linear-gradient(180deg,_#fff,_#afa3ff)] overflow-hidden flex flex-row items-start justify-center pt-[90px] px-5 pb-[378px] box-border leading-[normal] tracking-[normal]">
			<div
				className="w-[648px] rounded-2xl [background:linear-gradient(180deg,_#f7f7f7,_#f0f0f0)] box-border flex flex-col items-center justify-start py-[58px] px-[59px] gap-[32px] max-w-full text-center text-29xl text-darkslategray font-barlow border-[1px] border-solid border-lightgray mq675:gap-[16px] mq675:py-[38px] mq675:px-[29px] mq675:box-border ">
				<h1 className="m-0 font-semibold font-inherit text-4xl">
					<span>{`Welcome to `}</span>
					<span className="text-blueviolet">Workflow!</span>
				</h1>
				<AuthForm formType='login'/>
				<div className="flex flex-row items-start justify-center gap-[4px] text-xl text-dimgray font-inter mq450:flex-wrap">
					<p className="relative mq450:text-base">
						Already have an account?
					</p>
					<div className="relative inline-block min-w-[63px] whitespace-nowrap cursor-pointer text-darkslateblue mq450:text-base">
						<span>Log in</span>
						<span className="text-dimgray">.</span>
					</div>
				</div>
			</div>
		</div>
  );
}

export default LoginPage