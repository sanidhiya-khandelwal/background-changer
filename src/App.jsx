import { useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState('bg-black');

  return (
    <div className={`w-full h-screen ${theme} flex justify-center`}>
      <div className='flex gap-4 fixed bottom-5'>
        <button
          className='bg-teal-600 px-4 rounded-sm'
          onClick={e => setTheme('bg-amber-950')}>
          Brown
        </button>
        <button
          className='bg-teal-600 px-4 rounded-sm'
          onClick={e => setTheme('bg-blue-900')}>
          purple
        </button>
        <button
          className='bg-teal-600 px-4 rounded-sm'
          onClick={e => setTheme('bg-yellow-200')}>
          yellow
        </button>
        <button
          className='bg-teal-600 px-4 rounded-sm'
          onClick={e => setTheme('bg-red-500')}>
          red
        </button>
      </div>
    </div >
  )
}

export default App
