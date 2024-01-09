

function ProductReducer(state,action) {
 switch(action.type)
 {
    case "LOADING":{
        return {...state,isLoading:true}
    }
    case "FETCH_DATA":{
        return {...state,data:action.payload,isLoading:false}
    }
    case "FETCH_ERROR":{
        return {...state,isLoading:false,error:action.payload}
    }
    default:
        return state


 }

}

export default ProductReducer
