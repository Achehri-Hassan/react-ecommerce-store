



import { createContext, useState , useContext } from "react";
import { getProductById } from "../data/products";

const CartContext = createContext(null);

export default function CardProvider({children}){
    
    const [cartItems , setCartItem] = useState([]);
    
    function addToCart(productId){

     const existing = cartItems.find((item) => item.id === productId)
     
     if(existing){
          const currentQuantity = existing.quantity;
          const updateCartItems = cartItems.map((item) => item.id === productId ? {id: productId, quantity: currentQuantity + 1} : item);
         setCartItem(updateCartItems ); 
      }else{
        setCartItem([...cartItems , {id:productId , quantity:1 } ]); 
     }
        
    }

    function getCartItemsProducts(){
       return cartItems.map(item =>({
        ...item,
       product: getProductById(item.id)
       })).filter(item => item.product);
    }

    return <CartContext.Provider value= {{cartItems , addToCart , getCartItemsProducts}}>
      {children}
    </CartContext.Provider>

}


export function UseCart(){

    const context = useContext(CartContext);
    return context;

}