import { useState } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '../store/useStore'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const Checkout = () => {
    const { cart } = useStore()
    const [step, setStep] = useState(1)
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 bg-primary min-h-screen"
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Left Column: Form */}
                    <div className="w-full lg:w-3/5">
                        <Link to="/shop" className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase opacity-40 hover:opacity-100 mb-8 transition-opacity">
                            <ArrowLeft size={14} /> Back to Shop
                        </Link>

                        <div className="mb-10">
                            <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-luxury block mb-2">Checkout</span>
                            <h1 className="text-4xl font-serif">Secure <span className="italic">Payment</span></h1>
                        </div>

                        {/* Steps Indicator */}
                        <div className="flex items-center gap-4 mb-12 border-b border-secondary/10 pb-4">
                            <span className={`text-xs uppercase tracking-widest ${step === 1 ? 'text-accent' : 'opacity-40'}`}>1. Information</span>
                            <span className="text-secondary/20">/</span>
                            <span className={`text-xs uppercase tracking-widest ${step === 2 ? 'text-accent' : 'opacity-40'}`}>2. Shipping</span>
                            <span className="text-secondary/20">/</span>
                            <span className={`text-xs uppercase tracking-widest ${step === 3 ? 'text-accent' : 'opacity-40'}`}>3. Payment</span>
                        </div>

                        {/* Step 1: Information */}
                        {step === 1 && (
                            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(2) }}>
                                <h3 className="font-serif text-xl mb-4">Contact Information</h3>
                                <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-secondary/20 py-3 text-secondary focus:outline-none focus:border-accent transition-colors" required />

                                <h3 className="font-serif text-xl pt-6 mb-4">Shipping Address</h3>
                                <div className="flex gap-4">
                                    <input type="text" placeholder="First Name" className="w-1/2 bg-transparent border-b border-secondary/20 py-3 text-secondary focus:outline-none focus:border-accent transition-colors" required />
                                    <input type="text" placeholder="Last Name" className="w-1/2 bg-transparent border-b border-secondary/20 py-3 text-secondary focus:outline-none focus:border-accent transition-colors" required />
                                </div>
                                <input type="text" placeholder="Address" className="w-full bg-transparent border-b border-secondary/20 py-3 text-secondary focus:outline-none focus:border-accent transition-colors" required />
                                <div className="flex gap-4">
                                    <input type="text" placeholder="City" className="w-1/3 bg-transparent border-b border-secondary/20 py-3 text-secondary focus:outline-none focus:border-accent transition-colors" required />
                                    <input type="text" placeholder="Country" className="w-1/3 bg-transparent border-b border-secondary/20 py-3 text-secondary focus:outline-none focus:border-accent transition-colors" required />
                                    <input type="text" placeholder="Zip Code" className="w-1/3 bg-transparent border-b border-secondary/20 py-3 text-secondary focus:outline-none focus:border-accent transition-colors" required />
                                </div>

                                <div className="pt-6">
                                    <button type="submit" className="btn-premium w-full">Continue to Shipping</button>
                                </div>
                            </form>
                        )}

                        {/* Step 2: Shipping */}
                        {step === 2 && (
                            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(3) }}>
                                <h3 className="font-serif text-xl mb-4">Shipping Method</h3>
                                <div className="border border-secondary/20 p-4 flex justify-between items-center cursor-pointer hover:border-accent transition-colors">
                                    <label className="flex items-center gap-4 cursor-pointer w-full">
                                        <input type="radio" name="shipping" className="accent-accent" defaultChecked />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold">Standard Shipping</span>
                                            <span className="text-xs opacity-60">5-7 Business Days</span>
                                        </div>
                                    </label>
                                    <span className="text-sm">Free</span>
                                </div>
                                <div className="border border-secondary/20 p-4 flex justify-between items-center cursor-pointer hover:border-accent transition-colors">
                                    <label className="flex items-center gap-4 cursor-pointer w-full">
                                        <input type="radio" name="shipping" className="accent-accent" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold">Express Shipping</span>
                                            <span className="text-xs opacity-60">2-3 Business Days</span>
                                        </div>
                                    </label>
                                    <span className="text-sm">$15.00</span>
                                </div>

                                <div className="pt-6 flex gap-4">
                                    <button type="button" onClick={() => setStep(1)} className="w-1/2 btn-outline border-secondary/20">Back</button>
                                    <button type="submit" className="w-1/2 btn-premium">Continue to Payment</button>
                                </div>
                            </form>
                        )}

                        {/* Step 3: Payment */}
                        {step === 3 && (
                            <div className="space-y-6">
                                <h3 className="font-serif text-xl mb-4">Payment</h3>
                                <div className="bg-secondary/5 p-6 text-center border border-dashed border-secondary/20">
                                    <p className="opacity-60 mb-4">Payment gateway integration would go here.</p>
                                    <div className="flex justify-center gap-4 opacity-40">
                                        <div className="w-10 h-6 bg-secondary/20 rounded"></div>
                                        <div className="w-10 h-6 bg-secondary/20 rounded"></div>
                                        <div className="w-10 h-6 bg-secondary/20 rounded"></div>
                                    </div>
                                </div>

                                <div className="pt-6 flex gap-4">
                                    <button type="button" onClick={() => setStep(2)} className="w-1/2 btn-outline border-secondary/20">Back</button>
                                    <button type="button" className="w-1/2 btn-premium">Pay Now ${total.toFixed(2)}</button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="w-full lg:w-2/5">
                        <div className="bg-secondary/5 p-8 sticky top-32">
                            <h3 className="font-serif text-xl mb-6">Order Summary</h3>
                            {cart.length === 0 ? (
                                <p className="text-sm opacity-40">Your cart is empty.</p>
                            ) : (
                                <div className="space-y-4 mb-6">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex gap-4">
                                            <div className="w-16 h-20 bg-neutral/20 overflow-hidden shrink-0">
                                                <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="font-serif text-sm">{item.name}</h4>
                                                <p className="text-[10px] opacity-40 uppercase tracking-wider mb-1">{item.category}</p>
                                                <p className="text-xs">Qty: {item.quantity}</p>
                                            </div>
                                            <div className="text-sm font-bold">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="border-t border-secondary/10 pt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="opacity-60">Subtotal</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="opacity-60">Shipping</span>
                                    <span>Calculated at next step</span>
                                </div>
                                <div className="flex justify-between text-lg font-serif mt-4 pt-4 border-t border-secondary/10">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Checkout
