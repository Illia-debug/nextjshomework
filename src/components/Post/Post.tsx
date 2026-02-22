import {IPost} from "@/model/IPost";
import {FC} from "react";
import Link from "next/link";

type MyPropsType={
    post:IPost
}
export const Post:FC<MyPropsType> = ({post}) => {
  return(
      <div>
          {post.title} id:{post.id}
          <div style={{
              color:'red'
          }}><Link href={'/posts/'+post.id}>post detail link </Link> </div>
      </div>
  )
}