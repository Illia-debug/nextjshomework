import {IUser} from "@/model/IUser";
import {FC} from "react";
import Link from "next/link";

type MyPropsType={
    user:IUser
}
export const User:FC<MyPropsType> = ({user}) => {

  return(
      <div>
          {user.name}
          <div style={{
              color:'red'
          }}> <Link href={'/users/'+user.id}>user detail</Link> </div>

      </div>
  )
}