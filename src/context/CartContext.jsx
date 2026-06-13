



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
    };


   function removeFromCart(productId){
      setCartItem(cartItems.filter((item) => item.id !== productId));
   }
    
    function UpdateQuantity(productId , quantity){
      
      if(quantity <= 0){
         removeFromCart(productId);
         return;
      }
      setCartItem(
          cartItems.map((item) => item.id ===  productId ? {...item, quantity} : item)
        );
    }

    function getCartTotal(){
        const total = cartItems.reduce((total , item) =>{
            const product = getProductById(item.id);
            return total + (product ?product.price * item.quantity : 0); 
        } , 0);

        return total;
    }

    function clearCart (){
       setCartItem([]);
    }



    return <CartContext.Provider value= {{cartItems , addToCart , getCartItemsProducts , removeFromCart , UpdateQuantity , getCartTotal , clearCart}}>
      {children}
    </CartContext.Provider>

}


export function UseCart(){

    const context = useContext(CartContext);
    return context;

}