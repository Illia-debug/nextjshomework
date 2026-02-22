import React from 'react';
import {IPost} from "@/model/IPost";
import {userService} from "@/services/Api.services";
type Props = {
    params: { id: string; };
}
const PostId = async ({params}: Props) => {
    const {id} = await params;
    let post = {} as IPost;
    await userService.getPost(id).then((onePost) => {
        post = onePost
    });
    return (
        <div>
            <div>id: {post.id} body: {post.body}</div>
            <div>TITLE: {post.title}</div>
        </div>
    );
};

export default PostId;