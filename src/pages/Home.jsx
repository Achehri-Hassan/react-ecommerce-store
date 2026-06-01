

import { getProducts } from "../data/products.js";
import { Link } from "react-router-dom";
import "../assets/css/Home.css"

export default function Home(){
    const products = getProducts();
    return(

        <div className="page">
            <div className="home-hero">
                <h1 className="home-title">Welcome to ShopHub</h1>
                <p className="home-subtitle">Discover amazing products at great prices</p>
            </div>
            <div className="container">
                <h2 className="page-title">Our Products</h2>
                <div className="product-grid">
                    
                    {products.map((products) =>
                       
                        <div className="product-card" key={products.id}>
                            <img src={products.image} alt=""  className="product-card-image"/>
                            <div className="product-card-content">
                                <h3 className="product-card-name">{products.name}</h3>
                                <p className="product-card-price">${products.price}</p>
                                <div className="product-card-actions" >
                                    <Link className="btn btn-secondary">View Details</Link>
                                    <button className="btn btn-primary">Add to Card</button>
                                </div>
                            </div>
                        </div>
                        
                    )}
                </div>
            </div>
        </div>
    )
}