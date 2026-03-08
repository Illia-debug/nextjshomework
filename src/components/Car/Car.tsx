import {ICar} from "@/models/ICar";
import React, {FC} from 'react';

type CarPropsType={
    car:ICar
}

const Car:FC<CarPropsType> = ({car}) => {
    return (
        <div>
          <span>id:</span>{car.id}, <span>brand:</span>{car.brand}, <span>year:</span>{car.year}, <span>price:</span>{car.price}
        </div>
    );
};

export default Car;