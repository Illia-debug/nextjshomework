import {ICar} from "@/models/ICar";
import {urls} from "@/constants/urls";

export const getAllCar =async ():Promise<ICar[]> => {
    return  await fetch(urls.cars.getAllCars)
        .then((response) => response.json())

}