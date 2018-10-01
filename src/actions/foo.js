import axios from 'axios';
export function init(state) {
    console.log('Init called')
    console.log(state)
	return dispatch => {
		return axios({
			method: 'post',
            data:state.foo,
			url: 'https://www.omtut.com/api/users/login_for_free1',
			 headers: {
                  'Content-Type': 'application/json'   }
		})
		.then(function ({data}) {
			if(data.status){
				dispatch({
					type: 'LOGIN-DATA',
					data,
				})
			}else{

					dispatch({
						type:'UPDATE-DATA',
						name:'error',
						value:true
					})
			}
		})
	}
}