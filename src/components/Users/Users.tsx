import React from 'react';
import {IUser} from "@/model/IUser";
import {User} from "@/components/User/User";
import {userService} from "@/services/Api.services";

const Users = async () => {
    let users: IUser[] | [] = [];


    await userService.getUsers().then((allUsers) => {
        users = allUsers
        // console.log(allUsers)
    })
    return (
        <div>
            {
                 users.map((value) => <User user={value} key={value.id}/>)
            }
        </div>
    );
};

export default Users;