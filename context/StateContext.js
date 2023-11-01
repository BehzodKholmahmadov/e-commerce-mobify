import React,{createContext,useContext,useState} from 'react';
import { toast } from 'react-hot-toast';


const Context=createContext();

export  const StateContext=({ children })=>{
    const [showCart,setShowCart]=useState(false);
    const [showSearch,setShowSearch]=useState(false);
    const [cartItems,setCartItems]=useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);
    const [isOpen, setIsOpen]=useState(false);
    const [input,setInput]=useState('');
    const [results,setResults]=useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [loading,setLoading] = useState(true);
    
    // This code below check if we have any product in our basket if yes then add one more to its quantity if not then add the product to the basket
    const onAdd=async(product,quantity)=>{
        const checkProduct=cartItems.find((item)=>item._id===product._id);
        setTotalPrice((prevTotalPrice)=>prevTotalPrice+product.price*quantity);
        setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities+quantity);

        if(checkProduct){

            const updatedCartItems=cartItems.map((cartProduct)=>{
                if(cartProduct._id===product._id) 
                    return {
                      ...cartProduct,
                        quantity:quantity+cartProduct.quantity,
                    }
            })
            setCartItems(updatedCartItems);
        }else{
            product.quantity=quantity;
            setCartItems([...cartItems,{...product}]);
        }
        toast.success(`Added ${quantity} ${product.name} to your basket`);
    }

    const Delete=async(product)=>{
        const foundProduct =await cartItems.find((item)=>item._id ===product._id);
        const newCartItems = await cartItems.filter((item) => item._id !== product._id);

        setTotalPrice((prevTotalPrice)=>prevTotalPrice-foundProduct.price*foundProduct.quantity);
        setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities-foundProduct.quantity);
        setCartItems(newCartItems);
    }
    const toggleCartItemQuantity = (id, value) => {
        const index = cartItems.findIndex((product) => product._id === id);
        const foundProduct = cartItems[index];
      
        if (index !== -1 && (value === 'increment' || value === 'decrement')) {
          const newCartItems = [...cartItems];
          newCartItems.splice(index, 1, { ...foundProduct, quantity: value === 'increment' ? foundProduct.quantity + 1 : foundProduct.quantity - 1 });
      
          setCartItems(newCartItems);
      
          if (value === 'increment') {
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
          } else if (value === 'decrement') {
            if (foundProduct.quantity > 1) {
              setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
              setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
            }
          }
        }
      };  



    const increment=()=>{
        setQty((prevQty)=>prevQty+1);
    }
    const decrement=()=>{
        setQty((prevQty)=>{
        if(prevQty-1<1)return 1;

       return prevQty-1;
        })};
    return (
        <Context.Provider
        value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            showSearch,
            input,
            results, 
            searchTerm,
            increment,
            decrement,
            onAdd,
            setShowCart,
            toggleCartItemQuantity,
            Delete,
            setTotalPrice,
            setCartItems,
            setTotalQuantities,
            setIsOpen,
            setShowSearch,
            setInput,
            setResults,
           setSearchTerm
        }}
        >{children}</Context.Provider>
    )
}



export const useStateContext=() => useContext(Context);




    // the code below will check if the product quantity has been changed and then update the cart items quantity with total price 
    // const toggleCartItemQuantity = (id, value) => {
    //     const index = cartItems.findIndex((product) => product._id === id);
    //     const foundProduct = cartItems[index];
      
    //     const newCartItems = [...cartItems];
    //     newCartItems.splice(index, 1, { ...foundProduct, quantity: value === 'increment' ? foundProduct.quantity + 1 : foundProduct.quantity - 1 });
      
    //     setCartItems(newCartItems);
      
    //     if (value === 'increment') {
    //       setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
    //       setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    //     } else if (value === 'decrement') {
    //       if (foundProduct.quantity > 1) {
    //         setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
    //         setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
    //       }
    //     }
    //   };