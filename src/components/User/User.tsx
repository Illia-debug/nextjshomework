import {IUser} from "@/model/IUser";
import {FC} from "react";
import Link from "next/link";

 type MyPropsTypeUser ={
    user:IUser
}
export const User:FC<MyPropsTypeUser> = ({user}) => {

  return(
      <div>
          {user.name}
          <div style={{
              color:'red'
          }}> <Link href={'/users/'+user.id}>user detail</Link> </div>

      </div>
  )
}