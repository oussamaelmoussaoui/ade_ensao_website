import { motion } from 'framer-motion'

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  ...props
}) {
  const variants = {
    hidden: { 
      opacity: 0,
      y: 40 // start slightly below
    },
    visible: {
      opacity: 1,
      y: 0, // move to natural position
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
        delay
      }
    }
  }

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.section>
  )
}
