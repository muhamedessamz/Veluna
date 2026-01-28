import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "Data Collection",
            content: "We collect only the essential information required to fulfill your celestial skin rituals. This includes your name, contact details, and shipping address. We do not store sensitive payment information on our servers; all transactions are handled via encrypted third-party portals."
        },
        {
            title: "Usage of Information",
            content: "Your data is used exclusively to personalize your experience, process orders, and provide concierge support. We may occasionally share celestial updates and member-only offerings with your explicit consent."
        },
        {
            title: "Cookies & Tracking",
            content: "We use minimal tracking technologies to understand how you interact with our cosmos. This helps us optimize our digital sanctuary for all visitors. You may manage your cookie preferences through your browser settings."
        },
        {
            title: "Third-Party Sharing",
            content: "Veluna never sells your personal data. We share information only with trusted partners essential for order fulfillment (e.g., shipping carriers) and legal compliance."
        },
        {
            title: "The Violet Vault",
            content: "Just as our violet glass protects our formulas, we employ industry-standard encryption and security protocols to protect your digital identity within our servers."
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
                <header className="max-w-4xl mx-auto mb-20">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-luxury mb-4 block">
                        Transparency & Trust
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif mb-8">
                        Privacy <span className="italic">Policy</span>
                    </h1>
                    <div className="w-20 h-px bg-secondary/20 mb-12"></div>
                </header>

                <div className="max-w-4xl mx-auto space-y-16">
                    {sections.map((section, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                <h2 className="text-[10px] tracking-[0.4em] uppercase text-secondary/40 font-luxury sticky top-40">
                                    {section.title}
                                </h2>
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-lg font-light text-secondary/70 leading-relaxed">
                                    {section.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <footer className="max-w-4xl mx-auto mt-32 pt-12 border-t border-secondary/5 text-sm text-secondary/40 font-light">
                    Last updated: January 2026. For inquiries regarding your data, please contact our Concierge at privacy@velunabeauty.com
                </footer>
            </div>
        </motion.div>
    )
}

export default PrivacyPolicy
