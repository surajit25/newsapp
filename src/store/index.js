
import {createStore} from 'redux'



const  InitialState={
    Articles:[]
}


const CreateReducer = (state=InitialState,action)=>{

    switch(action.type){

        case 'search':

            console.log(action.payload)
        
            return {
                Articles:action.payload
            }

        default :

        return state

    }

}

const store = createStore(CreateReducer)


export default store
