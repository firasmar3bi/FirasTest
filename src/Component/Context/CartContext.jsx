import { createContext } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

export const CartContext = createContext(null)

export function CartContextProvider({ children }) {
    
    const apiUrl = import.meta.env.VITE_API_URL;

    // Add to Cart Context =>
    const addToCartContext = async (productId) => {
        try {
            const token = localStorage.getItem("userToken");
            const { data } = await axios.post(`${apiUrl}/cart`,
                { productId },
                {
                    headers: { Authorization: `Tariq__${token}` }
                }
            )
            if (data.message == 'success') {
                toast.success('Product Add success', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 1,
                    theme: "colored",
                });
            }
            return (data);

        } catch (error) {
            console.log(error);
        }
    }
        //  Get Cart Product Context =>
        const GetCartContext = async () => {
            try {
                const token = localStorage.getItem("userToken");
                const { data } = await axios.get(`${apiUrl}/cart`,
                    {
                        headers: { Authorization: `Tariq__${token}` }
                    }
                )
                return (data);
            } catch (error) {
                return <><p className="bg-danger">Ther no data in Cart </p></>;
            }
        }
    // Increase Quantity Context =>
    const increaseQunntityCotext = async (productId) =>{
        try {
            const token = localStorage.getItem("userToken");
            const {data} = await axios.patch(`${apiUrl}/cart/incraseQuantity`,
            { productId },
            {headers: { Authorization: `Tariq__${token}` }})
            GetCartContext()
            return data
        }catch(error){
            console.log(error);
        }
    }
    //  Decreas Quantity Context =>
    const decreaseQunntityCotext = async (productId) =>{
        try {
            const token = localStorage.getItem("userToken");
            const {data} = await axios.patch(`${apiUrl}/cart/decraseQuantity`,
            { productId },
            {headers: { Authorization: `Tariq__${token}` }})
            GetCartContext()
            return data
        }catch(error){
            console.log(error);
        }
    }


    return <CartContext.Provider value={{ addToCartContext, GetCartContext , increaseQunntityCotext , decreaseQunntityCotext }}> {children} </CartContext.Provider>
}
