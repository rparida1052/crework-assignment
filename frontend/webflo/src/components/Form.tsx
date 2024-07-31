"use client";
import React from 'react'
import { Input } from './ui/input'
import {z} from 'zod'
import { loginSchema,signupSchema } from '@/schema/authFormSchema' 
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';
interface AuthFormProps {
    formType: 'login' | 'signup';
}
type AuthFormValues = z.infer<typeof loginSchema> & Partial<z.infer<typeof signupSchema>>;
const AuthForm:React.FC<AuthFormProps> = ({formType}) => {
    const formSchema = formType === 'login' ? loginSchema : signupSchema;
   const {register,handleSubmit,formState:{errors}} = useForm<AuthFormValues>({
    resolver:zodResolver(formSchema)
   });
const router = useRouter();
const onFormSubmit = async(data: z.infer<typeof formSchema>) => {
    try {
        const response = await axios.post(
          "https://crework-assignment-kkyk.onrender.com/api/v1/user/login",
          {
            email: data.email,
            password: data.password,
          }
        );
        console.log(response.data.data.accessToken);
        localStorage.setItem('accessToken',response.data.data.accessToken);
        router.push('/dashboard');
    } catch (error) {
        console.log(error);
        
    }
    
    
   }
  return (
		<div className="w-full h-full gap-4">
			<form onSubmit={handleSubmit(onFormSubmit)} className='flex flex-col gap-5'>
				{formType === 'signup' && (
					<Input
						placeholder="Full name"
						className="bg-whitesmoke-500"
                        {...register('fullname')}
					/>
				)}
				<Input placeholder="Your email" className="bg-whitesmoke-500" 
                type='email'
                {...register('email')}
                 />

				<Input placeholder="Passwrod"
                className="bg-whitesmoke-500" 
                type='password'
                {...register('password')}
                />

                <Button className='bg-blueviolet font-semibold' type='submit'>{formType === 'login' ? 'login' :"sign up"}</Button>
			</form>
		</div>
  );
}

export default AuthForm