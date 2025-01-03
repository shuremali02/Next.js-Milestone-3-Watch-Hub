"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Watch } from "../_lib/data";


interface Item extends Watch {
    quantity: number;
}
// const myObj :Item={
//     quantity: 0,
//     id: 0,
//     name: "",
//     price: 0,
//     description: "",
//     image: ""
// }
interface CartContextType {
    cart: Item[];
    addToCart: (product: Item) => void;
    clearCart: () => void;
    removeOneFromCart: (id: number) => void;
    incrementQuantity: (id: number) => void;
    decrementQuantity: (id: number) => void;
    totalPrice: number;
}
interface CartProviderProps {
    children: ReactNode;
}

const cartContext = createContext<CartContextType | null>(null);

function CartProviders({ children }: CartProviderProps) {
    const [cart, setCart] = useState<Item[]>([]);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    console.log(totalAmount)

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // const addToCart= (product: Item) => {
    //     console.log("Adding To Cart:", product);
    //     setCart((prevItem) => {

    //         const existingItem = prevItem?.find((item) => item.id === product.id);
    //         if (existingItem) {
    //             return prevItem.map((item) => item.id === product.id
    //                 ? { ...item, quantity: item.quantity + 1 } : item
    //             );
    //         }

    //             return [...prevItem, { ...product, quantity+1];

    // });}
    const addToCart = (product: Item) => {
        console.log("Adding To Cart:", product);
        setCart((prevItem) => {
            const existingItem = prevItem.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItem.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevItem, { ...product, quantity: 1 }];
        });
    };
    const removeOneFromCart = (id: number) => {
        setCart((prevItem) => {
            // const existingItem = prevItem.find((item) => item.id === id);

            return prevItem.filter((item) => item.id !== id);
        }
        );
    };

    const incrementQuantity = (id: number) => {
        setCart((prevItem) =>
            prevItem.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };
    const decrementQuantity = (id: number) => {
        setCart((prevItem) => {
            const existingItem = prevItem.find((item) => item.id === id);
            if (existingItem?.quantity === 1) {
                return prevItem.filter((item) => item.id !== id);
            }
            return prevItem.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };


    const clearCart = () => {
        setCart([]);
        setTotalAmount(0)
    }
    return (
        <cartContext.Provider
            value={{
                cart,
                totalPrice,
                addToCart,
                removeOneFromCart,
                incrementQuantity,
                decrementQuantity,
                clearCart
            }}
        >
            {children}
        </cartContext.Provider>
    );
}

function useCart() {
    const context = useContext(cartContext);
    if (!context) {
        throw new Error("useCart must be used within a cartProvider");
    }
    console.log(context);
    return context;
}
export { cartContext, useCart };
export type { Item };
export default CartProviders;





