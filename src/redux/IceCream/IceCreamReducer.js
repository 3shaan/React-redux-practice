import { Buy_IceCram } from "./IceCreamTypes";


const initialIceCream = {
    NumOfIceCreams : 20,
}

const IceCreamReducer = (state=initialIceCream, action) => {
    switch (action.type) {
        case Buy_IceCram: return {
            ...state,
            NumOfIceCreams : state.NumOfIceCreams - action.payload
        }
            
    
        default: return state;
    }
}

export default IceCreamReducer;