
import { combineReducers } from 'redux';
  const defaultFormdata={
    username:'',
    password:'',
      error:false,
      login_data:null,
      attribute:'',
      attributevalue:false
    }
function foo(state = defaultFormdata, action){
  switch (action.type) {
      case 'UPDATE-DATA':
          var newstate={...state}
           newstate[action.name]=action.value;
          return newstate;
      case 'LOGIN-DATA':
        var newstat2 ={...state}
            newstat2['login_data'] = action.data.data;
            return newstat2;
    default:
      return state
  }
}
export default foo;
