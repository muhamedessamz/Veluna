import { motion } from 'framer-motion'
import heroProduct from '../assets/images/hero-product-matching.png'

const HeroImage = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center md:items-center md:justify-end md:pr-[5%] pointer-events-none overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 1.1, x: 50 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: [0, -15, 0], // Reduced float for mobile
                    rotateZ: [-3, 3, -3]
                }}
                transition={{
                    opacity: { duration: 2, ease: "easeOut" },
                    x: { duration: 1.8, ease: [0.22, 1, 0.36, 1] },
                    scale: { duration: 2, ease: "easeOut" },
                    y: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    rotateZ: {
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
                className="relative w-[350px] md:w-[600px] lg:w-[700px] mt-10 md:mt-0"
            >
                {/* Product Highlights */}
                <HighlightLabel
                    text="01 / Pure Botanical"
                    className="absolute -left-2 md:-left-4 top-[15%]"
                    delay={2.5}
                />
                <HighlightLabel
                    text="02 / Solar Infused"
                    className="absolute -right-2 md:-right-4 top-1/2"
                    delay={2.8}
                />
                <HighlightLabel
                    text="03 / Deep Hydration"
                    className="absolute -left-1 md:-left-2 bottom-[15%]"
                    delay={3.1}
                />

                {/* Large architectural shadow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#1A1A1A]/10 blur-[80px] md:blur-[120px] rounded-full -z-10 opacity-50 md:opacity-70" />


                <img
                    src={heroProduct}
                    alt="Veluna Serum"
                    className="w-full h-auto object-contain brightness-[1.02] drop-shadow-xl md:drop-shadow-none"
                />
            </motion.div>
        </div>
    )
}

const HighlightLabel = ({ text, className, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 1 }}
        className={`flex items-center space-x-2 md:space-x-4 z-20 ${className}`}
    >
        <div className="w-8 h-[1px] bg-[#1A1A1A]/20" />
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#1A1A1A]/40 font-medium whitespace-nowrap">
            {text}
        </span>
    </motion.div>
)

export default HeroImage
