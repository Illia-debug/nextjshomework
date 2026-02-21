import {IComment} from "@/model/IComment";
import React, {FC} from 'react';

type MyPropsType = {
    comment: IComment
};

export const Comment:FC<MyPropsType> = ({comment}) => {
    return (
        <div>
            {comment.email} id:{comment.id}
        </div>
    );
};

