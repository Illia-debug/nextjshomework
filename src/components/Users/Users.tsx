import React from 'react';
import {IUser} from "@/model/IUser";

const Users = async () => {
    let users: IUser[] | [] = [];
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then((value) => value.json())
        .then((value) => {
            // console.log(value)
            users=value
        });
    console.log(users)
    return (
        <div>
            {
                 users.map((value) => <div key={value.id}> {value.name}</div>)
            }
        </div>
    );
};

export default Users;