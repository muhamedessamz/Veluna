import { motion } from 'framer-motion'
import { useStore } from '../store/useStore'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

const Wishlist = () => {
    const { wishlist } = useStore()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 bg-primary min-h-screen"
        >
            <div className="container mx-auto px-6">
                <header className="mb-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-serif mb-6">Your <span className="italic">Wishlist</span></h1>
                    <p className="text-secondary/60 font-light max-w-xl mx-auto">
                        Curate your personal collection of botanical essentials.
                    </p>
                </header>

                {wishlist.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="font-luxury text-sm tracking-widest uppercase opacity-40 mb-8">
                            Your wishlist is empty
                        </p>
                        <Link
                            to="/shop"
                            className="inline-block border border-secondary text-secondary px-8 py-3 text-xs tracking-[0.2em] font-luxury uppercase hover:bg-secondary hover:text-primary transition-all duration-300"
                        >
                            Explore Collection
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {wishlist.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default Wishlist
