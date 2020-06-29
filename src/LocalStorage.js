//function that loads the state from localStorage
export const loadState = () =>{
    try{
        const serializedState  = localStorage.getItem("state");
        if(serializedState === null){
            return undefined
        }
        let storageState=  JSON.parse(serializedState)
        return storageState

    }catch(error){
       // return undefined;
       console.log(error);
    }
}
//function that saves the state to localStorage
export const saveState = state =>{

    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state",serializedState)
    }catch(error){
        console.log("local storage failure")
    }

}