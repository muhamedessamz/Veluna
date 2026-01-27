import { useState } from 'react'
import { motion } from 'framer-motion'

const Account = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 bg-primary min-h-screen flex items-center justify-center"
        >
            <div className="container mx-auto px-6 max-w-lg">
                <div className="flex justify-center mb-12 space-x-8">
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`text-[10px] tracking-[0.2em] uppercase font-luxury pb-2 transition-all ${isLogin ? 'border-b border-accent text-accent' : 'border-b border-transparent opacity-40 hover:opacity-100'
                            }`}
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`text-[10px] tracking-[0.2em] uppercase font-luxury pb-2 transition-all ${!isLogin ? 'border-b border-accent text-accent' : 'border-b border-transparent opacity-40 hover:opacity-100'
                            }`}
                    >
                        Create Account
                    </button>
                </div>

                <div className="bg-white/5 p-8 border border-secondary/10 backdrop-blur-sm">
                    {isLogin ? (
                        <form className="flex flex-col gap-6">
                            <h2 className="text-3xl font-serif text-center mb-4">Welcome Back</h2>
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-transparent border-b border-secondary/20 py-3 text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-accent transition-colors"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="bg-transparent border-b border-secondary/20 py-3 text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-accent transition-colors"
                            />
                            <div className="flex justify-between items-center text-[10px] tracking-wider uppercase opacity-60">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="accent-accent" />
                                    Remember me
                                </label>
                                <a href="#" className="hover:text-accent transition-colors">Forgot Password?</a>
                            </div>
                            <button type="submit" className="btn-premium w-full mt-4">
                                Sign In
                            </button>
                        </form>
                    ) : (
                        <form className="flex flex-col gap-6">
                            <h2 className="text-3xl font-serif text-center mb-4">Join the Ritual</h2>
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-1/2 bg-transparent border-b border-secondary/20 py-3 text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-accent transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-1/2 bg-transparent border-b border-secondary/20 py-3 text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-transparent border-b border-secondary/20 py-3 text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-accent transition-colors"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="bg-transparent border-b border-secondary/20 py-3 text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-accent transition-colors"
                            />
                            <button type="submit" className="btn-premium w-full mt-4">
                                Create Account
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default Account
