import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/Cake/CakeAction';
import { buyIceCream } from '../redux/IceCream/IceCreamAction';

const ItemsContainer = (props) => {
    console.log(props)
    return (
      <div>
        <h1>number of items - {props.item} </h1>
        <button onClick={()=>props.dispatch()}>buy items</button>
      </div>
    );
};


const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
      ? () => dispatch(buyCake())
      : () => dispatch(buyIceCream());
        return {
          dispatch: dispatchFunction,
        };
}
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.ice.NumOfIceCreams;
  return {
    item: itemState,
  };
};

export default connect( mapStateToProps,mapDispatchToProps) (ItemsContainer);