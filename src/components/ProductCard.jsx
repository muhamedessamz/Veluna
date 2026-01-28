import { motion } from 'framer-motion'
import { Plus, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useStore } from '../store/useStore'

const ProductCard = ({ product }) => {
    const { addToCart, toggleWishlist, wishlist } = useStore()
    const isWishlisted = wishlist.some((item) => item.id === product.id)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative"
        >
            <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral/20 mb-6">
                    <img
                        src={product.images[0]}
                        srcSet={`${product.images[0]}?format=300w 300w, ${product.images[0]}?format=600w 600w`}
                        sizes="(max-width: 640px) 45vw, 300px"
                        alt={product.name}
                        width="600"
                        height="800"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
                    />

                    {/* Badges - Isolated from cursor/hover artifacting if possible */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2 z-20 pointer-events-none">
                        {product.isNew && (
                            <span className="bg-primary text-secondary text-[8px] tracking-[0.2em] uppercase px-3 py-1 font-luxury shadow-sm">
                                New
                            </span>
                        )}
                        {product.isBestSeller && (
                            <span className="bg-accent text-white text-[8px] tracking-[0.2em] uppercase px-3 py-1 font-luxury shadow-sm">
                                Best Seller
                            </span>
                        )}
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                toggleWishlist(product);
                            }}
                            aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
                            className={`w-10 h-10 flex items-center justify-center rounded-full glass-panel transition-colors ${isWishlisted ? 'text-accent' : 'text-secondary hover:text-accent'
                                }`}
                        >
                            <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} strokeWidth={1.5} />
                        </button>
                    </div>

                    {/* Add to Cart Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                addToCart(product);
                            }}
                            aria-label={`Add ${product.name} to cart`}
                            className="w-full bg-secondary text-primary py-3 flex items-center justify-center gap-3 font-luxury text-[10px] tracking-[0.2em] uppercase hover:bg-opacity-90 transition-colors"
                        >
                            <Plus size={16} />
                            Quick Add
                        </button>
                    </div>
                </div>
            </Link>

            <div className="text-center">
                <Link to={`/product/${product.id}`}>
                    <h3 className="font-serif text-xl mb-1 text-secondary group-hover:text-accent transition-colors">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-[10px] tracking-widest uppercase text-secondary/40 font-luxury mb-2">
                    {product.category}
                </p>
                <p className="font-luxury text-sm text-secondary">
                    ${product.price.toFixed(2)}
                </p>
            </div>
        </motion.div>
    )
}

export default ProductCard
