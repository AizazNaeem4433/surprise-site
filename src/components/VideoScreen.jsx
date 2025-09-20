"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function VideoScreen() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = true // Ensures autoplay works on all browsers
      video.play().catch(err => console.log("Autoplay blocked:", err))
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="fixed inset-0 bg-black z-50"
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  )
}
