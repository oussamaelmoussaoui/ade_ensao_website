import {useEffect, useState} from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function DarkModeToggle(){
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    if(enabled){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [enabled])

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="ml-3 p-2 rounded-2xl bg-adeBlue/10 hover:bg-adeBlue/20 transition-colors text-2xl"
    >
      {enabled ? (
        <FaSun className="text-adeRed" />
      ) : (
        <FaMoon className="text-adeBlue" />
      )}
    </button>
  )
}
