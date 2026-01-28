import { motion } from 'framer-motion'
import heroProduct from '../assets/images/hero-product-matching.png'

const HeroImage = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center md:items-center md:justify-end md:pr-[5%] pointer-events-none overflow-hidden">
            {/* 
               CRITICAL PERFORMANCE FIX:
               Removed 'motion.div' wrapper around the main image.
               Framer Motion's 'initial={{ opacity: 0 }}' hides the LCP element until JS loads.
               Now the image is visible immediately (HTML-first).
            */}
            <div className="relative w-[350px] md:w-[600px] lg:w-[700px] mt-10 md:mt-0 aspect-[7/9] md:aspect-auto">

                {/* Product Highlights - Animated separately */}
                <HighlightLabel
                    text="01 / Pure Botanical"
                    className="absolute -left-10 md:-left-4 top-[15%]"
                    delay={2.5}
                />
                <HighlightLabel
                    text="02 / Solar Infused"
                    className="absolute -right-10 md:-right-4 top-1/2"
                    delay={2.8}
                />
                <HighlightLabel
                    text="03 / Deep Hydration"
                    className="absolute -left-8 md:-left-2 bottom-[15%]"
                    delay={3.1}
                />

                {/* Large architectural shadow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#1A1A1A]/10 blur-[80px] md:blur-[120px] rounded-full -z-10 opacity-50 md:opacity-70" />


                {/* Animated Image Wrapper using simple CSS/Framer for non-blocking float */}
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        rotateZ: [-3, 3, -3]
                    }}
                    transition={{
                        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                        rotateZ: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="w-full h-full"
                >
                    {/* Responsive Image with srcset (using same source as placeholder for now, but structure is ready) */}
                    <img
                        src={heroProduct}
                        srcSet={`${heroProduct} 350w, ${heroProduct} 700w`}
                        sizes="(max-width: 768px) 350px, 700px"
                        alt="Veluna Serum"
                        width="700"
                        height="900"
                        fetchPriority="high"
                        loading="eager"
                        className="w-full h-full object-contain brightness-[1.02] drop-shadow-xl md:drop-shadow-none"
                    />
                </motion.div>
            </div>
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
        <div className="w-4 md:w-8 h-[1px] bg-[#1A1A1A]/20" />
        <span className="text-[7px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-[#1A1A1A]/40 font-medium whitespace-nowrap">
            {text}
        </span>
    </motion.div>
)

export default HeroImage
