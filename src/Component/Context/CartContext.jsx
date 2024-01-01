import { createContext, useState } from "react";
import axios from "axios";

export const CartContext = createContext(null)

export function CartContextProvider({children}){
    
    const apiUrl = import.meta.env.VITE_API_URL;

    const addToCartContext = async (productId)=>{
        try{
            const token = localStorage.getItem("userToken");
            const {data} = await axios.post(`${apiUrl}/cart`,
            {productId},
            {
                headers:{Authorization:`Tariq__${token}`}
            }
            )
            return(data);
        }catch(error){
            console.log(error);
        }
    }

    const GetCartContext = async ()=>{
        try{
            const token = localStorage.getItem("userToken");
            const {data} = await axios.get(`${apiUrl}/cart`,
            {
                headers:{Authorization:`Tariq__${token}`}
            }
            )
            return(data);
        }catch(error){
            console.log(error);
        }
    }

    return <CartContext.Provider value={ {addToCartContext , GetCartContext} }> {children} </CartContext.Provider>
}
