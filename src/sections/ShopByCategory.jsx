import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ShopByCategory = () => {
    const categories = [
        {
            name: "Cleansers",
            image: "https://tropicskincare.com/cdn/shop/files/WebPackshots_SmoothingCleanser250ml_30ba6981-7635-4187-8e70-5645a407aff9_1000x.jpg?v=1747992543",
            desc: "Purify & Refresh"
        },
        {
            name: "Serums",
            image: "https://media.douglas.be/medias/cGZ3ze1197242-0-global.jpg?context=bWFzdGVyfGltYWdlc3w4MzMyMHxpbWFnZS9qcGVnfGFEazBMMmd3WWk4Mk5qVTBPRE0yTlRrMU1UQXdOaTlqUjFvemVtVXhNVGszTWpReVh6QmZaMnh2WW1Gc0xtcHdad3w3ODVmN2U2Y2NhODA5MjhlMDU0ZjZhYTkwOTk4NmM0NGYxNjNiYzY3ZjQ2MGM3ZDQ4MzE5YjA4NmYzNjIxNzQ5&grid=true&imPolicy=grayScaled",
            desc: "Target & Treat"
        },
        {
            name: "Moisturizers",
            image: "https://glossier-prod.imgix.net/files/glossier-skincare-priming-moisturizer-carousel-1.png?auto=compress,format&cs=srgb&w=1374",
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
                                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-end text-center p-10 pb-12">
                                    <h3 className="text-3xl font-serif text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                                        {cat.name}
                                    </h3>
                                    <p className="text-[10px] tracking-[0.4em] uppercase font-luxury text-white/70 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 delay-100">
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
