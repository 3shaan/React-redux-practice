import { Buy_Cake } from "./CakeType";

const initialCakes = {
  numberOfCakes: 10,
};
      
    


const cakeReducer = (state = initialCakes, action) => {
    // console.log(state());
    switch (action.type) {
        case Buy_Cake: return {
          ...state,
          numberOfCakes: state.numberOfCakes - 1,
        };
    
        default: return state
    }
}

export default cakeReducer;