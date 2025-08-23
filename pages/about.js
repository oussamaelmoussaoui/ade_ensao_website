import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import Counter from '../components/Counter'
import Image from 'next/image'
import ImageSlider from '../components/ImageSlider'
import Link from 'next/link'
import {
  FaProjectDiagram,
  FaUsers,
  FaRegCalendarAlt,
  FaLightbulb,
  FaRocket,
  FaHandshake,
  FaBullseye,
  FaHistory,
  FaArrowRight,
  FaCheckCircle,
  FaAddressBook,
  FaAccessibleIcon,
  FaGofore,
  FaGift,
  FaGifts,
  FaObjectGroup,
  FaUserPlus
} from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function Page() {
  return (
    <Layout title="À propos">
      {/* Hero */}
      <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center text-white -mt-4">

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
            <h1 className="text-4xl text-gray-950 md:text-5xl font-extrabold mb-6">
              L'ADE : faites connaissance
            </h1>
            <p className="max-w-lg text-lg md:text-lg text-gray-950">
              L’ADE, c’est plus qu’une association.
              C’est un moteur, un lien, une voix.
              Elle dynamise la vie étudiante à l’ENSAO et soutient le quotidien des élèves ingénieurs.
            </p>

          </motion.div>

        </div>
      </section>

      {/* Stats */}
      {/* <AnimatedSection className="py-16 bg-white" direction="up">
        <div className="mx-auto grid sm:grid-cols-4 gap-8 max-w-7xl px-4">
          <Stat icon={FaProjectDiagram} count={14} label="Projets" />
          <Stat icon={FaUsers} count={80} label="Membres" />
          <Stat icon={FaRegCalendarAlt} count={30} label="Événements" />
          <Stat icon={FaRocket} count={4} label="Années" />
        </div>
      </AnimatedSection> */}

      {/* Mission & Vision */}
      <AnimatedSection className="h-full my-20" direction="up">
        {/* <div className="container my-20  mx-auto space-y-24 max-w-7xl">
          
          <div className="sticky top-[20%] z-1 grid md:grid-cols-2 gap-8 items-center bg-lightGray p-6 rounded-lg shadow ">
            <Image src="/wireframe-pic.svg" alt="mission" width={600} height={400} className="rounded-lg shadow-xl" />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                <FaBullseye /> Notre mission
              </h2>
              <p className="max-w-md mx-auto md:mx-0 text-lg">
                L’Association des Étudiants de l’ENSAO rassemble des élèves motivés et engagés pour enrichir la vie étudiante. 
                Elle joue un rôle central en reliant les étudiants, les clubs et l’administration, en portant leurs voix et en soutenant leurs projets.
              </p>
            </div>
          </div>

          <div className="sticky top-[22%] z-2 grid md:grid-cols-2 gap-8 items-center bg-gray-900 text-white p-6 rounded-lg shadow mx-2">
            <div className="md:order-2">
              <Image src="/wireframe-pic.svg" alt="vision" width={600} height={400} className="rounded-lg shadow-xl" />
            </div>
            <div className="text-center md:text-left md:order-1">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                <FaRocket /> Notre vision
              </h2>
              <p className="max-w-3xl mx-auto md:mx-0 text-lg">
                L’ADE agit pour défendre les intérêts des élèves-ingénieurs, promouvoir leurs initiatives et encourager leur épanouissement 
                personnel et académique. Elle crée un cadre dynamique où chaque étudiant peut s’impliquer, apprendre et grandir.
              </p>
            </div>
          </div>

          <div className="sticky top-[24%] z-3 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-lightGray p-6 rounded-lg shadow-lg mx-4">
            <Image src="/wireframe-pic.svg" alt="mission" width={600} height={400} className="rounded-lg shadow-xl" />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                <FaObjectGroup /> Nos valeurs
              </h2>
              <p className="max-w-3xl mx-auto md:mx-0 text-lg">
                Cette association est aussi un moteur d’énergie collective, animée par la volonté de bâtir une communauté soudée, 
                ouverte et ambitieuse, tout en restant proche des besoins des étudiants.
              </p>
            </div>
          </div>

        </div> */}

        {/* <div className='max-w-7xl mx-auto'>
          <StickyScroll content={content} />
        </div> */}

        <div className='max-w-7xl mx-auto relative flex flex-col md:flex-row gap-10 items-start justify-between px-6 md:p-0'>
          <div className='block md:sticky top-32'>
            <Image src="/wireframe-pic.svg" alt="mission" width={600} height={400} className="rounded-lg shadow-xl" />
          </div>

          <div className='max-w-xl flex flex-col gap-6'>

            <div className='max-w-xl '>
              <h3 className="text-2xl font-bold mb-4">ADE ENSAO</h3>
              <p>
                L’Association des Étudiants de l’ENSAO (ADE) est une structure représentative qui regroupe des élèves-ingénieurs motivés, engagés et passionnés par la vie associative. Elle a pour mission principale d’enrichir la vie étudiante au sein de l’École Nationale des Sciences Appliquées d’Oujda en offrant un espace de rencontre, d’échange et de collaboration.
              </p>
            </div>

            <div className='max-w-xl '>
              <h3 className="text-2xl font-bold mb-4">Le role Essentiel</h3>
              <p>
                Elle joue un rôle charnière entre les étudiants, les clubs parascolaires et l’administration de l’école, facilitant ainsi la communication et la coordination. L’ADE porte la voix des étudiants auprès des instances décisionnelles, en veillant à ce que leurs préoccupations, leurs propositions et leurs besoins soient entendus et pris en considération.
              </p>
            </div>

            <div className='max-w-xl '>
              <h3 className="text-2xl font-bold mb-4">Plans de l'association</h3>
              <p>
                L’association agit sur plusieurs plans : <br/> Représentation et défense des intérêts des élèves-ingénieurs, qu’il s’agisse de conditions d’études, de ressources pédagogiques ou de cadre de vie.  <br/> Promotion et accompagnement des initiatives étudiantes, qu’elles soient à caractère scientifique, culturel, sportif ou social.  <br/> Encouragement de l’épanouissement personnel et académique, en offrant des opportunités de développement de compétences transversales telles que le leadership, le travail d’équipe ou la gestion de projet.
              </p>
            </div>

            <div className='max-w-xl '>
              <h3 className="text-2xl font-bold mb-4">Pourquoi l'ADE ?</h3>
              <p>
                L’ADE est également un moteur d’énergie collective, favorisant un esprit de solidarité et de coopération. Elle contribue à bâtir une communauté soudée, inclusive et ambitieuse, où chacun peut trouver sa place, s’impliquer et évoluer.
              </p>
            </div>

            <div className='max-w-xl '>
              <h3 className="text-2xl font-bold mb-4">Le parascolaire à l'ADE</h3>
              <p>
                En organisant des événements, en soutenant les clubs et en facilitant les initiatives, elle crée un cadre dynamique et stimulant où chaque étudiant peut non seulement apprendre et progresser, mais aussi contribuer activement au rayonnement de l’ENSAO, tant sur le plan national qu’international.
              </p>
            </div>

          </div>
        </div>

      </AnimatedSection>

      {/* Pilotage team */}
      <AnimatedSection className="py-20 bg-lightGray" direction="left">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Équipe Pilotage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pilotageTeam.map((m, idx) => (
              <Link href={`${m.linkedin}`} key={m.name}>
                <div className="text-center bg-white p-4 rounded-2xl hover:shadow-lg hover:bg-adeRed-100 transition duration-300 ease-in-out">
                  <div className="h-32 w-32 mx-auto rounded-full bg-gray-200 mb-2 relative overflow-hidden">
                    <img src={`/team/${idx + 1}.jpg`} alt={m.name} className="object-cover w-full h-full" />
                    
                  </div>
                  <p className="font-semibold">{m.name}</p>
                  <p className="text-sm text-adeRed-600">{m.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Responsables team */}
      <AnimatedSection className="py-20 bg-white" direction="right">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Équipe Responsables</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {responsableTeam.map((m, idx) => (
              <Link href={`${m.linkedin}`} key={m.name}>
                <div key={m.name} className="text-center bg-gray-100 p-4 rounded-2xl hover:shadow-lg hover:bg-adeBlue-100 transition duration-300 ease-in-out">
                  <div className="h-32 w-32 mx-auto rounded-full bg-gray-200 mb-2 relative overflow-hidden">
                    <img /* src={`/team/${pilotageTeam.length + idx + 1}.jpg`} */ src="/wireframe-pic.svg" alt={m.name} className="object-cover w-full h-full" />
                    
                  </div>
                  <p className="font-semibold">{m.name}</p>
                  <p className="text-sm text-adeBlue-600">{m.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Trust */}
      {/* <AnimatedSection className="py-20 bg-white" direction="right">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-8">Ils nous font confiance</h2>
          <div className="overflow-hidden h-40">
            <div className="flex flex-nowrap items-center gap-10 w-max sponsor-scroll">
              {Array.from({ length: 20 }, (_, i) => {
                const logos = [
                  '/sponsors/1631326041576.jfif',
                  '/sponsors/49-1120_company_import.jpg',
                  '/sponsors/Assabah-logo.jpg',
                  '/sponsors/COMMUNE-OUJDA-LOGO-01.png',
                  '/sponsors/Cerhso.jpg',
                  '/sponsors/ENSA Oujda.png',
                  '/sponsors/Screenshot 2025-07-06 204840.png',
                  '/sponsors/Societe-Generale-Emploi-Recrutement.png',
                  '/sponsors/images (1).jfif',
                  '/sponsors/images.png',
                  '/sponsors/unnamed.png'
                ]
                const src = logos[i % logos.length]
                return <IconTrust key={i} src={src} />
              })}
            </div>
          </div>
        </div>
      </AnimatedSection> */}

      {/* History */}
      {/* <AnimatedSection className="py-20 bg-lightGray" direction="right">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
            <FaHistory /> Un peu d'histoire
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8 text-center">
            Créé en 2020 par quelques passionnés, le club a grandi au fil des
            projets et des événements pour devenir aujourd'hui une communauté
            active et soudée.
          </p>
          <ImageSlider
            images={[
              '/event/Screenshot 2025-07-06 212003.png',
              '/event/Screenshot 2025-07-06 212023.png',
              '/event/Screenshot 2025-07-06 212041.png',
              '/event/Screenshot 2025-07-06 212101.png',
              '/event/Screenshot 2025-07-06 212116.png',
              '/event/Screenshot 2025-07-06 212130.png',
              '/event/Screenshot 2025-07-06 212147.png'
            ]}
          />
          <ImageSlider
            images={[
              '/event/Screenshot 2025-07-06 212211.png',
              '/event/Screenshot 2025-07-06 212230.png',
              '/event/Screenshot 2025-07-06 212254.png',
              '/event/Screenshot 2025-07-06 212342.png',
              '/event/Screenshot 2025-07-06 212407.png',
              '/event/Screenshot 2025-07-06 212420.png',
              '/event/Screenshot 2025-07-06 212446.png'
            ]}
          />
          <Timeline />
        </div>
      </AnimatedSection> */}

      {/* Activities */}
      {/* <AnimatedSection className="py-20 bg-white" direction="up">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Ce que nous faisons</h2>
          <ul className="grid sm:grid-cols-2 gap-10 text-lg bg-white ">
            <li className="flex items-start gap-2  ">
              <FaCheckCircle className="text-adeRed-600 mt-1" />
              <span>Organisation d'ateliers techniques et de formations</span>
            </li>
            <li className="flex items-start gap-2  ">
              <FaCheckCircle className="text-adeRed-600 mt-1" />
              <span>Conférences avec des experts du domaine</span>
            </li>
            <li className="flex items-start gap-2 ">
              <FaCheckCircle className="text-adeRed-600 mt-1" />
              <span>Participation à des compétitions et datathons</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-adeRed-600 mt-1" />
              <span>Accompagnement de projets étudiants innovants</span>
            </li>
          </ul>
        </div>
      </AnimatedSection> */}

      {/* Why join */}
      {/* <AnimatedSection className="py-20 bg-lightGray" direction="right">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi nous rejoindre&nbsp;?</h2>
          <ul className="mx-auto grid sm:grid-cols-2 gap-10 text-lg">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-adeRed-600 mt-1" />
              <span>Développer vos compétences sur des projets concrets</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-adeRed-600 mt-1" />
              <span>Échanger avec une communauté passionnée et bienveillante</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-adeRed-600 mt-1" />
              <span>Bénéficier d'un réseau d'experts et d'entreprises partenaires</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-adeRed-600 mt-1" />
              <span>Contribuer à des initiatives innovantes à fort impact</span>
            </li>
          </ul>
        </div>
      </AnimatedSection> */}

      {/* Join call */}
      {/* <AnimatedSection className="py-20 bg-adeBlue-700 text-white text-center" direction="up">
        <h2 className="text-3xl font-bold mb-4">Envie de nous rejoindre&nbsp;?</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg">
          Rejoignez la communauté et participez à l'aventure data science avec
          nous&nbsp;!
        </p>
        <Link href="/join" className="bg-white text-adeBlue-700 hover:bg-adeRed-600 hover:text-white px-6 py-3 rounded-2xl inline-flex items-center gap-2 transition">

          <span>Rejoindre le club</span>
          <FaArrowRight />
        </Link>
      </AnimatedSection> */}
    </Layout>
  )
}

function Objective({ icon: Icon, title }) {
  return (
    <div className="flex flex-row justify-start gap-4 items-center py-6 ">
      <div className="text-adeRed-600 text-4xl">
        <Icon />
      </div>
      <p className="font-semibold">{title}</p>
    </div>
  )
}

function IconTrust({ src }) {
  return (
    <div className="p-6 bg-white shadow rounded-2xl flex items-center justify-center">
      <Image src={src} alt="logo" width={80} height={80} className="w-20 h-20 object-contain" />
    </div>
  )
}

function Timeline() {
  const steps = [
    { year: '2020', text: 'Création du club par des passionnés', Icon: FaLightbulb },
    { year: '2021', text: 'Premiers ateliers et projets étudiants', Icon: FaProjectDiagram },
    { year: '2023', text: 'Organisation de DatathonX', Icon: FaRocket }
  ]
  return (
    <ol className="relative border-l-2 border-adeBlue-700 ml-4 my-10">
      {steps.map((s, i) => (
        <li key={i} className="mb-8 ml-6">
          <span className="absolute -left-5 flex items-center justify-center w-10 h-6 bg-adeBlue-700 rounded-2xl text-white text-xs">

            {s.year}
          </span>
          <div className="flex items-center gap-2 mt-1">
            <s.Icon className="text-adeRed-600" />
            <p>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function Stat({ icon: Icon, count, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-16 h-16 mb-4 bg-adeBlue-700/10 text-adeBlue-700 rounded-2xl">
        <Icon size={32} />
      </div>
      <span className="text-4xl font-extrabold text-adeBlue-700">
        <Counter to={count} duration={1200} />
      </span>
      <p className="mt-2 text-lg">{label}</p>
    </div>
  )
}

const pilotageTeam = [
  { name: 'OURIARHI Mohammed', role: 'Président', linkedin: '' },
  { name: 'BECHARI Salah-Eddine', role: 'Vice-Présidente', linkedin: '' },
  { name: 'EL FARSSIA Aya', role: 'Secrétaire', linkedin: '' },
  { name: 'EL MOUSSAOUI Oussama', role: 'Trésorière', linkedin: 'https://www.linkedin.com/in/el-moussaoui-oussama-0a4a9524b/' },
]

const responsableTeam = [
  { name: 'EN-NAAS Adnane', role: 'Responsable RH', linkedin: '' },
  { name: 'HABIB Ilyas', role: 'Responsable des Clubs des Filières', linkedin: '' },
  { name: 'ZENNOUHI Oumayma', role: 'Responsable des Clubs Parascolaire', linkedin: '' },
  { name: 'BENAHMED Nouha', role: 'Responsable Communication', linkedin: '' },
  { name: 'EL AYACHI Imad', role: 'Responsable Média', linkedin: '' },
  { name: 'ZITI Hajar', role: 'Responsable Rédaction', linkedin: '' },
  { name: 'CHAABANE Mohammed', role: 'Responsable Logistique', linkedin: '' },
  { name: 'WAZANE Mohamed', role: 'Responsable Design', linkedin: '' },
]

const content = [
  {
    title: "ADE ENSAO",
    description:
      "L’Association des Étudiants de l’ENSAO (ADE) est une structure représentative qui regroupe des élèves-ingénieurs motivés, engagés et passionnés par la vie associative. Elle a pour mission principale d’enrichir la vie étudiante au sein de l’École Nationale des Sciences Appliquées d’Oujda en offrant un espace de rencontre, d’échange et de collaboration.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        ADE ENSAO
      </div>
    ),
  },
  {
    title: "Le role Essentiel",
    description:
      "Elle joue un rôle charnière entre les étudiants, les clubs parascolaires et l’administration de l’école, facilitant ainsi la communication et la coordination. L’ADE porte la voix des étudiants auprès des instances décisionnelles, en veillant à ce que leurs préoccupations, leurs propositions et leurs besoins soient entendus et pris en considération.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/wireframe-pic.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Plans de l'association",
    description:
      "L’association agit sur plusieurs plans : <br/> Représentation et défense des intérêts des élèves-ingénieurs, qu’il s’agisse de conditions d’études, de ressources pédagogiques ou de cadre de vie.  <br/> Promotion et accompagnement des initiatives étudiantes, qu’elles soient à caractère scientifique, culturel, sportif ou social.  <br/> Encouragement de l’épanouissement personnel et académique, en offrant des opportunités de développement de compétences transversales telles que le leadership, le travail d’équipe ou la gestion de projet.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Plans de l'association
      </div>
    ),
  },
  {
    title: "Pourquoi l'ADE ?",
    description:
      "L’ADE est également un moteur d’énergie collective, favorisant un esprit de solidarité et de coopération. Elle contribue à bâtir une communauté soudée, inclusive et ambitieuse, où chacun peut trouver sa place, s’impliquer et évoluer.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Pourquoi l'ADE ?
      </div>
    ),
  },
  {
    title: "Le parascolaire à l'ADE",
    description:
      "En organisant des événements, en soutenant les clubs et en facilitant les initiatives, elle crée un cadre dynamique et stimulant où chaque étudiant peut non seulement apprendre et progresser, mais aussi contribuer activement au rayonnement de l’ENSAO, tant sur le plan national qu’international.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Le parascolaire à l'ADE
      </div>
    ),
  },
];