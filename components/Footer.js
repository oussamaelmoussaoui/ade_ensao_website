

export default function Footer(){
  return(
    <footer className="bg-white dark:bg-darkText py-6">
      <div className="max-w-7xl container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-white px-4">

        <p>© {new Date().getFullYear()} ADE ENSAO</p>
        {/* Intentionally left blank */}
      </div>
    </footer>
  )
}
