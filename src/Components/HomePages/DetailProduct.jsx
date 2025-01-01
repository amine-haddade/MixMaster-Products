import {  useParams } from "react-router-dom"
import { useEffect, useState } from "react"


function DetailProduct() {
    const {id}=useParams()
    const [detailProduct,setDetailProduct]=useState({})


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{setDetailProduct(json)})
    },[id])

    console.log(detailProduct)

    const  trancuteTitle=(title)=>{
        if(title){
            const Word=title.split(' ')
            if(Word.length > 4){
                return Word.slice(0,4).join(' ')+'...'
            }
            return title
        }
        
        
    }
    

  return (
    <div>
           <h1 className="title">{trancuteTitle(detailProduct.title)}</h1>
            <div className="content">
                <div className="image-container">
                    <img src={detailProduct.image} alt="Ace Cocktail" className="cocktail-image" />
                </div>
                <div className="details">
                    <div className="detail-item"><span className="label">Name :</span> {detailProduct.title}</div>
                    <div className="detail-item"><span className="label">Category :</span> {detailProduct.category}</div>
                    <div className="detail-item"><span className="label">deccription :</span> {detailProduct.description}</div>
                    <div className="detail-item"><span className="label">price :</span> {detailProduct.price}</div>
                </div>
            </div>
    </div>
    
  )
}

export default DetailProduct
