import { motion } from 'framer-motion'
import { Truck, RotateCcw, ShieldCheck, Globe } from 'lucide-react'

const Shipping = () => {
    const sections = [
        {
            icon: <Truck size={24} strokeWidth={1} />,
            title: "Shipping Trajectories",
            content: [
                { label: "Domestic Standard", detail: "3-5 Business Days. Complimentary on orders over $150." },
                { label: "Domestic Express", detail: "1-2 Business Days. Calculated at checkout." },
                { label: "Processing Time", detail: "Orders are prepared within 24-48 hours of celestial alignment (order confirmation)." }
            ]
        },
        {
            icon: <Globe size={24} strokeWidth={1} />,
            title: "International Orbits",
            content: [
                { label: "Global Reach", detail: "We ship to over 50 countries. Delivery times vary by region (typically 7-14 days)." },
                { label: "Duties & Taxes", detail: "International customers are responsible for any local customs fees and import duties." }
            ]
        },
        {
            icon: <RotateCcw size={24} strokeWidth={1} />,
            title: "The Ritual of Return",
            content: [
                { label: "Window", detail: "Products must be returned within 30 days of receipt in their original, unopened violet glass vessels." },
                { label: "Process", detail: "Initiate your return via our Concierge portal to receive a prepaid shipping label." },
                { label: "Refunds", detail: "Processed to your original payment method within 5-7 business days of inspection." }
            ]
        },
        {
            icon: <ShieldCheck size={24} strokeWidth={1} />,
            title: "Quality Assurance",
            content: [
                { label: "Damages", detail: "If your vessel arrives compromised, please contact our Concierge immediately with visual evidence." },
                { label: "Exchanges", detail: "We offer one-time exchanges for items of equal value if the product remains sealed." }
            ]
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-primary min-h-screen pb-32"
        >
            {/* Hero Section */}
            <section className="h-[50vh] flex items-center justify-center px-6 relative overflow-hidden bg-secondary group/hero text-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
                        className="w-full h-full object-cover grayscale group-hover/hero:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover/hero:scale-100"
                        alt="Veluna Logistics"
                    />
                    <div className="absolute inset-0 bg-secondary/50 group-hover/hero:bg-secondary/30 transition-all duration-1000"></div>
                </div>
                <div className="container mx-auto z-10">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl text-primary font-serif mb-6">Logistics of <span className="italic">Care</span></h1>
                    <p className="text-primary/60 font-luxury tracking-[0.4em] uppercase text-[10px]">Shipping, Returns, and Security</p>
                </div>
            </section>

            <section className="pt-32 container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
                        {sections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                            >
                                <div className="text-accent mb-8">
                                    {section.icon}
                                </div>
                                <h2 className="text-3xl font-serif mb-10">{section.title}</h2>
                                <div className="space-y-8">
                                    {section.content.map((item, i) => (
                                        <div key={i}>
                                            <h4 className="text-[10px] tracking-widest uppercase text-secondary/40 font-luxury mb-2">{item.label}</h4>
                                            <p className="text-secondary/70 font-light leading-relaxed">{item.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-40 p-12 bg-secondary/5 border border-secondary/5 rounded-2xl text-center">
                        <h3 className="font-serif text-2xl mb-6">Need further assistance?</h3>
                        <p className="text-secondary/60 mb-10 max-w-md mx-auto">Our celestial concierge is available 24/7 to guide your order home.</p>
                        <a href="/contact" className="btn-premium inline-block">Contact Concierge</a>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Shipping
