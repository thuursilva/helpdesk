import { useState } from "react"
import Sidebar from "./components/sidebar"

function App() {
  const [activeItem, setActiveItem] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className='flex h-screen bg-gray-100'>

      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        activeItem={activeItem}
        onItemSelect={setActiveItem} 
      />

      <div className='flex-1 flex flex-col overflow-hidden'>
        <header className='bg-white shadow-sm border-b border-gray-200 px-6 py-4'>

        </header>
      </div>
    </div>
  )
}

export default App
