import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import ingredients from '../data/ingredients.json'

const IngredientsHighlight = () => {
    const [selected, setSelected] = useState(null)

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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {ingredients.slice(0, 3).map((ing, index) => (
                        <motion.div
                            key={ing.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => setSelected(ing)}
                            className="group relative aspect-[4/5] bg-[#ECE8E4] flex flex-col items-center p-12 text-center cursor-pointer transition-all duration-700 hover:shadow-2xl"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                                <img src={ing.image} alt="" width="400" height="500" loading="lazy" className="w-full h-full object-cover grayscale" />
                            </div>

                            {/* Top Content wrapper with flex-grow to push button down */}
                            <div className="flex-1 flex flex-col items-center justify-start w-full z-10">
                                <h4 className="font-serif text-3xl mb-6 leading-tight h-24 flex items-center justify-center">
                                    {ing.name}
                                </h4>

                                <div className="h-20 flex items-center justify-center mb-8">
                                    <p className="text-sm font-light leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity line-clamp-3">
                                        {ing.description}
                                    </p>
                                </div>

                                <div className="h-16 flex items-center justify-center">
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {ing.benefits.slice(0, 2).map(benefit => (
                                            <span key={benefit} className="text-[9px] tracking-widest uppercase border border-secondary/20 px-3 py-1.5 whitespace-nowrap">
                                                {benefit}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Button forced to bottom */}
                            <button
                                className="mt-auto text-[10px] tracking-[0.2em] uppercase font-luxury border-b border-secondary/20 group-hover:border-accent group-hover:text-accent transition-all z-10"
                                aria-label={`Read more about ${ing.name}`}
                            >
                                Learn More
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link to="/ingredients">
                        <button className="btn-premium">
                            Explore Full Ingredient Glossary
                        </button>
                    </Link>
                </div>
            </div>

            {/* Modal - Same as GLossary page */}
            <AnimatePresence>
                {selected && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                            className="absolute inset-0 bg-secondary/40 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl bg-primary shadow-2xl overflow-hidden flex flex-col md:flex-row"
                        >
                            <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
                                <img src={selected.image} alt={selected.name} width="600" height="600" loading="lazy" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full md:w-1/2 p-12">
                                <button
                                    onClick={() => setSelected(null)}
                                    className="absolute top-8 right-8 text-[10px] tracking-widest uppercase opacity-40 hover:opacity-100"
                                >
                                    Close
                                </button>
                                <span className="text-[10px] tracking-[0.4em] uppercase text-accent mb-4 block font-luxury">Ingredient Profile</span>
                                <h2 className="font-serif text-4xl mb-6">{selected.name}</h2>
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-[10px] tracking-widest uppercase font-luxury mb-3 opacity-40">The Purpose</h4>
                                        <p className="text-sm font-light leading-relaxed">{selected.description}</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-[10px] tracking-widest uppercase font-luxury mb-3 opacity-40">Source</h4>
                                            <p className="text-sm font-light">{selected.source}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] tracking-widest uppercase font-luxury mb-3 opacity-40">Safety Level</h4>
                                            <p className="text-sm font-light">{selected.safety}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] tracking-widest uppercase font-luxury mb-3 opacity-40">Primary Benefits</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selected.benefits.map(b => (
                                                <span key={b} className="text-[10px] tracking-widest uppercase border border-secondary/10 px-3 py-1">
                                                    {b}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default IngredientsHighlight
