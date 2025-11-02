import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineArrowOutward } from "react-icons/md";


export default function ProjectCard({ name, link, desc, ownerName, ownerLinkedIn, src }) {

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="relative rounded-lg shadow hover:shadow-lg 
      transition flex flex-col justify-between bg-white 
      hover:duration-300 overflow-hidden">
        <img src={src} alt={`${name} image`} 
        className="w-full h-60 object-contain p-4" />
        <div
          id="info"
          className="absolute bottom-0 w-full text-white bg-adeBlue-600/60 
          p-4 flex flex-row items-center justify-between rounded-b-lg 
          transform translate-y-full transition-transform 
          hover:bg-black/30 duration-300 ease-in-out"
        >
          <h3 className="text-xl font-semibold">{name}</h3>
          <MdOutlineArrowOutward className="text-2xl" />
        </div>
      </div>
    </a>
    
  )
}
