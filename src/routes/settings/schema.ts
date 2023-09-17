import { z } from 'zod';

export const formSchema = z
  .object({
    username: z.string().min(2).max(50),
    confirm: z.string(),
  })
  .refine((data) => data.confirm === data.username, {
    message: 'Username and confirm must match',
    path: ['confirm'],
  });

export type FormSchema = typeof formSchema;
