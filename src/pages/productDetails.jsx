

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../data/products";


export default function ProductDetails(){
     
    const {id} = useParams();
    const [product ,  setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const foundProduct =  getProductById(id);
         
        if(!foundProduct){
             navigate("/");
             return;
        }

        setProduct(foundProduct);

    } , [id]);

    return <div className="page">
         <div className="container">
             <div className="product-detail">
                 <div className="product-detail-image">
                     <img src={product.image} alt={product.name} />
                 </div>
                 <div className="product-detail-content"> 
                     <h1>{product.name}</h1>
                     <p>${product.price}</p>
                     <p>{product.description}</p>
                     <button className="btn btn-primary ">Add to card</button>
                 </div>
             </div>
         </div>
    </div>
}