import { create } from "zustand";

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

export const useCartStore = create<CartStore>((set) => ({
    cart: [],
    addToCart: (product, quantity) =>
        set((state) => {
            const existingItem = state.cart.find(
                (item) => item.product.id === product.id
            );

            if (existingItem) {
                return {
                    cart: state.cart.map((item) =>
                        item.product.id === product.id
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    ),
                };
            }

            return {
                cart: [...state.cart, { product, quantity }],
            };
        }),
    removeFromCart: (productId) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.product.id !== productId),
        })),
    clearCart: () => set({ cart: [] }),
}));
