'use server'

import {revalidatePath} from "next/cache";
import {urls} from "@/constants/urls";

export const postCar=async (formData:FormData)=>{
    // console.log(formData)
 await fetch(urls.cars.getAllCars, {
    method: 'POST',
    body: JSON.stringify({
        brand: formData.get('brand'),
        price: formData.get('price'),
        year: formData.get('year')
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})
    revalidatePath('/')
}