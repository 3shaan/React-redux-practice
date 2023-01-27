import { Buy_Cake } from "./CakeType"


export const buyCake = (num = 1) => {
    console.log(num)
    return {
        type: Buy_Cake,
        payload : num,
    }
}