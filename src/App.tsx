import { useState } from "react"
import Sidebar from "./components/sidebar"
import Dashboard from "./components/dashboard"
import Footer from "./components/footer"
import MenuTickets from "./components/menuTickets"

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

      {/* <Dashboard /> */}

      <MenuTickets />

      <Footer />
    </div>
  )
}

export default App
