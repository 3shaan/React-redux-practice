import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../redux/Users/UserAction';

const UserContainer = ({ userState, userDispatch }) => {
    console.log(userState)
    useEffect(() => {
        userDispatch();
    },[userDispatch])
    return userState.loading ? <h2>Loading....</h2> : userState.error ? <h2>{userState.error}</h2> : <div>
        <h1>user  list</h1>
        <div>
            {
                userState && userState.user && userState.user.map(user => <h2> { user.name}</h2>)
            }
        </div>
    </div>
};

const mapStateToProps = (state) => {
    return {
        userState : state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userDispatch : ()=> dispatch(fetchUser())
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (UserContainer);