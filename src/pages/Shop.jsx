import { useState } from 'react'
import { motion } from 'framer-motion'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'

const Shop = () => {
    const [filter, setFilter] = useState('All')
    const categories = ['All', 'Cleansers', 'Serums', 'Moisturizers']

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 bg-primary min-h-screen"
        >
            <div className="container mx-auto px-6">
                <header className="mb-20">
                    <h1 className="text-5xl md:text-7xl font-serif mb-8 text-center">Shop the <span className="italic">Collection</span></h1>

                    <div className="flex flex-wrap justify-center gap-8 mt-12">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`text-[10px] tracking-[0.3em] uppercase font-luxury pb-2 transition-all ${filter === cat ? 'border-b border-accent text-accent' : 'border-b border-transparent opacity-40 hover:opacity-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Shop
