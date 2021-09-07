const redux = require('redux');
const reduxLogger = require('redux-logger')
/*Middleware is the suggested way to provide redux with custom funcionality
provides a third-party extension point between dispatching an action, and the moment it reaches the reducer
*/
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()



/*            Subsribed
            ------------>(App)----------
            |                           |dispatch
            |                           |
            |                          \/
    (Redux Store[state])             (Action)
            ^                           |
            |                           |
            |                           |
            |                           |
            --------->(Reducer)<---------

*/

const BUY_OBJECT = "BUY_OBJECT"
const BUY_EDIBLE = "BUY_EDIBLE"
const combineReducers = redux.combineReducers

function buyObject(){
    return{
        type: BUY_OBJECT,
        info: "First Redux action"
    }
}


function buyEdible(){
    return{
        type: BUY_EDIBLE,
        info: "second Redux action"
    }
}

//(previousState, action) ==> newState

// const initialState ={
//     numOfObjects:10,
//     numOfEdibles:20
// }

const initialObjectState = {
    numOfObjects: 10
}

const initialEdibleState = {
    numOfEdibles: 20
}

// const reducer=(state = initialState, action)=>{
//     switch(action.type){
//         case BUY_OBJECT: return{
//             ...state,
//             numOfObjects: state.numOfObjects-1
//         }
//         case BUY_EDIBLE: return{
//             ...state,
//             numOfEdibles: state.numOfEdibles-1
//         }
//         default: return state
//     }
// }

const objectReducer=(state = initialObjectState, action)=>{
    switch(action.type){
        case BUY_OBJECT: return{
            ...state,
            numOfObjects: state.numOfObjects-1
        }
    default: return state
    }
}

const edibleReducer=(state = initialEdibleState, action)=>{
    switch(action.type){
        case BUY_EDIBLE: return{
            ...state,
            numOfEdibles: state.numOfEdibles-1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    object: objectReducer,
    edible: edibleReducer
})
const store = redux.createStore(rootReducer, applyMiddleware(logger));
console.log('Initial State', store.getState())
const unsubscribe=store.subscribe(()=>console.log('Updated State', store.getState()))
store.dispatch(buyObject())
store.dispatch(buyEdible())
store.dispatch(buyObject())
unsubscribe()

