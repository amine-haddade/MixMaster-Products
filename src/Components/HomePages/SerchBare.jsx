// import { X } from 'lucide-react';
import { useState,useEffect } from 'react';
function useSerch() {
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
    
    
    
    return [valueSerch,handelValueSerch,activeMarkButton,VideSerchInput]
  
}

export default useSerch
