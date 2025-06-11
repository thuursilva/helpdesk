import { PlusIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { useRef, useState, useEffect } from "react"

function MenuTickets () {
const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropDownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => setDropdownOpen((prev) => !prev)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [])

  const getBackgroundByStatus = (status: string) => {
    switch (status) {
      case 'on hold':
        return 'bg-purple-600'
      case 'pending':
        return 'bg-blue-600'
      case 'resolved':
        return 'bg-green-600'
      case 'late':
        return 'bg-orange-600'
      default:
        return 'bg-red-600'
    }
  }

  const getVisualization = (viewed: boolean) => {
    if (!viewed) {
          return 'bg-red-100 hover:bg-red-200'
      } else {
        return 'hover:bg-gray-200'
      }
    }


  const ticketsItems = [
    { id: 58, title: 'Solicitação de encerramento de conta', status: 'open', viewed: false },
    { id: 57, title: 'Problemas para logar no APP', status: 'open', viewed: false },
    { id: 56, title: 'Solicitação de melhoria', status: 'open', viewed: false },
    { id: 55, title: 'Pix não creditado a conta', status: 'open', viewed: false },
    { id: 54, title: 'Erro ao realizar TED', status: 'open', viewed: false },
    { id: 53, title: 'Remessa de pagamentos', status: 'open', viewed: false },
    { id: 52, title: 'Erro ao realizar login', status: 'open', viewed: true },
    { id: 51, title: 'Encerramento de contas', status: 'open', viewed: true },
    { id: 50, title: 'Título do ticket', status: 'late', viewed: true },
    { id: 49, title: 'Título do ticket', status: 'on hold', viewed: true },
    { id: 48, title: 'Título do ticket', status: 'on hold', viewed: true },
    { id: 47, title: 'Título do ticket', status: 'pending', viewed: true },
    { id: 46, title: 'Título do ticket', status: 'pending', viewed: true },
    { id: 45, title: 'Título do ticket', status: 'pending', viewed: true },
    { id: 44, title: 'Título do ticket', status: 'pending', viewed: true },
    { id: 43, title: 'Título do ticket', status: 'pending', viewed: true },
    { id: 42, title: 'Título do ticket', status: 'pending', viewed: true },
    { id: 41, title: 'Título do ticket', status: 'pending', viewed: true },
    { id: 40, title: 'Título do ticket', status: 'pending', viewed: true },
    { id: 39, title: 'Título do ticket', status: 'pending', viewed: true },
    { id: 38, title: 'Título do ticket', status: 'pending', viewed: true },
    { id: 37, title: 'Título do ticket', status: 'pending', viewed: true },
    { id: 36, title: 'Título do ticket', status: 'pending', viewed: true },
    { id: 35, title: 'Título do ticket', status: 'resolved', viewed: true },
    { id: 34, title: 'Título do ticket', status: 'resolved', viewed: true },
    { id: 33, title: 'Título do ticket', status: 'resolved', viewed: true },
  ]
    return(
        <div className='flex-1 flex flex-col overflow-hidden'>
        <main className='flex-1 overflow-y-auto p-6'>

          <div className='bg-white rounded-lg shadow-sm p-6 flex items-center'>

            <div className='grow'>
              <h3 className='text-xl font-bold text-gray-800'>Gerenciamento de tickets</h3>
              <p className='text-gray-600'>Esta é a tela para gerenciamento e resolução de tickets.</p>
            </div>
            <button className='bg-blue-600 rounded-lg p-3 text-white flex items-center gap-1 hover:bg-blue-500'>
              <PlusIcon className='w-6 h-6' />
              Novo Ticket
            </button>

          </div>

          <div className='bg-white rounded-lg shadow-sm p-6 mt-6'>

            <div className='flex flex-col'>

              <div className='flex items-center'>
                <div className='grow'>
                  <h3 className='text-xl font-semibold'>Meus tickets</h3>
                </div>

                <div ref={dropDownRef}>
                  <button
                    onClick={toggleDropdown}
                    className='p-2 border-2 flex items-center rounded-md gap-12'>
                    Todos os Status
                    <ChevronDownIcon className='w-5 h-5' />
                  </button>

                  {dropdownOpen && (
                    <div className='bg-white absolute mt-1 w-48 border border-gray-200 rounded-md shadow-lg z-10'>
                      <ul className='py-1'>
                        <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Todos os Status</li>
                        <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Abertos</li>
                        <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Atrasados</li>
                        <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Em espera</li>
                        <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Pendentes</li>
                        <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Resolvidos</li>
                        <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Fechados</li>
                      </ul>
                    </div>
                  )}
                </div>

              </div>

              <div className='max-h-[60vh] overflow-y-auto'>
                <ul className='py-2 flex flex-col'>
                  {ticketsItems.map((item) => {

                    return (
                      <li key={item.id} className={`flex items-center gap-5 ${getVisualization(item.viewed)} hover:cursor-pointer py-2 px-4`}>
                        <span className={`font-medium text-white min-w-24 text-center py-2 px-1 rounded-lg ${getBackgroundByStatus(item.status)}`}> {item.id} </span>
                        <p className='font-semibold text-lg'>{item.title}</p>
                      </li>
                    )

                  })}
                </ul>
              </div>

            </div>

          </div>

        </main>
      </div>
    )
}

export default MenuTickets