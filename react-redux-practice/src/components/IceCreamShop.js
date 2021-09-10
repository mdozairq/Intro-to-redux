import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyIceCream} from '../redux'

function IceCreamShop() {
    const numOfIceCream = useSelector(state=>state.iceCream.numOfIceCreams)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Number of IceCream :{numOfIceCream}</h1>
            <button onClick={() => dispatch(buyIceCream())}>buy Here</button>
        </div>
    )
}

export default IceCreamShop
