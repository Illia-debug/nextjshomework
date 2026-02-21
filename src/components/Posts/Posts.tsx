import React from 'react';
import {IPost} from "@/model/IPost";
import {userService} from "@/services/Api.services";
import {Post} from "@/components/Post/Post";

const Posts = async () => {
    let post: IPost[] | [] = []
    await userService.getPosts().then((allPosts)=>{
        post=allPosts
    })
    return (
        <div>
            {
                post.map((value) =><Post post={value} key={value.id}/> )
            }
        </div>
    );
};

export default Posts;