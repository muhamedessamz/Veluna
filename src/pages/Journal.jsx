import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Journal = () => {
    const articles = [
        {
            id: 1,
            title: "The Moon & Your Skin Cycle",
            excerpt: "How lunar phases influence cellular regeneration and hydration levels.",
            date: "October 12, 2023",
            image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=800",
            category: "Science"
        },
        {
            id: 2,
            title: "Ingredient Spotlight: Blue Tansy",
            excerpt: "The calming power of this rare botanical for sensitive and reactive skin types.",
            date: "September 28, 2023",
            image: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&fit=crop&q=80&w=800",
            category: "Ingredients"
        },
        {
            id: 3,
            title: "Rituals for Restful Sleep",
            excerpt: "Creating a nighttime routine that enhances skin repair while you dream.",
            date: "September 15, 2023",
            image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
            category: "Lifestyle"
        }
    ]

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
                        <div key={article.id} className="group cursor-pointer">
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
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Journal
