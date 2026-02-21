import React from 'react';
import {IUser} from "@/model/IUser";
import {User} from "@/components/User/User";

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
                 users.map((value) => <User user={value} key={value.id}/>)
            }
        </div>
    );
};

export default Users;