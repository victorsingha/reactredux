let initialState = 10;
export default function changeNumber(state = initialState,action){
    if(action.type == "UP"){
        return state + 10;
    }
    if(action.type == "DOWN"){
        return state - 1;
    }
    return state;
}