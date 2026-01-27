import { useRef, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useStore } from '../store/useStore'

const CartSidebar = () => {
    const { cart, cartOpen, toggleCart, removeFromCart, updateQuantity } = useStore()

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <>
            {/* Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: cartOpen ? 1 : 0 }}
                onClick={toggleCart}
                className={`fixed inset-0 bg-secondary/40 backdrop-blur-sm z-[60] ${cartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
            />

            {/* Sidebar */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: cartOpen ? 0 : '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-full max-w-md bg-primary z-[70] shadow-2xl flex flex-col"
            >
                <div className="p-8 border-b border-secondary/10 flex justify-between items-center">
                    <h2 className="font-serif text-3xl">Your Cart</h2>
                    <button
                        onClick={toggleCart}
                        className="text-[10px] tracking-[0.2em] uppercase font-luxury hover:text-accent transition-colors"
                    >
                        Close
                    </button>
                </div>

                <div className="flex-grow overflow-y-auto p-8">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center">
                            <p className="font-luxury text-sm tracking-widest uppercase opacity-40 mb-8">Your ritual is empty</p>
                            <button
                                onClick={toggleCart}
                                className="btn-premium"
                            >
                                Shop All
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {cart.map((item) => (
                                <div key={item.id} className="flex gap-6">
                                    <div className="w-24 aspect-[3/4] bg-neutral/20 overflow-hidden">
                                        <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-serif text-lg">{item.name}</h4>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-[10px] opacity-40 hover:opacity-100 uppercase"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                        <p className="text-[10px] tracking-widest uppercase text-secondary/40 font-luxury mb-4">
                                            {item.category}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center border border-secondary/10 px-3 py-1 scale-90 -ml-2">
                                                <button onClick={() => updateQuantity(item.id, -1)} className="px-2 text-lg opacity-40 hover:opacity-100">-</button>
                                                <span className="px-4 text-xs font-luxury">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)} className="px-2 text-lg opacity-40 hover:opacity-100">+</button>
                                            </div>
                                            <span className="font-luxury text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="p-8 bg-white/50 backdrop-blur-md border-t border-secondary/10">
                        <div className="flex justify-between items-center mb-8">
                            <span className="font-luxury text-xs tracking-widest uppercase opacity-60">Subtotal</span>
                            <span className="font-serif text-2xl font-light">${total.toFixed(2)}</span>
                        </div>
                        <Link to="/checkout" onClick={toggleCart}>
                            <button className="btn-premium w-full mb-4">
                                Checkout
                            </button>
                        </Link>
                        <p className="text-[9px] text-center opacity-40 tracking-wider uppercase font-luxury">
                            Shipping & taxes calculated at checkout
                        </p>
                    </div>
                )}
            </motion.div>
        </>
    )
}

export default CartSidebar
