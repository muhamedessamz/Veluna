import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const TermsOfService = () => {
    const terms = [
        {
            title: "01 / Acceptance",
            content: "By entering the Veluna cosmos and utilizing our digital sanctuary, you agree to abide by these terms. Our services are intended for personal, non-commercial use only."
        },
        {
            title: "02 / Product Use",
            content: "Our rituals are intended for topical use. We recommend consulting a professional if you have specific skin conditions. Veluna is not liable for misuse of products or individual allergic reactions."
        },
        {
            title: "03 / Celestial Orders",
            content: "All orders are subject to availability and celestial alignment (confirmation). We reserve the right to cancel orders in cases of pricing errors or suspected fraudulent activity."
        },
        {
            title: "04 / Intellectual Property",
            content: "All visual assets, typography, and brand narratives are the exclusive property of Veluna. Unauthorized reproduction or use of our 'Celestial Wisdom' is strictly prohibited."
        },
        {
            title: "05 / Amendments",
            content: "We may update these terms as our cosmos evolves. Persistent use of our services constitutes acceptance of the latest legal framework."
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-40 pb-32 bg-primary min-h-screen"
        >
            <div className="container mx-auto px-6">
                <header className="max-w-4xl mx-auto mb-20 text-center">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-luxury mb-4 block">
                        Our Agreement
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif mb-8">
                        Terms of <span className="italic">Service</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-secondary/60 font-light italic">
                        "Harmony is preserved through clear understanding and mutual respect."
                    </p>
                </header>

                <div className="max-w-3xl mx-auto space-y-12">
                    {terms.map((term, index) => (
                        <div key={index} className="p-12 bg-secondary/[0.02] border border-secondary/5">
                            <h2 className="text-[10px] tracking-[0.4em] uppercase text-accent mb-6 font-luxury">
                                {term.title}
                            </h2>
                            <p className="text-xl font-serif text-secondary/80 leading-relaxed">
                                {term.content}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto mt-20 text-center">
                    <p className="text-secondary/40 text-sm font-light mb-12">
                        For detailed inquiries regarding our terms, please reach out to our legal concierge.
                    </p>
                    <Link to="/contact">
                        <button className="btn-outline border-secondary/20 text-secondary hover:bg-secondary hover:text-primary">
                            Inquire Further
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default TermsOfService
