import { motion } from 'framer-motion'

export default function AnimatedSection({
  children,
  className,
  direction = 'up',
  delay = 0,
  stagger = 0,
  ...props
}) {
  const distance = 40
  const computeOffset = dir => {
    switch (dir) {
      case 'left':
        return {
          x: distance,
          y: 0
        }
      case 'right':
        return {
          x: -distance,
          y: 0
        }
      case 'down':
        return {
          x: 0,
          y: -distance
        }
      default:
        return {
          x: 0,
          y: distance
        }
    }
  }

  const variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9, 
      ...computeOffset(direction) 
    },
    hidden: { opacity: 0, scale: 0.9, ...computeOffset(direction) },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: { 
        staggerChildren: stagger, 
        delayChildren: delay 
      },
    }
  }

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={
        {
          once: true,
          amount: 0.2
        }
      }
      transition={
        {
          duration: 0.5,
          delay
        }
      }
      variants={variants}
      {...props}
    >
      {children}
    </motion.section>
  )
}
