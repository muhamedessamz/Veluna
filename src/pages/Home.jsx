import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroCanvas from '../components/canvas/HeroCanvas'
import BestSellers from '../sections/BestSellers'
import IngredientsHighlight from '../sections/IngredientsHighlight'
import NewArrivals from '../sections/NewArrivals'
import ShopByCategory from '../sections/ShopByCategory'
import Testimonials from '../sections/Testimonials'
import Newsletter from '../sections/Newsletter'

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Hero Section */}
            <section className="h-[110vh] w-full flex items-center justify-center relative overflow-hidden bg-primary px-6">
                <HeroCanvas />

                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-primary"></div>

                <div className="container mx-auto px-6 z-10 text-center">
                    <motion.h2
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-[10px] tracking-[0.4em] uppercase mb-6 text-secondary/60 font-luxury"
                    >
                        The Future of Botanical Science
                    </motion.h2>
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className="text-6xl md:text-8xl lg:text-9xl mb-12 font-serif text-secondary"
                    >
                        Elevate Your <br />
                        <span className="italic">Skin Ritual</span>
                    </motion.h1>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9, duration: 1 }}
                    >
                        <Link to="/shop">
                            <button className="btn-premium">
                                Shop the Collection
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Floating Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
                >
                    <span className="text-[9px] tracking-[0.2em] uppercase text-secondary/40 font-luxury">Scroll</span>
                    <div className="w-[1px] h-12 bg-secondary/20 h-0 animate-[grow_2s_ease-in-out_infinite]"></div>
                </motion.div>
            </section>

            <BestSellers />
            <NewArrivals />
            <ShopByCategory />
            <IngredientsHighlight />
            <Testimonials />

            {/* About/Philosophy Preview */}
            <section className="py-32 bg-secondary text-primary overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-20">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-4xl md:text-6xl mb-10 leading-tight">
                                Where Celestial Wisdom <br /> Meets Laboratory <span className="italic">Precision</span>
                            </h2>
                            <p className="text-lg font-light opacity-80 leading-relaxed mb-12 max-w-lg">
                                Veluna was born from a simple realization: the moon's gravity influences the earth's oceans, and the same forces can be harnessed to optimize cellular skin health. Our "Moonshot" philosophy combines rare botanical extracts harvested under specific lunar phases with cutting-edge peptides.
                            </p>
                            <Link to="/about">
                                <button className="btn-outline border-primary text-primary hover:bg-primary hover:text-secondary">
                                    Our Story
                                </button>
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 relative">
                            <div className="aspect-[4/5] bg-primary/10 overflow-hidden">
                                <img
                                    src="https://images.squarespace-cdn.com/content/v1/5baaed5577b903135793f279/d4849a61-f284-47da-9643-718d5683ebe9/0862055f7911008fab6f9069b2452284.jpg?format=2500w"
                                    alt="Veluna Essence"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <Newsletter />
        </motion.div >
    )
}

export default Home
