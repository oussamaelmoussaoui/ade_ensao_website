import Image from 'next/image';

export default function Footer(){
  return(
    <footer className="bg-lightGray dark:bg-darkText py-6 h-[40vh] mt-20">
      <div className="container h-full items-top gap-8 md:gap-14 grid grid-cols-1 md:grid-cols-2 mx-auto px-6 max-w-7xl lg:grid-cols-2 lg:grid-flow-col py-6 text-sm text-gray-600">
        <div className='flex flex-row md:flex-col items-center md:items-start justify-between w-full'>
          <span className="flex items-center gap-2 cursor-pointer">
            <Image src="/ade-logo.png" alt="ADE logo" width={65} height={65} className="bg-transparent" />
          </span>
          <p>© {new Date().getFullYear()} ADE ENSAO</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:grid-flow-col justify-between gap-20'>
          <div className='flex flex-col gap-10'>
            <p className='text-lg text-black'>Liens utiles</p>
            <div>
              <ul className="flex flex-col gap-2">
                <li><a href="http://ensao.ump.ma/" className="hover:text-adeBlue-600 transition">Ensa Oujda</a></li>
                <li><a href="http://ensao.ump.ma/" className="hover:text-adeBlue-600 transition">Scolarité Ensa Oujda</a></li>
                <li><a href="http://ensao.ump.ma/fr/diplomes" className="hover:text-adeBlue-600 transition">Filières de formation</a></li>
                <li><a href="https://www.enssup.gov.ma/en" className="hover:text-adeBlue-600 transition">Ministère de l'Enseignement Supérieur</a></li>
                <li><a href="https://www.ump.ma/" className="hover:text-adeBlue-600 transition">Univérsité Mohammed Premier - UMP</a></li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <p className='text-lg text-black'>Nos Contacts</p>
            <div>
              <ul className="flex flex-col gap-2">
                <li><a href="https://www.instagram.com/ade_ensao/" className="hover:text-adeBlue-600 transition">Instagram</a></li>
                <li><a href="https://www.linkedin.com/company/ade-ensao/posts/?feedView=all" className="hover:text-adeBlue-600 transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        


      </div>
    </footer>
  )
}
