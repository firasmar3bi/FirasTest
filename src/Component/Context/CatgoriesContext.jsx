import { createContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";

export const CatgoriesContext = createContext()

export function CatgoriesContextProvider({children}){
    
    const apiUrl = import.meta.env.VITE_API_URL;
    
    const getCatgories = async()=>{
        try{
            const {data} = await axios.get(`${apiUrl}/categories/active?page=1&limit=20`)
            return(data);
        }catch(error){
            console.log(error);
        }
    }
    
    const {data} = useQuery ( "api_Categories" , getCatgories)

    return <CatgoriesContext.Provider value={ data }> {children} </CatgoriesContext.Provider>
}
