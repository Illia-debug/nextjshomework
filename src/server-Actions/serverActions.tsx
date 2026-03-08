'use server'

import {revalidatePath} from "next/cache";

export const postCar=async (formData:FormData)=>{
    // console.log(formData)
 await fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
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