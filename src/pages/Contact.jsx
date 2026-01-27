import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-primary min-h-screen"
        >
            {/* Hero Section */}
            <section className="h-[75vh] flex items-center justify-center px-6 relative overflow-hidden bg-secondary group/hero">
                <div className="absolute inset-0">
                    <img
                        src="https://galbaia.com/wp-content/uploads/2022/07/Mask-group-5.png"
                        className="w-full h-full object-cover grayscale group-hover/hero:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover/hero:scale-100"
                        alt="Veluna Contact"
                    />
                    <div className="absolute inset-0 bg-secondary/40 group-hover/hero:bg-secondary/20 transition-all duration-1000"></div>
                </div>
                <div className="container mx-auto text-center z-10">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl text-primary font-serif">Connect</h1>
                    <p className="text-primary/60 font-luxury tracking-[0.5em] uppercase text-xs mt-6">Open Channels of Communication</p>
                </div>
            </section>

            <section className="py-32 container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-[10px] tracking-[0.4em] uppercase text-accent mb-12 font-luxury">Coordinates</h2>
                            <h3 className="text-4xl font-serif mb-16 leading-tight">
                                Reach out to our celestial concierge for rituals, orders, or inquiries.
                            </h3>

                            <div className="space-y-12">
                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center text-accent shrink-0">
                                        <Mail size={20} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] tracking-widest uppercase text-secondary/40 font-luxury mb-2">Signal</p>
                                        <p className="text-xl font-light">concierge@veluna.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center text-accent shrink-0">
                                        <Phone size={20} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] tracking-widest uppercase text-secondary/40 font-luxury mb-2">Frequency</p>
                                        <p className="text-xl font-light">+1 (888) VELUNA-0</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-full border border-secondary/10 flex items-center justify-center text-accent shrink-0">
                                        <MapPin size={20} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] tracking-widest uppercase text-secondary/40 font-luxury mb-2">Base</p>
                                        <p className="text-xl font-light">777 Starlight Boulevard, Suite 100<br />Los Angeles, CA 90210</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-secondary/5 p-12 lg:p-16 rounded-2xl">
                            <h2 className="text-[10px] tracking-[0.4em] uppercase text-accent mb-12 font-luxury text-center">Inquiry Form</h2>
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full bg-transparent border-b border-secondary/20 py-4 focus:border-accent outline-none text-secondary transition-colors peer placeholder-transparent"
                                            placeholder="Name"
                                        />
                                        <label
                                            htmlFor="name"
                                            className="absolute left-0 -top-2 text-[10px] tracking-widest uppercase text-accent/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-secondary/40 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-accent"
                                        >
                                            Name
                                        </label>
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-transparent border-b border-secondary/20 py-4 focus:border-accent outline-none text-secondary transition-colors peer placeholder-transparent"
                                            placeholder="Email"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 -top-2 text-[10px] tracking-widest uppercase text-accent/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-secondary/40 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-accent"
                                        >
                                            Email
                                        </label>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <select
                                        id="subject"
                                        className="w-full bg-transparent border-b border-secondary/20 py-4 focus:border-accent outline-none text-secondary transition-colors peer appearance-none"
                                    >
                                        <option value="">General Inquiry</option>
                                        <option value="order">Order Support</option>
                                        <option value="wholesale">Wholesale</option>
                                        <option value="press">Press & Media</option>
                                    </select>
                                    <label
                                        className="absolute left-0 -top-2 text-[10px] tracking-widest uppercase text-accent/60"
                                    >
                                        Subject
                                    </label>
                                </div>
                                <div className="relative group">
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full bg-transparent border-b border-secondary/20 py-4 focus:border-accent outline-none text-secondary transition-colors peer placeholder-transparent resize-none"
                                        placeholder="Message"
                                    ></textarea>
                                    <label
                                        htmlFor="message"
                                        className="absolute left-0 -top-2 text-[10px] tracking-widest uppercase text-accent/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-secondary/40 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-accent"
                                    >
                                        Message
                                    </label>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-secondary text-primary py-6 text-xs tracking-[0.3em] uppercase font-luxury hover:bg-accent transition-colors flex items-center justify-center space-x-3 group"
                                >
                                    <span>Transmit Message</span>
                                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Contact
