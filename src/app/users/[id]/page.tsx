import React from "react";
import UserId from "@/components/UseId/UserId";

type Props={
    params: { id: string; };
}


const Page = async ({params}:Props) => {

    return (
        <div>
           <UserId params={params}/>
        </div>
    );
};

export default Page;