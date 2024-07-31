import {z} from 'zod'

export const createaTaskSchema = z.object({
    title: z.string().min(1),
    status: z.string().min(3),
    priority: z.string().optional(),
    deadline:z.date(),
    description: z.string().optional(),
})