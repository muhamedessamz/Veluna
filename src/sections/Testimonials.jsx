import { Star } from 'lucide-react'

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            author: "Elena R.",
            text: "The Celestial Glow Elixir entirely changed my skin texture. I've never felt so radiant.",
            product: "Celestial Glow Elixir"
        },
        {
            id: 2,
            author: "Sarah M.",
            text: "Finally, a moisturizer that hydrates deeply without feeling heavy. The scent is divine.",
            product: "Midnight Recovery Balm"
        },
        {
            id: 3,
            author: "Jessica K.",
            text: "Veluna's philosophy resonates with me, and the results speak for themselves. Truly premium.",
            product: "Nebula Cream"
        }
    ]

    return (
        <section className="py-32 bg-primary">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {reviews.map((review) => (
                        <div key={review.id} className="text-center p-8 border border-secondary/5 bg-white/50 backdrop-blur-sm">
                            <div className="flex justify-center gap-1 mb-6 text-accent">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                                ))}
                            </div>
                            <p className="text-xl font-serif italic mb-8 opacity-80 leading-relaxed">
                                "{review.text}"
                            </p>
                            <div>
                                <h4 className="font-luxury text-xs tracking-widest uppercase font-bold mb-1">{review.author}</h4>
                                <span className="text-[10px] tracking-wide uppercase opacity-40">{review.product}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
