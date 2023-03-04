// 01. call createSlice :
const createSlice = require("@reduxjs/toolkit").createSlice ;

// 02. set Initial state :
const initialState = {
    count : 0
}


// 03. set reducers 
//** createSlice always wants objects **
// ** It expects always minimum three peramiter name, initial state , reducers **

const counterSlice = createSlice({
    name: "Counter",
    initialState : initialState,
    reducers :{
        increment : (state, action) => {
            // state.count ++
            state.count += 2 
        },
        decrement : (state, action) =>{
            state.count --
        }
    }
})

module.exports = counterSlice.reducer ;

// This counterAction taken as a object . Because module.export.anyName always taken object:
module.exports.counterAction = counterSlice.actions ;