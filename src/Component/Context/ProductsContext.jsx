import { createContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";

export const ProductsContext = createContext()

export function ProductsContextProvider({children}){
    
    const apiUrl = import.meta.env.VITE_API_URL;
    // Get Product For Home Page =>
    const getProducts = async()=>{
        try{
            const {data} = await axios.get(`${apiUrl}/products?page=1&limit=8`)
            return(data);
        }catch(error){
            console.log(error);
        }
    }
    // Set The Product in cash browser =>
    const {data} = useQuery ( "apisss_Products" , getProducts)

    return <ProductsContext.Provider value={ data }> {children} </ProductsContext.Provider>
}
