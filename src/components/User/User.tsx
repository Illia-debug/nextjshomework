import {IUser} from "@/model/IUser";
import {FC} from "react";

type MyPropsType={
    user:IUser
}
export const User:FC<MyPropsType> = ({user}) => {
  return(
      <div>
          {user.name}
      </div>
  )
}