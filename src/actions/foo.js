import axios from 'axios';
export function init(state) {
	return dispatch => {
		return axios({
			method: 'post',
            data:state.foo,
			url: 'https://www.omtut.com/api/users/login_for_free1',
			 headers: {
                  'Content-Type': 'application/json'   }
		})
		.then(function ({data}) {
            console.log(data);
			if(data.status){
				dispatch({
					type: 'LOGIN-DATA',
					data,
				})
                dispatch({
						type:'UPDATE-DATA',
						name:'error',
						value:false
					})
			}else{
                dispatch({
					type: 'LOGIN-DATA',
					data:data
				})
                dispatch({
						type:'UPDATE-DATA',
						name:'error',
						value:true
					})
			}
		})
	}
}