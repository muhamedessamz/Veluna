import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ShopByCategory = () => {
    const categories = [
        {
            name: "Cleansers",
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
            desc: "Purify & Refresh"
        },
        {
            name: "Serums",
            image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
            desc: "Target & Treat"
        },
        {
            name: "Moisturizers",
            image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
            desc: "Hydrate & Protect"
        }
    ]

    return (
        <section className="py-32 bg-secondary text-primary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6">Ritual by <span className="italic">Category</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative cursor-pointer overflow-hidden aspect-[3/4]"
                        >
                            <Link to="/shop" className="block w-full h-full">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
                                    <h3 className="text-3xl font-serif mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {cat.name}
                                    </h3>
                                    <p className="text-[10px] tracking-widest uppercase font-luxury opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        {cat.desc}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ShopByCategory
