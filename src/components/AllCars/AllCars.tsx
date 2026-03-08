import React from 'react';
import FormAddCar from "@/components/FormAddCar/FormAddCar";

const AllCars = async () => {
  const cars =await  fetch('http://owu.linkpc.net/carsAPI/v1/cars')
        .then((response) => response.json())
    return (
        <div>
            {
                cars.map((car)=><div key={car.id}>{car.id} {car.brand}</div>)
            }
            <FormAddCar/>
        </div>
    );
};

export default AllCars;