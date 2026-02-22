import React from 'react';
import PostId from "@/components/PostId/PostId";

type Props = {
    params: { id: string; };
}

const Page = async ({params}: Props) => {

    return (
        <div>
            <PostId params={params}/>
        </div>
    );
};

export default Page;