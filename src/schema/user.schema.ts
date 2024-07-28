import {z} from 'zod';


export const userRegistrationSchema = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(6).max(10),
})

export const userLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(10),
})