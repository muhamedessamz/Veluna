import { motion } from 'framer-motion'
import ingredients from '../data/ingredients.json'

const IngredientsHighlight = () => {
    return (
        <section className="py-32 bg-primary overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-[10px] tracking-[0.4em] uppercase text-secondary/40 mb-6 font-luxury">
                        Botanical Wisdom
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-serif">
                        The Science of <span className="italic">Luminosity</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                    {ingredients.map((ing, index) => (
                        <motion.div
                            key={ing.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-square bg-[#ECE8E4] flex flex-col items-center justify-center p-8 text-center"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                                <img src={ing.image} alt="" className="w-full h-full object-cover grayscale" />
                            </div>

                            <h4 className="font-serif text-2xl mb-4 z-10">{ing.name}</h4>
                            <p className="text-xs font-light leading-relaxed opacity-60 max-w-[200px] z-10 group-hover:opacity-100 transition-opacity">
                                {ing.description.substring(0, 80)}...
                            </p>

                            <div className="mt-8 flex gap-2 z-10 transition-transform duration-500 group-hover:translate-y-[-10px]">
                                {ing.benefits.slice(0, 2).map(benefit => (
                                    <span key={benefit} className="text-[8px] tracking-widest uppercase border border-secondary/20 px-2 py-1">
                                        {benefit}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default IngredientsHighlight
