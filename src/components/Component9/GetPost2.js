import { useEffect, useReducer } from "react";

const initialState={
    loading: true,
    post : {},
    error: false,

}

const reducer = ((currentState,action)=>{
    switch(action.type){
        case 'SUCCESS' :
            return {
              loading : false,
              post: action.result,
              error: ''
            }
        case 'ERROR' :{
            return{
                loading: false,
                post: {},
                error: 'Can not fetch your api link Man write the correct api!!!'
            }
        }
        default : {
            return currentState;
        }
    }
})


const GetPost2 = () =>{
    const [state, dispatch] = useReducer(reducer, initialState) ;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                dispatch({type: 'SUCCESS', result: data})
            })
            .catch(()=>{
                    dispatch({type: 'ERROR'})
            })
    }, []);
    return(
        <div>
                {state.loading ? 'loading.......' : state.post.title}
                {state.error ? state.error : null}
              
                
        </div>
    )
}

export default GetPost2;