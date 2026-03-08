import React from 'react';
import FormAddCar from "@/components/FormAddCar/FormAddCar";
import {ICar} from "@/models/ICar";
import {getAllCar} from "@/services/service.api";
import Car from "@/components/Car/Car";

const AllCars = async () => {
    const cars: ICar[] = await getAllCar()
    return (
        <div>
            {
                cars.map((car) => <Car car={car} key={car.id}/>)
            }
            <FormAddCar/>
        </div>
    );
};

export default AllCars;