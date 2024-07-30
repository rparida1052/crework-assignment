import {z} from 'zod'


export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

export const signupSchema = loginSchema.extend({
    fullname: z.string().min(4).max(10),
})
