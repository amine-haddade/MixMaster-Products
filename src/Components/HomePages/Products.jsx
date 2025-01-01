import { useState,useEffect } from "react"
import { useSerch } from "../../_provider/Serch";

import { Link } from "react-router-dom";
import { X } from 'lucide-react';
function Products() {
    const [listProducts,setListProducts]=useState([])
    const [listProductsFilter,setListProductsFilter]=useState([])
    const {valueSerch,handelValueSerch,activeMarkButton,VideSerchInput}=useSerch()

    

    useEffect(()=>{
        const filterList=listProducts.filter((el)=>el.title.toLowerCase().includes(valueSerch.toLowerCase()))
        setListProductsFilter(filterList)
    },[valueSerch])


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {setListProducts(json)
                setListProductsFilter(json)
            })
            .catch(error => console.error("Error fetching products:", error));
    }, []);
     // Fonction pour tronquer le titre
     const truncateTitle = (title) => {

        const words = title.split(' '); // modfier le title en array  Sépare le titre en mots
        if (words.length > 10) {
            return words.slice(0,7).join(' ') + ' . . .'; // Retourne les 10 premiers mots avec des points de suspension
        }
        return title; // Retourne le titre original s'il a moins de 10 mots
    };
    const ListProduct=listProductsFilter.map((element,index)=>{
        return(
                <div className="singleProduct" key={index}>
                    <img src={element.image} alt="" />
                    <div className="detaill">
                        <h1>{truncateTitle(element.title)}</h1>
                        <p>{element.category}</p>
                        <Link className="detaill-btn-product" to={`/productId/${element.id}`}  >detail</Link>
                    </div>
                </div>
        )
    })
    
  return (
    <div >
        <div className="serch-box" key="serch-box">
             <div className="input-serche">
                 <input type="text" value={valueSerch} onChange={(e)=>handelValueSerch(e)} ></input>
                 { !activeMarkButton &&
                     <X className='x-icone'  onClick={VideSerchInput}/>
                 }
             </div>
             <button>serche</button>
         </div>
        <div className="products">
            {ListProduct}
        </div>
    </div>
  )
}

export default Products
