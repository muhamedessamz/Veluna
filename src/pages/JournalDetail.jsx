import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { articles } from '../data/journalData'
import { ArrowLeft, Clock, Tag } from 'lucide-react'

const JournalDetail = () => {
    const { id } = useParams()
    const article = articles.find(a => a.id === parseInt(id))

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-primary p-6">
                <h1 className="text-3xl font-serif mb-6">Article not found</h1>
                <Link to="/journal" className="btn-premium">Back to Journal</Link>
            </div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-primary min-h-screen pb-32"
        >
            {/* Header / Hero */}
            <section className="h-[60vh] flex items-end px-6 relative overflow-hidden bg-secondary group/hero">
                <div className="absolute inset-0">
                    <img
                        src={article.image}
                        className="w-full h-full object-cover transition-all duration-1000 ease-in-out scale-105 group-hover/hero:scale-100"
                        alt={article.title}
                    />
                    <div className="absolute inset-0 bg-secondary/30"></div>
                </div>

                <div className="container mx-auto z-10 mb-20">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            to="/journal"
                            className="flex items-center space-x-2 text-primary/80 hover:text-primary transition-colors mb-8 group/back"
                        >
                            <ArrowLeft size={16} className="group-hover/back:-translate-x-1 transition-transform" />
                            <span className="text-[10px] tracking-widest uppercase font-luxury">Back to Journal</span>
                        </Link>
                        <h1 className="text-4xl md:text-6xl lg:text-8xl text-primary font-serif max-w-5xl leading-tight">
                            {article.title}
                        </h1>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-8 mb-16 pb-12 border-b border-secondary/10">
                        <div className="flex items-center space-x-3">
                            <Clock size={16} className="text-accent" />
                            <span className="text-[10px] tracking-widest uppercase opacity-40">{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Tag size={16} className="text-accent" />
                            <span className="text-[10px] tracking-widest uppercase opacity-40">{article.category}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div
                        className="prose prose-veluna max-w-none"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* Footer / CTA */}
                    <div className="mt-32 pt-24 border-t border-secondary/10 text-center">
                        <h2 className="text-3xl font-serif mb-8 italic">Continue Your Ritual</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/shop" className="btn-premium">Shop The Collection</Link>
                            <Link to="/journal" className="btn-premium bg-transparent text-secondary border-secondary/20 hover:bg-secondary/5">Read More Articles</Link>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default JournalDetail
