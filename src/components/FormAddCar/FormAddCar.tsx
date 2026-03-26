'use client'
import React from 'react';
import {postCar} from "@/server-Actions/serverActions";
import {useForm} from "react-hook-form";
import {carFormData, carSchema} from "@/lib/schema";
import {zodResolver} from "@hookform/resolvers/zod";

const FormAddCar =  () => {
const {register,handleSubmit,formState:{errors}} = useForm<carFormData>({
    resolver:zodResolver(carSchema)
});
const onSubmit = async (data:carFormData) => {
  const res = await fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
      method: "POST",
      body: JSON.stringify({
          brand: 'volvo',
          price: 20000,
          year: 1995
      }),
      headers: {
          'Content-Type': 'application/json'
      }
  })
    const json = await res.json();
    console.log(json);
}


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} action={postCar}>
                <input {...register('brand')} placeholder={'brand'}/>
                {errors.brand&&(<p>{errors.brand.message}</p>)}
                <input {...register('price')} placeholder={'price'}/>
                {errors.price&&(<p>{errors.price.message}</p>)}
                <input {...register('year')} placeholder={'year'}/>
                {errors.year&&(<p>{errors.year.message}</p>)}
                <button type={"submit"}>submit</button>
            </form>
        </div>
    );
};

export default FormAddCar;

