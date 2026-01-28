import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroImage from '../components/HeroImage'
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
            <section className="min-h-screen md:h-screen w-full flex flex-col md:flex-row items-center relative overflow-hidden bg-[#fdfbf7] pt-32 md:pt-0 pb-12 md:pb-0">
                {/* Background Large Typography - Hidden on mobile for clarity */}
                <div className="absolute inset-0 hidden md:flex items-center justify-center select-none pointer-events-none overflow-hidden">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 0.08, scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="text-[30vw] font-serif font-bold text-[#1A1A1A] leading-none tracking-tighter"
                    >
                        VELUNA
                    </motion.h1>
                </div>

                <HeroImage />

                <div className="container mx-auto px-6 md:px-12 z-10 flex items-center md:min-h-[70vh]">
                    <div className="max-w-3xl w-full text-center md:text-left">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                        >
                            <h2 className="text-[10px] md:text-[12px] tracking-[0.4em] md:tracking-[0.5em] uppercase mb-4 md:mb-6 text-[#D4B98E] font-medium">
                                The Future of Botanical Science
                            </h2>
                        </motion.div>

                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[14vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] md:leading-[0.85] font-serif text-[#1A1A1A] mb-8 tracking-[-0.02em]"
                        >
                            Elevate Your <br />
                            <span className="italic font-light opacity-80">Skin Ritual</span>
                        </motion.h1>

                        {/* Mobile Spacer to make room for image in the middle of flow */}
                        <div className="h-[420px] md:hidden" />

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="flex flex-col items-center md:items-start gap-8"
                        >
                            <p className="text-base md:text-xl text-[#444444] font-light max-w-md leading-relaxed">
                                Premium skincare powered by science. Discover the transformative power of lunar-harvested botanicals.
                            </p>

                            <Link to="/shop" className="w-full md:w-fit">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full md:w-auto px-12 py-5 bg-[#1A1A1A] text-white text-[10px] tracking-[0.3em] uppercase transition-all duration-300 hover:bg-[#D4B98E]"
                                >
                                    Shop Collection
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Vertical Scroll Indicator - Editorial Style */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 left-12 hidden md:flex items-center space-x-4"
                >
                    <div className="w-12 h-[1px] bg-[#1A1A1A]/20" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#1A1A1A]/40 font-medium">Explore Details</span>
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
