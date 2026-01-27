const Newsletter = () => {
    return (
        <section className="py-32 bg-secondary text-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-20 transform scale-150" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-luxury mb-6 block">
                    Join the Cycle
                </span>
                <h2 className="text-4xl md:text-6xl font-serif mb-8">
                    Unlock 15% Off Your <br /> First <span className="italic">Ritual</span>
                </h2>
                <p className="max-w-md mx-auto text-white/60 font-light mb-12">
                    Subscribe to receive exclusive access to new launches, skincare wisdom, and member-only offers.
                </p>

                <form className="max-w-md mx-auto flex border-b border-primary/30 pb-2">
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        className="bg-transparent w-full outline-none text-primary placeholder:text-primary/30 font-luxury text-sm tracking-wide py-2"
                    />
                    <button className="text-[10px] tracking-widest uppercase font-luxury hover:text-accent transition-colors">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter
