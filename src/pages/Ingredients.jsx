import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ingredients from '../data/ingredients.json'

const Ingredients = () => {
    const [selected, setSelected] = useState(null)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 bg-primary min-h-screen"
        >
            <div className="container mx-auto px-6">
                <header className="mb-20 text-center max-w-2xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif mb-8">Ingredient <span className="italic">Glossary</span></h1>
                    <p className="text-lg font-light text-secondary/60 leading-relaxed">
                        Transparency is our primary component. Discover the celestial botanicals and scientific breakthroughs that power the Veluna ritual.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ingredients.map((ing) => (
                        <div
                            key={ing.id}
                            onClick={() => setSelected(ing)}
                            className="bg-white/50 border border-secondary/5 p-10 hover:border-accent/30 cursor-pointer transition-all duration-500 group"
                        >
                            <h3 className="font-serif text-2xl mb-4 group-hover:text-accent transition-colors">{ing.name}</h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {ing.benefits.map(b => (
                                    <span key={b} className="text-[8px] tracking-widest uppercase bg-secondary/5 px-2 py-1">
                                        {b}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm font-light leading-relaxed text-secondary/60 line-clamp-3">
                                {ing.description}
                            </p>
                            <button className="mt-8 text-[10px] tracking-widest uppercase font-luxury border-b border-transparent group-hover:border-accent group-hover:text-accent transition-all">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                            className="absolute inset-0 bg-secondary/20 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl bg-primary shadow-2xl overflow-hidden flex flex-col md:flex-row"
                        >
                            <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
                                <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
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
        </motion.div>
    )
}

export default Ingredients
