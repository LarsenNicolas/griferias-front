import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
};

type CartItem = {
    product: Product;
    quantity: number;
};

type CartStore = {
    cart: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            cart: [],
            addToCart: (product, quantity) => {
                const existingItem = get().cart.find(
                    (item) => item.product.id === product.id
                );

                if (existingItem) {
                    set({
                        cart: get().cart.map((item) =>
                            item.product.id === product.id
                                ? { ...item, quantity: item.quantity + quantity }
                                : item
                        ),
                    });
                } else {
                    set({ cart: [...get().cart, { product, quantity }] });
                }
            },
            removeFromCart: (productId) => {
                set({
                    cart: get().cart.filter((item) => item.product.id !== productId),
                });
            },
            clearCart: () => set({ cart: [] }),
        }),
        {
            name: 'cart-storage', // Nombre del item en el storage (debe ser único)
            storage: createJSONStorage(() => localStorage), // Usa localStorage
        }
    )
);
