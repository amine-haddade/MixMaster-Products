
import { useContext } from "react"
import { createContext, useState,useEffect } from "react"
const SerchContext=createContext()
function SerchProvider({children}) {
    const [valueSerch,setValueSerch]=useState('')
    const [activeMarkButton,setActiveMarkButton]=useState(true)
    function handelValueSerch(e){
        setValueSerch(e.target.value)
    }
    useEffect(()=>{
        if(valueSerch !=''){
            setActiveMarkButton(false)
        }

    },[valueSerch])
    const VideSerchInput=()=>{
        setValueSerch('')
        setActiveMarkButton(true)
    }
    
  return (
    <SerchContext.Provider  value={{valueSerch,handelValueSerch,activeMarkButton,VideSerchInput}}>
        {children}
    </SerchContext.Provider>
  )
}

export default SerchProvider

export function useSerch(){
    return useContext(SerchContext)
}
