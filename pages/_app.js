import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        variants={variants}
        transition={{ duration: 0.4 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}
