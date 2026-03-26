import {z} from 'zod';

export const carSchema = z.object({
    brand: z.string().min(2, 'min 2 char lenght'),
    price: z.string().min(2, 'min 500 value'),
    year: z.string().min(2, 'min 1960 value'),
});
export type carFormData = z.infer<typeof carSchema>;