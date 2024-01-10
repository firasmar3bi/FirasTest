import { createContext, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

export const CartContext = createContext(null)

export function CartContextProvider({ children }) {

    const apiUrl = import.meta.env.VITE_API_URL;
    let [quantity, setQuantity] = useState(0);

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
                setQuantity(quantity + 1)
                localStorage.setItem("quantity", quantity)
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

    return <CartContext.Provider value={{ addToCartContext, GetCartContext, quantity, setQuantity }}> {children} </CartContext.Provider>
}
