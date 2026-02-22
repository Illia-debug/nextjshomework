import React from 'react';
import {IComment} from "@/model/IComment";
import {userService} from "@/services/Api.services";
type Props={
    params: { id: string; };
}

const CommentId = async ({params}:Props) => {
    const {id} = await params;
    let comment = {} as IComment;
    await userService.getComment(id).then((oneComment)=>{
        comment=oneComment
    })
    return (
        <div>
                <div>{comment.id} name:{comment.name}</div>
        </div>
    );
};

export default CommentId;