import { createContext } from "react";
import axios from "axios";

export const UserOrderContext = createContext(null)

export function UserOrderContextProvider ({children}){
    const apiUrl = import.meta.env.VITE_API_URL;

    const GetOrderContext = async ()=>{
        try {
            const token = localStorage.getItem("userToken")
            const {data} = await axios.get(`${apiUrl}/order`,
            {
                headers : {Authorization:`Tariq__${token}`}
            })
            return data; 
        }catch(error) {
            console.log(error);
        }
    }
    return <UserOrderContext.Provider value = {{GetOrderContext}}>
        { children }
    </UserOrderContext.Provider>
}