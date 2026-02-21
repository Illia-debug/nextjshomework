import {IPost} from "@/model/IPost";
import {FC} from "react";

type MyPropsType={
    post:IPost
}
export const Post:FC<MyPropsType> = ({post}) => {
  return(
      <div>
          {post.title} id:{post.id}
      </div>
  )
}