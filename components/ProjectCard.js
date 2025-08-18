import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineArrowOutward } from "react-icons/md";


export default function ProjectCard({ name, link, desc, ownerName, ownerLinkedIn, src }) {
  

  return (
      <div className="relative border rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between bg-white hover:duration-300">
        <div className="absolute inset-0 bg-black/40 rounded-lg"/>
        <img src={src} alt={`${name} image`} className="w-full h-60 object-contain" />
        <div className="absolute text-white bottom-0 p-4 flex flex-row items-center w-full justify-between">
          <h3 className="text-xl font-semibold">{name}</h3>
          <MdOutlineArrowOutward className='text-2xl'/>
        </div> 

        
        
      </div>
    
  )
}
