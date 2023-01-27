import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/IceCream/IceCreamAction";

const NewIceCream = () => {
    const numOfIceCream = useSelector((state) => state.ice.NumOfIceCreams);
    const dispatch = useDispatch();
    const [num,setNum]= useState(1)
    
  return (
    <div>
          <h1>Number of IceCream -{numOfIceCream} </h1>
          <input type="text" value={num} onChange={ (e)=>setNum(e.target.value)} />
      <button onClick={() => dispatch(buyIceCream(num))}>Buy {num} Ice  Cream </button>
    </div>
  );
};

export default NewIceCream;
