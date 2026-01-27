import ProductCard from '../components/ProductCard'
import products from '../data/products.json'
import { Link } from 'react-router-dom'

const BestSellers = () => {
    const bestSellers = products.filter(p => p.isBestSeller)

    return (
        <section className="py-32 bg-primary">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-[10px] tracking-[0.4em] uppercase text-secondary/40 mb-6 font-luxury">
                            Most Loved
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-serif">
                            Celestial <span className="italic">Favorites</span>
                        </h3>
                    </div>
                    <Link to="/shop">
                        <button className="text-[10px] tracking-[0.2em] uppercase font-luxury border-b border-secondary/20 pb-2 hover:border-accent transition-colors">
                            View All Best Sellers
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {bestSellers.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BestSellers
