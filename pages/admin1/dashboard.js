import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { db } from '../../lib/firebase'

export default function Dashboard() {
  const router = useRouter()
  const [projects, setProjects] = useState([])
  const [events, setEvents] = useState([])
  const [drives, setDrives] = useState([])
  const [laureats, setLaureats] = useState([])
  const [messages, setMessages] = useState([])
  const [laureatName, setLaureatName] = useState('')
  const [laureatLinkedIn, setLaureatLinkedIn] = useState('')
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [desc, setDesc] = useState('')
  const [projectLinkedIn, setProjectLinkedIn] = useState('')
  const [evtTitle, setEvtTitle] = useState('')
  const [evtDate, setEvtDate] = useState('')
  const [evtLocation, setEvtLocation] = useState('')
  const [driveTitle, setDriveTitle] = useState('')
  const [driveLink, setDriveLink] = useState('')

  useEffect(() => {
    const loggedIn = typeof window !== 'undefined' && localStorage.getItem('loggedIn')
    if (!loggedIn) {
      router.push('/admin1')
    } else {
      const storedProjects = localStorage.getItem('customProjects')
      if (storedProjects) setProjects(JSON.parse(storedProjects))
      const storedEvents = localStorage.getItem('customEvents')
      if (storedEvents) setEvents(JSON.parse(storedEvents))
      const storedMessages = localStorage.getItem('contactMessages')
      if (storedMessages) setMessages(JSON.parse(storedMessages))
      fetch('/api/drives').then(res => res.json()).then(setDrives).catch(() => {})
      fetch('/api/laureats').then(res => res.json()).then(setLaureats).catch(() => {})

      const fetchFirestore = async () => {
        try {
          const { getDocs, collection } = await import('firebase/firestore')
          const projSnap = await getDocs(collection(db, 'projects'))
          const firebaseProjects = projSnap.docs.map(d => ({ id: d.id, ...d.data() }))
          setProjects(prev => [...prev, ...firebaseProjects])
          const evtSnap = await getDocs(collection(db, 'events'))
          const firebaseEvents = evtSnap.docs.map(d => ({ id: d.id, ...d.data() }))
          setEvents(prev => [...prev, ...firebaseEvents])
        } catch (err) {
          // ignore if firestore unavailable
        }
      }
      fetchFirestore()
    }
  }, [router])

  const addProject = async (e) => {
    e.preventDefault()
    const newProj = { name, link, desc, ownerLinkedIn: projectLinkedIn }
    try {
      const { collection, addDoc } = await import('firebase/firestore')
      const docRef = await addDoc(collection(db, 'projects'), newProj)
      newProj.id = docRef.id
    } catch (err) {
      // ignore firestore errors in offline mode
    }
    const updated = [...projects, newProj]
    setProjects(updated)
    localStorage.setItem('customProjects', JSON.stringify(updated))
    setName('')
    setLink('')
    setDesc('')
    setProjectLinkedIn('')
  }

  const addEvent = async (e) => {
    e.preventDefault()
    const newEvt = { title: evtTitle, date: evtDate, location: evtLocation }
    try {
      const { collection, addDoc } = await import('firebase/firestore')
      const docRef = await addDoc(collection(db, 'events'), newEvt)
      newEvt.id = docRef.id
    } catch (err) {
      // ignore firestore errors in offline mode
    }
    const updated = [...events, newEvt]
    setEvents(updated)
    localStorage.setItem('customEvents', JSON.stringify(updated))
    setEvtTitle('')
    setEvtDate('')
    setEvtLocation('')
  }

  const addDrive = async (e) => {
    e.preventDefault()
    const newDrive = { title: driveTitle, link: driveLink }
    const res = await fetch('/api/drives', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDrive)
    })
    if (res.ok) setDrives([...drives, newDrive])
    setDriveTitle('')
    setDriveLink('')
  }

  const addLaureat = async (e) => {
    e.preventDefault()
    const newL = { name: laureatName, linkedin: laureatLinkedIn }
    const res = await fetch('/api/laureats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newL)
    })
    if (res.ok) setLaureats([...laureats, newL])
    setLaureatName('')
    setLaureatLinkedIn('')
  }

  const removeProject = async (index) => {
    const proj = projects[index]
    if (proj && proj.id) {
      try {
        const { doc, deleteDoc } = await import('firebase/firestore')
        await deleteDoc(doc(db, 'projects', proj.id))
      } catch (err) {
        // ignore firestore errors
      }
    }
    const updated = projects.filter((_, i) => i !== index)
    setProjects(updated)
    localStorage.setItem('customProjects', JSON.stringify(updated))
  }

  const removeEvent = async (index) => {
    const evt = events[index]
    if (evt && evt.id) {
      try {
        const { doc, deleteDoc } = await import('firebase/firestore')
        await deleteDoc(doc(db, 'events', evt.id))
      } catch (err) {
        // ignore firestore errors
      }
    }
    const updated = events.filter((_, i) => i !== index)
    setEvents(updated)
    localStorage.setItem('customEvents', JSON.stringify(updated))
  }

  const removeDrive = async (index) => {
    await fetch('/api/drives', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ index })
    })
    setDrives(drives.filter((_, i) => i !== index))
  }

  const removeLaureat = async (index) => {
    await fetch('/api/laureats', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ index })
    })
    setLaureats(laureats.filter((_, i) => i !== index))
  }

  const removeMessage = (index) => {
    const updated = messages.filter((_, i) => i !== index)
    setMessages(updated)
    localStorage.setItem('contactMessages', JSON.stringify(updated))
  }

  const logout = () => {
    localStorage.removeItem('loggedIn')
    router.push('/admin1')
  }

  return (
    <Layout title="Dashboard">
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button onClick={logout} className="text-red-500 underline">Logout</button>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Ajouter un projet</h2>
        <form onSubmit={addProject} className="space-y-4 mb-10 max-w-md">
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Project name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="GitHub link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
          <textarea
            className="border p-2 w-full rounded"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="LinkedIn link"
            value={projectLinkedIn}
            onChange={(e) => setProjectLinkedIn(e.target.value)}
          />
          <button type="submit" className="bg-adeBlue text-white px-4 py-2 rounded w-full">Add Project</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((p, i) => (
            <div key={i} className="border rounded p-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm mb-2">{p.desc}</p>
              <a href={p.link} className="text-adeBlue underline block mb-2">GitHub</a>
              {p.ownerLinkedIn && (
                <a href={p.ownerLinkedIn} className="text-adeBlue underline block mb-2">LinkedIn</a>
              )}
              <button onClick={() => removeProject(i)} className="text-red-500 text-sm underline">Remove</button>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Ajouter un rendez-vous</h2>
        <form onSubmit={addEvent} className="space-y-4 mb-10 max-w-md">
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Titre"
            value={evtTitle}
            onChange={(e) => setEvtTitle(e.target.value)}
            required
          />
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Date"
            value={evtDate}
            onChange={(e) => setEvtDate(e.target.value)}
            required
          />
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Lieu"
            value={evtLocation}
            onChange={(e) => setEvtLocation(e.target.value)}
            required
          />
          <button type="submit" className="bg-adeBlue text-white px-4 py-2 rounded w-full">Add Event</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((e, i) => (
            <div key={i} className="border rounded p-4">
              <h3 className="font-semibold">{e.title}</h3>
              <p className="text-sm mb-2">{e.date} – {e.location}</p>
              <button onClick={() => removeEvent(i)} className="text-red-500 text-sm underline">Remove</button>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold my-4">Ajouter un Drive</h2>
        <form onSubmit={addDrive} className="space-y-4 mb-10 max-w-md">
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Titre du Drive"
            value={driveTitle}
            onChange={(e) => setDriveTitle(e.target.value)}
            required
          />
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Lien"
            value={driveLink}
            onChange={(e) => setDriveLink(e.target.value)}
            required
          />
          <button type="submit" className="bg-adeBlue text-white px-4 py-2 rounded w-full">Add Drive</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {drives.map((d, i) => (
            <div key={i} className="border rounded p-4 flex justify-between items-center">
              <a href={d.link} className="text-adeBlue underline">{d.title}</a>
              <button onClick={() => removeDrive(i)} className="text-red-500 text-sm underline">Remove</button>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold my-4">Ajouter un Lauréat</h2>
        <form onSubmit={addLaureat} className="space-y-4 mb-10 max-w-md">
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Nom"
            value={laureatName}
            onChange={(e) => setLaureatName(e.target.value)}
            required
          />
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Lien LinkedIn"
            value={laureatLinkedIn}
            onChange={(e) => setLaureatLinkedIn(e.target.value)}
            required
          />
          <button type="submit" className="bg-adeBlue text-white px-4 py-2 rounded w-full">Add Laureat</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {laureats.map((l, i) => (
            <div key={i} className="border rounded p-4 flex justify-between items-center">
              <a href={l.linkedin} className="text-adeBlue underline">{l.name}</a>
              <button onClick={() => removeLaureat(i)} className="text-red-500 text-sm underline">Remove</button>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold my-4">Messages reçus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {messages.map((m, i) => (
            <div key={i} className="border rounded p-4">
              <p className="font-semibold">{m.name} – {m.email}</p>
              <p className="text-sm mb-2">{m.message}</p>
              <button onClick={() => removeMessage(i)} className="text-red-500 text-sm underline">Remove</button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
