'use server'
import {revalidatePath} from "next/cache";
import {postCarService} from "@/services/service.api";

export const postCar=async (formData:FormData)=>{

    await postCarService(formData);

    revalidatePath('/')
}