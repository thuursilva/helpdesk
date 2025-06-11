import { useState } from "react"
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router'
import Sidebar from "./components/sidebar"
import Dashboard from "./components/dashboard"
import Footer from "./components/footer"
import MenuTickets from "./components/menuTickets"

function App() {
  const [activeItem, setActiveItem] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <Router>
    <div className='flex h-screen bg-gray-100'>

      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        activeItem={activeItem}
        onItemSelect={setActiveItem}
      />

      <div className='flex-1 flex flex-col'>
        <main className='flex-1 overflow-auto'>
          <Routes>
            <Route path='/' element={<Navigate to="/dashboard" replace />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/tickets' element={<MenuTickets />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
    </Router>
  )
}

export default App
