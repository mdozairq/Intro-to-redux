import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'



const CakeContainer = (props) => {
    return (
        <div>
            <h1>Welcome to Cakes store</h1>
            <h2>Number Of Cake:{props.numOfCakes} </h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)