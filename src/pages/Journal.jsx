import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { articles } from '../data/journalData'

const Journal = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 bg-primary min-h-screen"
        >
            <div className="container mx-auto px-6">
                <header className="mb-20 text-center">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-luxury mb-4 block">The Journal</span>
                    <h1 className="text-5xl md:text-7xl font-serif mb-6">Celestial <span className="italic">Wisdom</span></h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {articles.map((article) => (
                        <Link to={`/journal/${article.id}`} key={article.id} className="group cursor-pointer">
                            <div className="aspect-[4/5] overflow-hidden mb-6 bg-secondary/5">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                />
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <span className="text-[10px] tracking-widest uppercase opacity-40 mb-3">{article.category} • {article.date}</span>
                                <h3 className="text-2xl font-serif mb-3 group-hover:text-accent transition-colors">{article.title}</h3>
                                <p className="text-sm font-light leading-relaxed opacity-60 max-w-xs">{article.excerpt}</p>
                                <button className="mt-6 text-[10px] tracking-[0.2em] uppercase border-b border-transparent group-hover:border-accent group-hover:text-accent transition-all">Read More</button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Journal
