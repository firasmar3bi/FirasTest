// import { jwtDecode } from "jwt-decode";
// import { createContext, useState } from "react";


// export const TokenContext = createContext("")

// export function TokenContextProvider({children}){
    
//     const [userToken,setUserToken]= useState("")
//     function getCurentUser() {
//         const token = localStorage.getItem('userToken');
//         const decde = jwtDecode(token)
//         setUserToken(decde)
//     }

//     return <TokenContext.Provider value={ userToken } > {children} </TokenContext.Provider>

// }