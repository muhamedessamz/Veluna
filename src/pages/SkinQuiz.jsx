import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, ArrowLeft } from 'lucide-react'

const SkinQuiz = () => {
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState({})

    const questions = [
        {
            id: 'skinType',
            text: 'How would you describe your skin?',
            options: ['Oily', 'Dry', 'Combination', 'Normal']
        },
        {
            id: 'concern',
            text: 'What is your primary concern?',
            options: ['Aging', 'Dullness', 'Texture', 'Hydration']
        },
        {
            id: 'sensitivity',
            text: 'Is your skin sensitive?',
            options: ['Highly Sensitive', 'Occasionally', 'Rarely']
        }
    ]

    const handleSelect = (option) => {
        setAnswers({ ...answers, [questions[step].id]: option })
        if (step < questions.length - 1) {
            setTimeout(() => setStep(step + 1), 300)
        } else {
            setStep(questions.length)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 bg-primary min-h-screen flex items-center justify-center p-6"
        >
            <div className="w-full max-w-2xl bg-white p-12 md:p-20 shadow-xl relative overflow-hidden">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary/5">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(step / questions.length) * 100}%` }}
                        className="h-full bg-accent"
                    />
                </div>

                <AnimatePresence mode="wait">
                    {step < questions.length ? (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex flex-col"
                        >
                            <span className="text-[10px] tracking-[0.4em] uppercase text-accent mb-6 font-luxury">Question 0{step + 1}</span>
                            <h2 className="text-3xl md:text-4xl font-serif mb-12">{questions[step].text}</h2>
                            <div className="grid grid-cols-1 gap-4">
                                {questions[step].options.map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => handleSelect(opt)}
                                        className="group border border-secondary/10 p-6 text-left hover:border-accent hover:bg-accent/5 transition-all flex justify-between items-center"
                                    >
                                        <span className="font-luxury text-xs tracking-widest uppercase">{opt}</span>
                                        <div className="w-5 h-5 rounded-full border border-secondary/10 flex items-center justify-center group-hover:border-accent transition-colors">
                                            {answers[questions[step].id] === opt && <Check size={12} className="text-accent" />}
                                        </div>
                                    </button>
                                ))}
                            </div>
                            <div className="mt-12 flex justify-between">
                                <button
                                    onClick={() => setStep(Math.max(0, step - 1))}
                                    disabled={step === 0}
                                    className="flex items-center gap-2 text-[10px] tracking-widest uppercase opacity-40 hover:opacity-100 disabled:opacity-0 transition-opacity"
                                >
                                    <ArrowLeft size={14} /> Back
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                <Check className="text-accent" size={32} />
                            </div>
                            <h2 className="text-4xl font-serif mb-6">Your Ritual is <span className="italic">Ready</span></h2>
                            <p className="text-secondary/60 font-light mb-12 leading-relaxed">
                                Based on your skin profile, we have curated a selection of Veluna products designed to illuminate and restore your complexion.
                            </p>
                            <button className="btn-premium" onClick={() => window.location.href = '/shop'}>
                                View My Recommendations
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default SkinQuiz
