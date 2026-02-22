import React from "react";
import {userService} from "@/services/Api.services";
import {IUser} from "@/model/IUser";

type Props={
    params: { id: string; };
}


const Page = async ({params}:Props) => {
 const {id} = await params;
    let user = {} as IUser;
 await userService.getUser(id).then(( oneUser)=>{
     // console.log(oneUser)
     user = oneUser
 })
    // console.log(user)

    return (
        <div>
            <div>{user.name},{user.id}</div>
            <div>email:{user.email}</div>
        </div>
    );
};

export default Page;