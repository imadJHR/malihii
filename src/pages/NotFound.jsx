import { motion } from "framer-motion"
import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom"


export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-indigo-600 flex flex-col items-center justify-center text-white p-4">
      <motion.h1
        className="text-9xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      
      <Marquee className="bg-white bg-opacity-20 py-2 mb-8" gradient={false}>
        <span className="text-2xl font-semibold mx-4">Page Not Found</span>
        <span className="text-2xl font-semibold mx-4">•</span>
        <span className="text-2xl font-semibold mx-4">Oops! You're lost</span>
        <span className="text-2xl font-semibold mx-4">•</span>
      </Marquee>
      
      <motion.p
        className="text-xl mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        The page you're looking for doesn't exist or has been moved.
      </motion.p>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/" className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition duration-300">
          Rja3 f7alk awlidi
        </Link>
      </motion.div>
    </div>
  )
}