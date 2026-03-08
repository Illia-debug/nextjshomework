import React from 'react';
import {postCar} from "@/server-Actions/serverActions";

const FormAddCar = async () => {



    return (
        <div>
            <form action={postCar}>
                <input type="text" name={'brand'} placeholder={'brand'} />
                <input type="number" name={'price'} placeholder={'price'}/>
                <input type="number" name={'year'} placeholder={'year'}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormAddCar;

