

import { getProducts } from "../data/products.js";

import "../assets/css/Home.css"
import ProductCard from "../components/ProductCard.jsx";


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
                       
                       <ProductCard product = {products} key={products.id}/>
                        
                    )}
                </div>
            </div>
        </div>
    )
}