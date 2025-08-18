import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin') {
      if (typeof window !== 'undefined') {
        localStorage.setItem('loggedIn', 'true')
      }
      router.push('/admin1/dashboard')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <Layout title="Admin Login">
      <section className="flex flex-col items-center justify-center py-20">
        <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          {error && <p className="text-red-500">{error}</p>}
          <input
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border p-2 w-full rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-adeBlue text-white px-4 py-2 rounded w-full"
          >
            Login
          </button>
        </form>
      </section>
    </Layout>
  )
}
