import { createSlice } from '@reduxjs/toolkit'
import { lazy, Suspense, useCallback, useMemo, useReducer } from 'react'
const About = lazy(()=>import("./About"))



const initvalue = 0
const reducerData = (state,action)=>{

  // console.log(state,action);

  switch (action.type){
    case "ADD":
      return state+1

    case "REMOVE":
      return state-1

    case "RESET":
      return 0

    default:
      return initvalue
  }
  

}





const App = () => {

   
  const [state,dispatch] = useReducer(reducerData,initvalue)


  const quesry = useCallback(()=>{


    return ()=>{

    }

  },[])


  const slice = createSlice({
    name:"counter",initialState,
    reducersfunction:{


      increment : (state)=>{

      }

    }
  })


  return (
    <>
    <div>
      <div>
        <Suspense fallback={<h3>Loaddingg...</h3>}>
          <About/>
        </Suspense>
      </div>
      <h1>
     {state}
     <button onClick={()=>dispatch({type:"ADD"})}>Add</button>
     <button onClick={()=>dispatch({type:"REMOVE"})}> Remove</button>
     <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
      </h1>
    </div>
    </>
  )
}

export default App