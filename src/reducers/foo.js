
import { combineReducers } from 'redux';
  const defaultFormdata={
    username:'',
    password:''
    }
function foo(state = defaultFormdata, action){
  
  switch (action.type) {
      case 'UPDATE-DATA':
          var newstate={...state}
           newstate[action.name]=action.value;
          return newstate;
    
    default:
      return state
  }
}
export default foo;
