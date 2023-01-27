import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream } from '../redux/IceCream/IceCreamAction';

const IceCream = () => {
    const numOfIceCream = useSelector((state) => state.ice.NumOfIceCreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Number of IceCream -{numOfIceCream} </h1>
            <button onClick={()=>dispatch(buyIceCream())}>Buy Ice Cream </button>
        </div>
    );
};

export default IceCream;