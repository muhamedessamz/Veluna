import ProductCard from '../components/ProductCard'
import products from '../data/products.json'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NewArrivals = () => {
    const newArrivals = products.filter(p => p.isNew).slice(0, 4)

    return (
        <section className="py-24 bg-primary border-t border-secondary/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-luxury mb-4">
                        Just Landed
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">
                        Fresh From the <span className="italic">Lab</span>
                    </h2>
                    <p className="max-w-xl text-secondary/60 font-light">
                        Discover our latest innovations in botanical skincare science, crafted to reveal your most radiant self.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-center">
                    {newArrivals.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link to="/shop">
                        <button className="btn-outline">
                            Shop All New
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NewArrivals
