import React from 'react';

const AllCars = async () => {
  const cars =await  fetch('http://owu.linkpc.net/carsAPI/v1/cars')
        .then((response) => response.json())

    return (
        <div>
            {
                cars.map((car)=><div key={car.id}>{car.id}</div>)
            }
        </div>
    );
};

export default AllCars;