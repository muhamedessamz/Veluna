import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-secondary/10 py-8">
            <button
                className="w-full flex items-center justify-between text-left group"
                onClick={onClick}
            >
                <span className="text-xl md:text-2xl font-serif pr-8 group-hover:italic transition-all duration-300">
                    {question}
                </span>
                <div className="flex-shrink-0">
                    {isOpen ? (
                        <Minus className="w-5 h-5 text-accent" />
                    ) : (
                        <Plus className="w-5 h-5 opacity-40 group-hover:opacity-100" />
                    )}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pt-6 pb-2 text-secondary/60 font-light leading-relaxed max-w-3xl">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(0)

    const faqCategories = [
        {
            title: "Shipping & Orders",
            questions: [
                {
                    q: "How long does shipping take?",
                    a: "Standard celestial shipping typically takes 3-5 business days. International orders can take 7-14 days depending on regional customs clearance. Each order is prepared within 24-48 hours of confirmation."
                },
                {
                    q: "Do you ship internationally?",
                    a: "Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times are calculated at checkout based on your specific location."
                },
                {
                    q: "Can I track my ritual's journey?",
                    a: "Absolutely. Once your order is dispatched, you will receive a tracking link via email to monitor its progress from our sanctuary to your home."
                }
            ]
        },
        {
            title: "Product & Ingredients",
            questions: [
                {
                    q: "Are your products suitable for sensitive skin?",
                    a: "Our formulas are curated to be as gentle as they are potent. However, as every skin journey is unique, we recommend performing a patch test or consulting our celestial concierge for a private skin analysis."
                },
                {
                    q: "What makes your ingredients 'celestial'?",
                    a: "We curate ingredients harvested during specific lunar phases—such as the Full Moon for maximum enzymatic potency—matching ancient botanical wisdom with modern scientific precision."
                },
                {
                    q: "Are Veluna products vegan and cruelty-free?",
                    a: "Yes. We believe in total harmony with all living beings. No animal testing is performed, and our formulas are entirely plant-based."
                }
            ]
        },
        {
            title: "Sustainability",
            questions: [
                {
                    q: "What is special about the violet glass vessels?",
                    a: "Our signature Miron Violet Glass acts as a natural filter, blocking the complete spectrum of visible light with the exception of the violet part, protecting our botanical formulas from degradation while enhancing their potency."
                },
                {
                    q: "Is your packaging recyclable?",
                    a: "Yes. Our glass vessels are designed for eternal life and are infinitely recyclable. Our shipping materials are also FSC-certified and carbon-neutral."
                }
            ]
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
                <header className="max-w-4xl mx-auto text-center mb-24">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-luxury mb-6 block">
                        Seeking Clarity
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif mb-8">
                        Common <span className="italic">Inquiries</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-secondary/60 font-light text-lg">
                        Explore our curated guide to shipping, products, and our celestial philosophy.
                    </p>
                </header>

                <div className="max-w-4xl mx-auto">
                    {faqCategories.map((category, catIndex) => (
                        <div key={catIndex} className="mb-20">
                            <h2 className="text-[10px] tracking-[0.4em] uppercase text-secondary/40 font-luxury mb-12 border-b border-secondary/5 pb-4">
                                {category.title}
                            </h2>
                            <div className="space-y-0">
                                {category.questions.map((item, qIndex) => {
                                    const globalIndex = `${catIndex}-${qIndex}`
                                    return (
                                        <FAQItem
                                            key={qIndex}
                                            question={item.q}
                                            answer={item.a}
                                            isOpen={openIndex === globalIndex}
                                            onClick={() => setOpenIndex(prev => prev === globalIndex ? null : globalIndex)}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <footer className="mt-32 text-center p-16 bg-secondary/5 border border-secondary/5">
                    <h3 className="text-2xl font-serif mb-6">Still have questions?</h3>
                    <p className="text-secondary/60 font-light mb-8 max-w-md mx-auto">
                        Our celestial concierge is available 24/7 to guide you through your skin ritual.
                    </p>
                    <button className="btn-premium">Contact Concierge</button>
                </footer>
            </div>
        </motion.div>
    )
}

export default FAQs
