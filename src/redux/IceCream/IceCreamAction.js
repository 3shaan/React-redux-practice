import { Buy_IceCram } from "./IceCreamTypes"

export const buyIceCream = (num=1) => {
    return {
        type: Buy_IceCram,
        payload: num,
    }
}
