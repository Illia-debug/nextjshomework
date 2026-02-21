import React from "react";
type Props={
    params: { id: string; };
}

const Page = async ({params}:Props) => {
 const newVar = await params;
    console.log(newVar)
    return (
        <div>
            user content
        </div>
    );
};

export default Page;