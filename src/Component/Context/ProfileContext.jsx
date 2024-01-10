import { createContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";

export const ProfileContext = createContext(null)

export function ProfileContextProvider({children}){
    
    const apiUrl = import.meta.env.VITE_API_URL;
    // Get Detiles Customer Context =>
    const GetProfileContext = async ()=>{
        try{
            const token = localStorage.getItem("userToken");
            const {data} = await axios.get(`${apiUrl}/user/profile`,
            {
                headers:{Authorization:`Tariq__${token}`}
            }
            )
            return(data);
        }catch(error){
            console.log(error);
        }
    }

    return <ProfileContext.Provider value={ {GetProfileContext} }> {children} </ProfileContext.Provider>
}