import {IUser} from "@/model/IUser";
import {urls} from "@/constants/urls";

export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then((response) => response.json())
    },
    getUser: async (id: number) => {
        return await fetch(urls.users.byId(id))
            .then((response) => response.json())
    }
}