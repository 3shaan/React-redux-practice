import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/Cake/CakeAction';

const HooksAction = () => {
    const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
    const dispatch = useDispatch();
    console.log(numberOfCakes)
    return (
        <div>
            <h1>Number of cakes -{ numberOfCakes}</h1>
            <button onClick={()=>dispatch(buyCake())}>Buy Now</button>
        </div>
    );
};

export default HooksAction;