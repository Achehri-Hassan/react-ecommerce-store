


import { UseCart } from "../context/CartContext";


export default function Checkout(){
    
    const [getCartItemsWithProducts , UpdateQuantity , removeFromCart , getCartTotal , clearCart]= UseCart();
    const cartItems = getCartItemsWithProducts();

    const total = getCartTotal();

    function placeOrder(){
         alert("Successful Order");
         clearCart();
    }
    return (<div className="page">
         <div className="container">
             <h1 className="page-title">Checkout</h1>
             <div className="checkout-container">
                 <div className="checkout-items">
                      <h2 className="checkout-section-title">Order Summary</h2>
                      {cartItems.map((item) => {
                         <div className="checkout-item" key={item.id}>
                             <img src={item.product.image} alt={item.product.name}  className="checkout-item-image"/>

                             <div className="checkout-item-details">
                                 <h3>{item.product.name}</h3>
                                 <p>${item.product.price} each</p>
                             </div>
                             <div className="checkout-item-controls">
                                 
                              <div className="quantity-controls">
                                 <button className="quantity-btn" onClick={() => UpdateQuantity(item.id , item.quantity - 1)}>-</button>
                                 <span className="quantity-value" >{item.quantity}</span>
                                 <button className="quantity-btn" onClick={() => UpdateQuantity(item.id , item.quantity + 1)}>+</button>
                              </div>

                              <p className="checkout-item-total">
                                ${(item.product.price * item.quantity).toFixed(2)}
                              </p>

                              <button className="btn btn-secondary" onClick={()=> removeFromCart(item.id)}>Remove</button>

                             </div>
                         </div>
                      })}
                 </div>
                 <div className="checkout-summary">
                      <h2 className="checkout-section-total">Total</h2>
                      <div className="checkout-total">
                         <p className="checkout-total-label">Subtotal</p>
                         <p className="checkout-total-value">${total.toFixed(2)}</p>
                      </div>
                      <div className="checkout-total">
                          <p className="checkout-total-label">Total</p>
                          <p className="checkout-total-value">
                            ${total.toFixed(2)}
                          </p>
                      </div>
                      <button className="btn btn-primary" onClick={placeOrder}>place Order</button>
                 </div>
             </div>
         </div>
    </div>
    );
}