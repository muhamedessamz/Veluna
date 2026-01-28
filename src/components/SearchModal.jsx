import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ArrowRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products.json'

const SearchModal = ({ isOpen, onClose }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const inputRef = useRef(null)

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [isOpen])

    const filteredProducts = searchTerm.length > 1
        ? products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : []

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-primary/95 backdrop-blur-md"
                    />

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="relative w-full max-w-2xl bg-transparent"
                    >
                        <div className="relative border-b border-secondary/20 pb-4 mb-8">
                            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-secondary/50" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search our collection..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-transparent pl-10 pr-10 text-2xl font-serif text-secondary placeholder:text-secondary/30 focus:outline-none"
                            />
                            <button
                                onClick={onClose}
                                className="absolute right-0 top-1/2 -translate-y-1/2 text-secondary/50 hover:text-accent transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Results */}
                        <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                            {filteredProducts.length > 0 ? (
                                <div className="grid gap-4">
                                    {filteredProducts.map(product => (
                                        <Link
                                            key={product.id}
                                            to={`/product/${product.id}`}
                                            onClick={onClose}
                                            className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/5 transition-colors group"
                                        >
                                            <div className="w-16 h-16 overflow-hidden rounded bg-neutral/10">
                                                <img
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-serif text-lg group-hover:text-accent transition-colors">{product.name}</h4>
                                                <p className="text-xs font-luxury uppercase tracking-widest opacity-50">{product.category}</p>
                                            </div>
                                            <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                                        </Link>
                                    ))}
                                </div>
                            ) : searchTerm.length > 1 ? (
                                <p className="text-center opacity-40 font-luxury uppercase tracking-widest text-sm py-8">No results found</p>
                            ) : null}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default SearchModal
