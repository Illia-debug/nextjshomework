import {IUser} from "@/model/IUser";
import {urls} from "@/constants/urls";
import {IPost} from "@/model/IPost";
import {IComment} from "@/model/IComment";

export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then((response) => response.json())
    },
    getUser: async (id: string):Promise<IUser> => {
        return await fetch(urls.users.byId(id))
            .then((response) => response.json())
    },
    getPosts: async (): Promise<IPost[]> => {
        return await fetch(urls.posts.allPosts)
            .then((response)=> response.json())
    },
    getComments:async ():Promise<IComment[]>=>{
        return await fetch(urls.comments.allComments)
            .then((response)=>response.json())
    }
}