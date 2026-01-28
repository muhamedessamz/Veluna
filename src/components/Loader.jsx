import { motion } from 'framer-motion'

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="fixed inset-0 z-[1000] bg-primary flex flex-col items-center justify-center p-6"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-8"
            >
                <img src="/logo.png" alt="Veluna Logo" width="80" height="80" className="h-20 w-auto mx-auto" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
                transition={{ repeat: Infinity, duration: 2, times: [0, 0.2, 0.8, 1] }}
                className="text-center"
            >
                <h2 className="font-serif text-5xl md:text-7xl mb-4 tracking-tighter">Veluna</h2>
                <p className="text-[10px] tracking-[0.5em] uppercase font-luxury opacity-40">Calibrating Ritual...</p>
            </motion.div>

            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-secondary/10">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3, ease: 'easeInOut' }}
                    className="h-full bg-accent"
                />
            </div>
        </motion.div>
    )
}

export default Loader
