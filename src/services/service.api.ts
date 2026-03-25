import {ICar} from "@/models/ICar";
import {urls} from "@/constants/urls";

export const getAllCar =async ():Promise<ICar[]> => {
    return  await fetch(urls.cars.getAllCars)
        .then((response) => response.json())

}
export const postCarService =  async (data:FormData) => {
     await  fetch(urls.cars.getAllCars, {
        method: 'POST',
        body: JSON.stringify({
            brand: data.get('brand'),
            price: data.get('price'),
            year: data.get('year')
        }),
        headers: {
            'Content-Type': 'application/json'
        }

    });
}