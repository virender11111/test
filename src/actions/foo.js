import axios from 'axios';
export function init(state) {
    console.log('Init called')
    console.log(state)
//var headers;
    var data=state.foo;
//headers['Content-Type'] = 'application/json';
	//return dispatch => {
		return axios({
			method: 'post',
            data:state.foo,
			url: 'https://www.omtut.com/api/users/login_for_free1',
			 headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin':'*',
              }
		})
		.then(function ({data}) {
            console.log('calllllll')
            console.log(data)
			/*dispatch({
				type: 'LOGIN-DATA',
				data,
			})*/
		})
	//}
}