const store = require("./App/store") ;

// ** this const name as same as action name from counterTodo modile.export.name ** :
const {counterAction} =  require("./Features/counter/CounterTodo")


//subscribe take a callback Function where we connected with getStore:
store.subscribe(()=>{
    // this console log is for see my update state . because we can see our state from getState() 
    console.log(store.getState());
})

store.dispatch(counterAction.increment()) ;
store.dispatch(counterAction.increment()) ;
store.dispatch(counterAction.decrement()) ;


