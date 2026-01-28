import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Search, Menu, X, User, Heart } from 'lucide-react'
import { useStore } from '../store/useStore'

const Navbar = () => {
    const { toggleCart, cart } = useStore()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Shop', path: '/shop' },
        { name: 'About', path: '/about' },
        { name: 'Ingredients', path: '/ingredients' },
        { name: 'Journal', path: '/journal' },
    ]

    const isDarkPage = ['/about', '/contact', '/shipping'].includes(location.pathname) || location.pathname.startsWith('/journal/')
    const navTextColor = scrolled ? 'text-secondary' : (isDarkPage ? 'text-primary' : 'text-secondary')

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-primary/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Mobile Menu Toggle */}
                <button
                    className={`lg:hidden ${navTextColor}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close Menu" : "Open Menu"}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`font-luxury text-xs tracking-widest uppercase ${navTextColor} hover:text-accent transition-colors ${!scrolled && isDarkPage ? 'drop-shadow-sm' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Logo */}
                <Link
                    to="/"
                    className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-3 group"
                >
                    <img
                        src="/logo.png"
                        alt="Veluna Icon"
                        width="40"
                        height="40"
                        className={`h-10 w-auto transition-all duration-500 ${!scrolled && isDarkPage ? 'filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : ''}`}
                    />
                    <span className={`font-serif text-3xl tracking-tighter ${navTextColor} group-hover:text-accent transition-colors ${!scrolled && isDarkPage ? 'drop-shadow-sm' : ''}`}>
                        Veluna
                    </span>
                </Link>

                {/* Icons */}
                <div className={`flex items-center space-x-6 ${navTextColor} ${!scrolled && isDarkPage ? 'drop-shadow-sm' : ''}`}>
                    <button className="hover:text-accent transition-colors hidden sm:block" aria-label="Search">
                        <Search size={20} strokeWidth={1.5} />
                    </button>
                    <Link to="/account" className="hover:text-accent transition-colors hidden sm:block" aria-label="My Account">
                        <User size={20} strokeWidth={1.5} />
                    </Link>
                    <button className="hover:text-accent transition-colors hidden sm:block relative" aria-label="Wishlist">
                        <Heart size={20} strokeWidth={1.5} />
                    </button>
                    <button
                        onClick={toggleCart}
                        className="hover:text-accent transition-colors relative"
                        aria-label={`Shopping bag with ${cartCount} items`}
                    >
                        <ShoppingBag size={20} strokeWidth={1.5} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-primary overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="font-serif text-2xl text-secondary"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-6 border-t border-secondary/10 flex space-x-6">
                                <Link to="/account" onClick={() => setIsOpen(false)} aria-label="My Account" className="text-secondary"><User size={24} /></Link>
                                <Link to="/wishlist" onClick={() => setIsOpen(false)} aria-label="Wishlist" className="text-secondary"><Heart size={24} /></Link>
                                <button className="text-secondary" aria-label="Search"><Search size={24} /></button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
