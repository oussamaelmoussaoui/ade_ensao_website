
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link';
import Counter from '../components/Counter';
import Layout from '../components/Layout';
import Image from 'next/image';
import {
  FaRegCalendarAlt,
  FaUserPlus,
  FaLightbulb,
  FaHandshake,
  FaUserGraduate,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaProjectDiagram,
  FaUsers,
  FaArrowRight
} from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection'
import ProjectCard from '../components/ProjectCard'
import { clubspara } from '../data/clubs'

export default function Home() {
  // Slides displayed in the hero section
  const slides = ['/wireframe-pic.svg', '/2.jpg'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Layout title="Accueil">
      
      {/* Hero */}
      <section className="relative w-full h-screen md:h-[80vh] 
      overflow-hidden flex items-center text-white justify-center -mt-4">
        
        <Image
          src="/images/image-4.jpg"
          alt="Background image"
          fill
          className="object-cover filter grayscale-0 brightness-75"
          priority
        />

        <div className='max-w-7xl w-full flex justify-center 
        md:grid md:grid-cols-2 items-center md:justify-between relative'>

          <motion.div
            className="relative z-10 text-center md:text-left bg-adeBlue-100/60 backdrop-blur shadow-sm rounded-md m-4 p-10"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-4xl text-black md:text-5xl mb-6">
              L'ADE : L’énergie qui fait vivre l’ENSAO
            </h1>
            <p className="max-w-lg text-lg md:text-lg mb-8 text-gray-950">
              L’ADE, c’est plus qu’une association.
              C’est un moteur, un lien, une voix.
              Elle dynamise la vie étudiante à l’ENSAO et soutient le quotidien des élèves ingénieurs.
            </p>

            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <Link href="/events" className="bg-white hover:bg-black hover:text-white text-black px-6 py-3 rounded-full transition inline-flex items-center gap-2 duration-300 ease-in-out">
                <span>Votre ADE</span>
                <FaRegCalendarAlt />
              </Link>
              <Link href="/join" className="bg-adeBlue-600 text-white hover:bg-black px-6 py-3 rounded-full transition inline-flex items-center gap-2 duration-300 ease-in-out ">
                <span>Qraytna</span>
                <FaUserPlus />
              </Link>
            </div>
          </motion.div>

        </div>
        
      </section>

      {/* Qui sommes nous */}
      <AnimatedSection id="about" className="bg-white text-black" >
        
        <div className="container items-center gap-8 md:gap-14 grid grid-cols-1 md:grid-cols-2 mx-auto px-6 max-w-7xl lg:grid-cols-2 lg:grid-flow-col py-6">
          <div className='text-center md:text-left flex flex-col justify-center w-full'>
            <h2 className="text-3xl mb-8 ">Qui sommes-nous ?</h2>
            <p className="max-w-lg text-lg text-gray-950">
              L’Association des Étudiants de l’ENSAO (ADE) est l’organisation 
              étudiante officielle de l’École Nationale des Sciences Appliquées
              d’Oujda. Elle rassemble l’ensemble des élèves-ingénieurs et œuvre 
              à faire vivre et enrichir la vie étudiante au sein de notre École.
            </p>
          </div>

          <div className="container mx-auto px-4 text-center bg-lightGray dark:bg-darkText py-10 rounded-lg">
            
          </div>

        </div>
        
      </AnimatedSection>

      {/* Events */}
      <AnimatedSection id="events" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl h-[60vh] flex flex-col items-center justify-center overflow-hidden">
          <h2 className="text-3xl text-center mb-8">Envie de vivre des moments forts ?</h2>
          <p className="max-w-lg mx-auto text-center text-lg md:text-lg mb-8 text-gray-950">
            L’ADE organise tout au long de l’année des événements qui rassemblent et marquent le parcours des étudiants.
          </p>
          <div className="overflow-hidden pb-2">
            <div className="flex flex-nowrap items-center gap-10 w-max sponsor-scroll">
              {Array.from({ length: 6 }, (_, i) => {
                const logos = [
                  '/wireframe-pic.svg',
                  '/wireframe-pic.svg',
                  '/wireframe-pic.svg',
                  '/wireframe-pic.svg',
                  '/wireframe-pic.svg',
                  '/wireframe-pic.svg',
                ]
                const titres = [
                  'Journée Portes Ouvertes',
                  'Cérémonie de remise des diplomes',
                  'Forum des entreprises',
                  'Journée d intégration',
                  'Sortie d integration',
                  'Semaine d orientation',
                ]
                const src = logos[i % logos.length]
                return <IconTrust key={i} src={src} title={titres[i % titres.length]} />
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Clubs Preview */}
      <AnimatedSection id="clubspara" className="py-20 bg-adeBlue-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl mb-8 text-center">Tu as une passion ? Il y a un club pour ça.</h2>
          <p className="max-w-lg mx-auto text-center text-lg md:text-lg mb-8 text-gray-950">
            Les clubs sont le cœur battant du campus.
            Ils offrent un espace pour s’exprimer, apprendre autrement et vivre pleinement l’aventure ENSAO.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clubspara.slice(0, 4).map((p, idx) => (
              <ProjectCard className="w-full" key={idx} {...p} link="/clubs" />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/clubs" className="text-adeBlue-600 bg-lightGray py-2 px-4 rounded-full hover:text-adeRed inline-flex items-center gap-1 hover:gap-3 duration-150 ease-in-out">
              <span>Voir tous les clubs</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Qraytna */}
      <AnimatedSection id="qraytna" className="py-20">
        <div className="relative container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl mb-8 text-center">Ton espace pédagogique, à portée de clic</h2>
          <p className="max-w-xl mx-auto text-center text-lg md:text-lg mb-8 text-gray-950">
            Qraytna, c’est ton allié réussite : cours, TD, examens corrigés, supports utiles… tout organisé pour te simplifier la vie.
          </p>
          <div className="relative w-full rounded-lg ">
            <EventCard className='w-full ' img="/images/image-3.jpg" title="Qraytna" tag="Ressources" />
          </div>

          <div className="text-center mt-10">
            <Link href="/resources" className="bg-lightGray text-adeBlue-600 py-2 px-4 rounded-full hover:text-adeRed-700 inline-flex items-center gap-1 hover:gap-3 duration-300 ease-in-out">
              <span>Voir toutes les ressources</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection id="contact" className=" bg-white text-black" >
        
        <div className="container items-center gap-8 md:gap-14 grid grid-cols-1 md:grid-cols-2 mx-auto px-6 max-w-7xl lg:grid-cols-2 lg:grid-flow-col py-6">
          <div className='text-center md:text-left flex flex-col justify-center w-full'>
            <h2 className="text-3xl mb-8 ">On t’écoute, parle-nous !</h2>
            <p className="max-w-lg text-lg text-gray-950">
              Une question ou un retour ?
              L’ADE est là pour toi, par mail ou via les réseaux sociaux, en toute confiance.
            </p>
          </div>

          <div className="container mx-auto px-4 text-center bg-lightGray dark:bg-darkText py-10 rounded-lg">
            <h2 className="text-3xl mb-6">Contact</h2>
            <p className="mb-8">Une question ? Un projet ? Envoyez‑nous un message !</p>
            <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-xl mx-auto grid grid-cols-1 gap-4">
              <input type="text" name="name" placeholder="Nom" className="p-3 rounded-md text-darkText" required />
              <input type="email" name="email" placeholder="Email" className="p-3 rounded-md text-darkText" required />
              <textarea name="message" placeholder="Message" rows="4" className="p-3 rounded-md text-darkText" required />
              <button className="bg-black text-white hover:bg-adeRed-600 hover:text-white py-3 rounded-md transition duration-300 ease-in-out">Envoyer</button>
            </form>
          </div>

        </div>
        
      </AnimatedSection>
      
      
      
    </Layout>
  )
}

function EventCard({ img, title, tag }){
  return (
    <div
      className=" relative w-full masonry-item bg-white rounded-lg shadow text-black hover:text-black duration-300 ease-in-out
      hover:shadow-lg overflow-hidden hover:duration-300 h-[45vh]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Image src={img} alt={title} fill className="w-full h-48 object-cover filter brightness-75" />
      <div className="absolute inset-0 hover:bg-adeBlue-600/60 bg-transparent duration-300 ease-in-out  rounded-lg" />
      <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] p-4 flex flex-col justify-center items-center text-center">
        <span className="text-xs uppercase tracking-wider text-adeRed text-gray-400">{tag}</span>
        <h4 className="text-[48pt] text-white">{title}</h4>
      </div>
    </div>
  )
}

function IconTrust({ src , title}) {
  return (
    <div
      className=" bg-white shadow rounded-lg flex relative text-black duration-300 ease-in-out"
    >
      <Image src={src} alt="logo" width={160} height={80} className="w-full h-60 md:h-80 object-cover" />
      <div className="absolute inset-0 hover:bg-adeBlue-100/60 bg-transparent duration-300 ease-in-out  rounded-lg" />
      <div className="absolute bottom-0 p-4 flex flex-col justify-start">
        <h3 className="text-xl bottom-0">{title}</h3>
        <p>description</p>
      </div>
    </div>
  )
}

function SocialIcon({ icon: Icon, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-3xl p-4 rounded-full bg-white text-adeBlue-600
      hover:bg-adeRed hover:text-white transition hover:shadow-lg"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 100, duration: 0.3 }}
    >
      <Icon />
    </motion.a>
  )
}

function Stat({ icon: Icon, count, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-16 h-16 mb-4 bg-adeBlue-600/10 text-adeBlue-600 rounded-full">
        <Icon size={32} />
      </div>
      <span className="text-4xl text-adeBlue-600"><Counter to={count} duration={1200} /></span>
      <p className="mt-2 text-lg">{label}</p>
    </div>
  )
}
