import {IComment} from "@/model/IComment";
import React, {FC} from 'react';
import Link from "next/link";

type MyPropsType = {
    comment: IComment
};

export const Comment:FC<MyPropsType> = ({comment}) => {
    return (
        <div>
            {comment.email} id:{comment.id}
            <div style={{
                color:'red'
            }}><Link href={'/comments/' + comment.id}>comment detail link </Link></div>
        </div>
    );
};

