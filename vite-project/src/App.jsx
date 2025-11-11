import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './components/RegistrationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white shadow-md border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Registration Form — SMIT
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Services · Education · Registration
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <RegistrationForm />
      </main>
    </div>
   </>
  )
}

export default App
