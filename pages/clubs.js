import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import Counter from '../components/Counter'
import Link from 'next/link'
import { FaUsers, FaRegCalendarAlt, FaArrowRight } from 'react-icons/fa'
import ClubModal from '../components/ClubsDrawer'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { clubspara, clubF } from '../data/clubs'


export default function Page() {
  const stats = [
    { icon: FaUsers, count: 300, label: 'Membres actifs/an' },
    { icon: FaRegCalendarAlt, count: 20, label: 'Années' }
  ]
  return (
    <Layout title="Notre Équipe">
      {/* Hero */}
      <section className="relative w-full h-[80vh] overflow-hidden flex items-center text-white justify-center">
        <Image
          src="/wireframe-pic.svg"
          alt="Background image "
          fill
          className="object-cover filter grayscale-0 brightness-75"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-adeBlue-700/70 to-adeRed-600/70" />
        <div className='max-w-7xl w-full flex justify-center md:grid md:grid-cols-2 items-center md:justify-between relative'>

          <motion.div
            className="relative z-10 text-center md:text-left bg-white/60 backdrop-blur shadow-sm rounded-md m-4 p-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl text-black md:text-5xl font-extrabold mb-6">
              L'ADE : L’énergie qui fait vivre l’ENSAO
            </h1>
            <p className="max-w-lg text-lg md:text-lg mb-8 text-gray-950">
              L’ADE, c’est plus qu’une association.
              C’est un moteur, un lien, une voix.
              Elle dynamise la vie étudiante à l’ENSAO et soutient le quotidien des élèves ingénieurs.
            </p>

            {/* <div className="flex gap-4 justify-start flex-wrap">
              <Link href="/events" className="bg-white hover:bg-black hover:text-white text-black font-semibold px-6 py-3 rounded-full transition inline-flex items-center gap-2 duration-300 ease-in-out">
                <span>Votre ADE</span>
                <FaRegCalendarAlt />
              </Link>
              <Link href="/join" className="bg-black text-white hover:bg-adeBlue-600 font-semibold px-6 py-3 rounded-full transition inline-flex items-center gap-2 duration-300 ease-in-out ">
                <span>Qraytna</span>
                <FaUserPlus />
              </Link>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <AnimatedSection className="py-16 bg-white" direction="up">
        <div className="mx-auto grid sm:grid-cols-2 gap-8 max-w-5xl px-4">
          {stats.map((s, i) => (
            <Stat key={i} {...s} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="my-24" direction="up">
        <div className='container p-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center overflow-hidden'>
          
          <div className='bg-gray-100 p-8 rounded-lg shadow-md w-full h-full'>

            <h2 className="text-3xl font-bold text-center mb-8"> L’impact du parascolaire </h2>
            <p className="max-w-lg mx-auto text-center text-lg md:text-lg mb-8 text-gray-950">
              Les activités parascolaires jouent un rôle essentiel dans le parcours d’un élève ingénieur.
              Au-delà des apprentissages académiques, elles permettent de développer des compétences transversales telles que le leadership, la communication, la gestion de projet, le travail en équipe, ou encore la prise d’initiative.
              <br/><br/>
              Ces expériences enrichissent le profil des étudiants et contribuent à une formation plus complète, tant sur le plan personnel que professionnel.
            </p>

          </div>

          <div className='bg-gray-100 p-8 rounded-lg shadow-md w-full h-full'>
            <h2 className="text-3xl font-bold text-center mb-8"> Nos clubs</h2>
            <p className="max-w-lg mx-auto text-center text-lg md:text-lg mb-8 text-gray-950">
              L’ENSAO offre un espace dynamique où chaque club est une porte ouverte vers l’engagement et la créativité.
              Ces clubs permettent aux étudiants de s’investir dans des projets passionnants, d’apprendre et de partager.
              Chaque club représente une opportunité unique de s’impliquer, de développer des compétences et de participer activement à la vie étudiante.
              <br/><br/>
              Vous trouverez ci-dessous la liste des clubs, accompagnée d’une présentation plus détaillée afin de mieux faire connaître leurs objectifs et leurs activités.

            </p>
          </div>
        
        </div>
        
      </AnimatedSection>

      <section className="my-24" >
        <div className='container max-w-7xl mx-auto flex flex-col items-center justify-center overflow-hidden gap-10'>
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">Enrichissez vos expériences</h2>
            <p className="max-w-lg mx-auto text-center text-lg md:text-lg mb-8 text-gray-950">
              Vous pouvez choisir l'un des {clubspara.length} clubs parascolaires existant dans notre école.
            </p>
          </div>

          <div className='w-full'>
            <h3 className="text-2xl font-bold text-left w-full">Les clubs Parascolaires: </h3>
            <div className="flex flex-col items-center justify-center">
              <ClubModal clubs={clubspara} className="w-full"/>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-left w-full">Les clubs des Filières: </h3>
            <div className="flex flex-col items-center justify-center">
              <ClubModal clubs={clubF} className="w-full"/>
            </div>
          </div>
          
        </div>
      </section>

      {/* Join call */}
      <AnimatedSection className="py-20 bg-adeBlue text-white text-center" direction="up">
        <h2 className="text-3xl font-bold mb-4">Envie de rejoindre l'équipe&nbsp;?</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg">Nous recrutons chaque année de nouveaux membres motivés.</p>
        <Link href="/join" className="bg-white text-adeBlue hover:bg-adeRed hover:text-white px-6 py-3 rounded-2xl inline-flex items-center gap-2 transition">
          <span>Postuler</span>
          <FaArrowRight />
        </Link>
      </AnimatedSection>
    </Layout>
  )
}

function Stat({ icon: Icon, count, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-16 h-16 mb-4 bg-adeBlue/10 text-adeBlue rounded-2xl">
        <Icon size={32} />
      </div>
      <span className="text-4xl font-extrabold text-adeBlue-700">
        <Counter to={count} duration={1200} />
      </span>
      <p className="mt-2 text-lg">{label}</p>
    </div>
  )
}

const quotesByRole = {
  'Président': 'Diriger pour innover.',
  'Vice-Présidente': "Toujours à l'écoute.",
  'Secrétaire': 'Organiser pour avancer.',
  'Trésorière': 'Gérer pour prospérer.',
  'Responsable RH': 'Valoriser notre équipe.',
  'Responsable Design': "L'esthétique avant tout.",
  'Responsable Maison de Science': 'Cultiver la connaissance.',
  'Responsable Média': 'Partager notre passion.',
  'Responsable Montage': 'Donner vie aux images.',
  'Responsable Logistique': 'Tout est dans les détails.',
  'Responsable Compétition': 'Toujours prêt pour le défi.',
  'Responsable Journée': 'Chaque année une empreinte.',
  'Responsable Sponsoring': 'Trouver nos alliés.',
  'Responsable Rédaction': 'Écrire pour informer.',
  'Responsable Formation': 'Apprendre pour grandir.'
}

const pilotageTeam = [
  { name: 'Jawad Elkharrati', role: 'Président' },
  { name: 'Aya El Farssia', role: 'Vice-Présidente' },
  { name: 'Hanae Cherif', role: 'Secrétaire' },
  { name: 'Oumaima Sahli', role: 'Trésorière' },
  { name: 'Iyad Beddidi', role: 'Responsable RH' },
]

const responsableTeam = [
  { name: 'El Wazani Mohamed', role: 'Responsable Design' },
  { name: 'Houciene Benhaddou', role: 'Responsable Maison de Science' },
  { name: 'Safae Azizi', role: 'Responsable Média' },
  { name: 'Jinane Ait Elabd', role: 'Responsable Montage' },
  { name: 'Mostafa Alaoui', role: 'Responsable Logistique' },
  { name: 'Amine Chakri', role: 'Responsable Compétition' },
  { name: 'EL MOUSSAOUI Oussama', role: 'Responsable Journée' },
  { name: 'Badreddine Chihab', role: 'Responsable Sponsoring' },
  { name: 'Wafae Zalouk', role: 'Responsable Rédaction' },
  { name: 'Zakaria Taibi', role: 'Responsable Formation' },
]
