import { useState } from "react"
import Sidebar from "./components/sidebar"
import Dashboard from "./components/dashboard"

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

      <Dashboard />

    </div>
  )
}

export default App
