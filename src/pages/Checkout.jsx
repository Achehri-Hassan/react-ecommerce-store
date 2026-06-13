


import { UseCart } from "../context/CartContext";


export default function Checkout(){
    
    const [getCartItemsWithProducts]= UseCart();
    const cartItems = getCartItemsWithProducts();

    return (<div className="page">
         <div className="container">
             <h1 className="page-title">Checkout</h1>
             <div className="checkout-container">
                 <div className="checkout-items">
                      <h2 className="checkout-section-title">Order Summary</h2>
                      {cartItems.map((item) => {
                         <div className="checkout-item">
                             <img src={item.product.image} alt={item.product.name}  className="checkout-item-image"/>

                             <div className="checkout-item-details">
                                 <h3>{item.product.name}</h3>
                                 <p>${item.product.price} each</p>
                             </div>
                             <div className="checkout-item-controls">
                                 
                              <div className="quantity-controls">
                                 <button className="quantity-btn">-</button>
                                 <span className="quantity-value">{item.quantity}</span>
                                 <button className="quantity-btn">+</button>
                              </div>

                              <p className="checkout-item-total">
                                ${item.product.price * item.quantity}
                              </p>

                              <button className="btn btn-secondary">Remove</button>

                             </div>
                         </div>
                      })}
                 </div>
             </div>
         </div>
    </div>
    );
}