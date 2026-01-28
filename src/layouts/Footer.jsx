import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-[#212E26] text-primary pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <img src="/logo.png" alt="Veluna Logo" className="h-10 w-auto" />
                            <h3 className="font-serif text-3xl">Veluna</h3>
                        </div>
                        <p className="font-luxury text-sm tracking-wide leading-relaxed opacity-80 mb-8">
                            Elevating your skin ritual through celestial science and botanical wisdom. Pure. Potent. Proven.
                        </p>
                        <div className="flex space-x-5">
                            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} strokeWidth={1.5} /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} strokeWidth={1.5} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-luxury text-xs tracking-[0.2em] uppercase mb-8">Experience</h4>
                        <ul className="space-y-4 text-sm opacity-80 font-light">
                            <li><Link to="/shop" className="hover:text-accent transition-colors">Shop All</Link></li>
                            <li><Link to="/quiz" className="hover:text-accent transition-colors">Skin Quiz</Link></li>
                            <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
                            <li><Link to="/journal" className="hover:text-accent transition-colors">Journal</Link></li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h4 className="font-luxury text-xs tracking-[0.2em] uppercase mb-8">Support</h4>
                        <ul className="space-y-4 text-sm opacity-80 font-light">
                            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                            <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
                            <li><Link to="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
                            <li><Link to="/ingredients" className="hover:text-accent transition-colors">Ingredient Glossary</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-luxury text-xs tracking-[0.2em] uppercase mb-8">The Moonshot</h4>
                        <p className="text-sm opacity-80 font-light mb-6">
                            Subscribe to receive celestial skincare tips and early access to new rituals.
                        </p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-transparent border-b border-primary/20 py-2 focus:border-accent outline-none text-sm placeholder:text-primary/40 transition-colors"
                            />
                            <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-accent">
                                <Mail size={18} strokeWidth={1.5} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-primary/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase">
                    {/* Left: Copyright */}
                    <div className="opacity-40 mb-4 md:mb-0">
                        <p>© 2026 VELUNA BEAUTY. ALL RIGHTS RESERVED.</p>
                    </div>

                    {/* Center: Developer Credits */}
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <span className="opacity-60">Developed by Mohamed Essam</span>
                        <div className="flex items-center gap-3 ml-1">
                            <a href="https://www.linkedin.com/in/mohamedessamz/" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 hover:text-accent transition-all duration-300">
                                <Linkedin size={14} strokeWidth={1.5} />
                            </a>
                            <a href="mailto:mohamedessamzakariaa@gmail.com" className="opacity-40 hover:opacity-100 hover:text-accent transition-all duration-300">
                                <Mail size={14} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    {/* Right: Legal Links */}
                    <div className="flex space-x-6 opacity-40">
                        <Link to="/privacy-policy" className="hover:opacity-100 hover:text-accent transition-all duration-300">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:opacity-100 hover:text-accent transition-all duration-300">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
