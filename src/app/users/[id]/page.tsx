import React from "react";
import {userService} from "@/services/Api.services";
type Props={
    params: { id: string; };
}


const Page = async ({params}:Props) => {
 const {id} = await params;
 await userService.getUser(id).then(( oneUser)=>{
     console.log(oneUser)
 })

    return (
        <div>
            user content

        </div>
    );
};

export default Page;