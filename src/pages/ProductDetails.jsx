import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Plus, Minus, Heart, ArrowLeft, Star } from 'lucide-react'
import products from '../data/products.json'
import { useStore } from '../store/useStore'
import { useState } from 'react'

const ProductDetails = () => {
    const { id } = useParams()
    const { addToCart, toggleWishlist, wishlist } = useStore()
    const [qty, setQty] = useState(1)

    const product = products.find(p => p.id === parseInt(id))
    const isWishlisted = wishlist.some(item => item.id === product?.id)

    if (!product) return <div>Product not found</div>

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 bg-primary min-h-screen"
        >
            <div className="container mx-auto px-6">
                <Link
                    to="/shop"
                    className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase opacity-40 hover:opacity-100 mb-12 transition-opacity"
                >
                    <ArrowLeft size={14} /> Back to Shop
                </Link>

                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Gallery Placeholder */}
                    <div className="w-full lg:w-1/2 aspect-[3/4] bg-neutral/10 overflow-hidden">
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Info */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-luxury">{product.category}</span>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={10} className={i < Math.floor(product.rating) ? "text-accent fill-accent" : "text-secondary/20"} />
                                ))}
                                <span className="text-[10px] opacity-40 ml-2">({product.rating})</span>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-serif mb-6">{product.name}</h1>
                        <p className="text-2xl font-light mb-8">${product.price.toFixed(2)}</p>

                        <p className="text-lg font-light text-secondary/60 leading-relaxed mb-12">
                            {product.description}
                        </p>

                        <div className="space-y-8 mb-12 py-8 border-y border-secondary/10">
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] tracking-widest uppercase font-luxury opacity-40">Skin Type</span>
                                <span className="text-sm">{product.skinType}</span>
                            </div>
                            <div>
                                <h4 className="text-[10px] tracking-widest uppercase font-luxury mb-4 opacity-40">Key Ingredients</h4>
                                <div className="flex flex-wrap gap-2">
                                    {product.ingredients.map(ing => (
                                        <span key={ing} className="border border-secondary/10 px-3 py-1 text-xs">{ing}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center border border-secondary/20 px-4 py-2">
                                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-1 opacity-40 hover:opacity-100">-</button>
                                <span className="px-6 font-luxury">{qty}</span>
                                <button onClick={() => setQty(qty + 1)} className="px-3 py-1 opacity-40 hover:opacity-100">+</button>
                            </div>
                            <button
                                onClick={() => addToCart({ ...product, quantity: qty })}
                                className="btn-premium flex-grow"
                            >
                                Add to Cart
                            </button>
                            <button
                                onClick={() => toggleWishlist(product)}
                                className={`w-14 h-14 flex items-center justify-center border transition-colors ${isWishlisted ? 'border-accent text-accent' : 'border-secondary/20 text-secondary hover:border-accent hover:text-accent'
                                    }`}
                            >
                                <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProductDetails
