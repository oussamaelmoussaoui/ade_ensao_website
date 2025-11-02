import Layout from '../components/Layout'
import AnimatedSection from '../components/AnimatedSection'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaRegCalendarAlt, FaUserPlus } from 'react-icons/fa'

export default function Page() {

  return (
    <Layout title="Ressources">
      {/* Hero */}
      <section className="relative w-full h-screen md:h-[80vh] overflow-hidden flex items-center justify-center text-white -mt-4">

        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(/images/image-3.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-adeBlue-700/70 to-adeRed-600/70" />
        <div className='max-w-7xl w-full flex justify-center md:grid md:grid-cols-2 items-center md:justify-between relative'>

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

      {/* Resources */}
      <AnimatedSection className="py-20 bg-white" direction="left">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-row-2 gap-12 items-center">

            <div className=" p-8 rounded-lg left md:text-center h-full w-full">
              <h2 className="text-3xl font-bold mb-4 text-left md:text-center">STPI 1</h2>
              <div className='grid md:grid-cols-2 gap-8 items-center bg-gray-100 p-8 rounded-lg'>
                <a href='https://drive.google.com/drive/folders/16_lGpChjkiBo5lMfTv_HX3oCK0rwgz4z'>
                  <div className="flex h-[200px] flex-col items-center bg-white hover:bg-adeBlue-100 p-4 rounded-lg w-full justify-center ease-in-out duration-300 shadow-md hover:shadow-lg ">
                    <h3 className="text-[20pt] font-semibold mb-2">Semestre 1</h3>
                  </div>
                </a>
                <a href='https://drive.google.com/drive/folders/1sBa_t-FZEa6Gto0mI2rF71jfEGLubFC5'>
                  <div className="flex h-[200px] flex-col items-center bg-white hover:bg-adeBlue-100 p-4 rounded-lg w-full justify-center ease-in-out duration-300 shadow-md hover:shadow-lg ">
                    <h3 className="text-[20pt] font-semibold mb-2">Semestre 2</h3>
                  </div>
                </a>
              </div>
            </div>

            <div className=" p-8 rounded-lg left md:text-center h-full w-full">
              <h2 className="text-3xl font-bold mb-4 text-left md:text-center">STPI 2</h2>
              <div className='grid md:grid-cols-2 gap-8 items-center bg-gray-100 p-8 rounded-lg'>
                <a href='https://drive.google.com/drive/folders/16_lGpChjkiBo5lMfTv_HX3oCK0rwgz4z'>
                  <div className="flex h-[200px] flex-col items-center bg-white hover:bg-adeBlue-100 p-4 rounded-lg w-full justify-center ease-in-out duration-300 shadow-md hover:shadow-lg ">
                    <h3 className="text-[20pt] font-semibold mb-2">Semestre 1</h3>
                  </div>
                </a>
                <a href='https://drive.google.com/drive/folders/1sBa_t-FZEa6Gto0mI2rF71jfEGLubFC5'>
                  <div className="flex h-[200px] flex-col items-center bg-white hover:bg-adeBlue-100 p-4 rounded-lg w-full justify-center ease-in-out duration-300 shadow-md hover:shadow-lg ">
                    <h3 className="text-[20pt] font-semibold mb-2">Semestre 2</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </Layout>
  )
  }