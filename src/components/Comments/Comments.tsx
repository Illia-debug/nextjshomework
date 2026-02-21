import React from 'react';
import {IComment} from "@/model/IComment";
import {userService} from "@/services/Api.services";
import {Comment} from "@/components/Comment/Comment";

const Comments = async () => {
    let comments: IComment[] | [] = [];
    await userService.getComments().then((allComments)=>{
        comments=allComments
    })
    return (
        <div>
            {
                comments.map((value)=><Comment comment={value} key={value.id}/>)
            }
        </div>
    );
};

export default Comments;