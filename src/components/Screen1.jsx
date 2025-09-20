"use client"

import { motion } from "framer-motion"

export default function Screen1({ onNext }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50, }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center min-h-screen p-4 text-center"
        >
            <motion.div  
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-6"
            >
                <img
                    src="/gifs/screen1.gif"
                    alt="Heart gif"
                    className="w-48"
                />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight"
                style={{ textShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
            >
                I have something special for you, Cutiepiee<span className="text-white">❤️</span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}>
                <motion.button
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    whileHover={{
                        scale: 1.05,
                        background: "linear-gradient(to right, #ec4899, #a855f7)",
                        boxShadow: "0 0 40px rgba(236, 72, 153, 0.6)",
                    }}

                    whileTap={{ scale: 0.95 }}
                    onClick={onNext}
                    className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full text-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    style={{ boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)" }}
                >
                    Next
                </motion.button>
            </motion.div>
        </motion.div>
    )
}
