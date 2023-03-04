// 01. call configStore for creating our store :
// call other dependencies
const configStore = require('@reduxjs/toolkit').configureStore ;

// this name is totally upon to me.
const counterReducer = require("../Features/counter/CounterTodo")


//02. create Store :
const store = configStore({
    reducer:{
        // this name is totally upon to me , Whatever i like ,
        // counter : counterReducer
        balercounter : counterReducer
    }
})

module.exports = store ;