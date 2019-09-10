const redux = require('redux')
const createStore = redux.createStore

//First, create an initiall state
const initialState = {
    counter: 0, 
}

//Then, set up a reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INC_COUNTER':
            return {counter: state.counter + 1};
            break;
        case 'ADD_COUNTER':
            return {counter: state.counter + action.value};
            break;
        case 'SUBTRACT_COUNTER':
            return {counter: state.counter- action.value};
            break;
        default:
            return state;
            break
    }
}

//Next, create a store
const store = createStore(reducer)
console.log(store.getState())

// subscription 
store.subscribe(() => {
    console.log('Subscription Fired')
})

// dispatch actions 
store.dispatch({type: 'INC_COUNTER'})
console.log(store.getState())

// increment counter by certain value 
store.dispatch({type: 'ADD_COUNTER',value: 100})
console.log(store.getState())

// decrement counter by a certain value
store.dispatch({type: 'SUBTRACT_COUNTER',value: 100})
console.log(store.getState())