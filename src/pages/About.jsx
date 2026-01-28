import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-primary min-h-screen"
        >
            <section className="h-[70vh] flex items-center justify-center px-6 relative overflow-hidden bg-secondary group/hero">
                <div className="absolute inset-0">
                    <img
                        src="https://www.florihana.com/c/125-category_header/xskincare-beauty.jpg.pagespeed.ic.BLRbQX7yPN.jpg"
                        className="w-full h-full object-cover grayscale group-hover/hero:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover/hero:scale-100"
                        alt="Veluna Ritual"
                    />
                    <div className="absolute inset-0 bg-secondary/40 group-hover/hero:bg-secondary/20 transition-all duration-1000"></div>
                </div>
                <div className="container mx-auto text-center z-10">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl text-primary font-serif">Our <span className="italic">Cosmos</span></h1>
                </div>
            </section>

            <section className="py-32 container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-32">
                        <h2 className="text-[10px] tracking-[0.4em] uppercase text-accent mb-8 font-luxury text-center">The Genesis</h2>
                        <p className="text-3xl md:text-4xl font-serif text-center leading-tight mb-12">
                            "We believe skin health is a reflection of cosmic balance—where scientific precision meets botanical magic."
                        </p>
                        <div className="w-px h-20 bg-accent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
                        <div className="aspect-[4/5] bg-secondary/10 overflow-hidden">
                            <img src="https://www.shutterstock.com/image-photo/scientist-dermatologist-testing-organic-natural-600nw-1824076961.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Botanical Science" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-serif mb-8">Celestial Science</h3>
                            <p className="text-lg font-light text-secondary/60 leading-relaxed mb-6">
                                Veluna was founded in 2024 with a radical mission: to synchronize skincare with the biological rhythms of the human body and the celestial cycles of our planet.
                            </p>
                            <p className="text-lg font-light text-secondary/60 leading-relaxed">
                                By selecting ingredients harvested during specific lunar phases, we ensure maximum enzymatic potency. These rare extracts are then stabilized using cutting-edge peptide technology and specialized botanical science.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center flex-row-reverse">
                        <div className="md:order-2 aspect-[4/5] bg-secondary/10 overflow-hidden">
                            <img src="/images/about/sustainability.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Sustainability" />
                        </div>
                        <div className="md:order-1">
                            <h3 className="text-3xl font-serif mb-8">The Moonshot Philosophy</h3>
                            <p className="text-lg font-light text-secondary/60 leading-relaxed mb-6">
                                Our commitment to the planet is as deep as our commitment to your skin. Every Veluna vessel is designed for eternal life—crafted from infinitely recyclable violet glass that protects our formulas from light degradation.
                            </p>
                            <button className="btn-premium mt-8">Explore Sustainability</button>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default About
