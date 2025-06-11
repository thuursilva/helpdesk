import type { ISidebar } from '../interface/sidebar'
import { Bars3Icon, TvIcon, TicketIcon, UserGroupIcon, ChartBarIcon, PencilSquareIcon, ClipboardDocumentListIcon, Cog6ToothIcon } from "@heroicons/react/24/outline"



function Sidebar({ isOpen, onToggle, activeItem, onItemSelect }: ISidebar ) {

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: TvIcon },
        { id: 'tickets', label: 'Tickets', icon: TicketIcon, badge: '5' },
        { id: 'clients', label: 'Clientes', icon: UserGroupIcon },
        { id: 'stats', label: 'Estatísticas', icon: ChartBarIcon },
        { id: 'documentation', label: 'Documentação', icon: PencilSquareIcon },
        { id: 'reports', label: 'Relatórios', icon: ClipboardDocumentListIcon },
        { id: 'configuration', label: 'Configuração', icon: Cog6ToothIcon },
    ]

    return (
        <div className={`${isOpen ? 'w-2xl' : 'w-md'} bg-white shadow-lg transition-all duration-300 ease-in-out`}>

            {/* Sidebar header*/}
            <div className='flex items-center justify-between gap-x-3 p-4 border-b border-gray-200'>
                <div className={`${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
                    <h1 className='text-xl font-bold text-gray-800'>HelpDesk</h1>
                    <p className='text-sm text-gray-500'>Sistema de Suporte</p>
                </div>
                <button onClick={onToggle} className='p-1 rounded-lg hover:bg-gray-100 transition-colors'>
                    <Bars3Icon className='w-7'/>
                </button>
            </div>

            {/* Sidebar navigation*/}
            <nav className='mt-6'>
                <ul className='space-y-2 px-3'>
                    {menuItems.map((item) => {
                        const IconComponent = item.icon
                        const isActive = activeItem === item.id

                        return (
                            <li key={item.id}>
                                <button 
                                onClick={() => onItemSelect(item.id)}
                                className={`w-full flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                                    isActive
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                                }`}
                                >
                                    <IconComponent className='w-7'/>
                                    {isOpen && (
                                        <>
                                            <span className='ml-3 font-medium'>{item.label}</span>
                                            {item.badge && (
                                                <span className={`ml-4 px-2 py-1 text-xs rounded-full ${
                                                    isActive
                                                        ? 'bg-white text-blue-600'
                                                        : 'bg-red-500 text-white'
                                                }`}>
                                                    {item.badge}
                                                </span>
                                            )}
                                        </>
                                    )}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </div>
    )
}

export default Sidebar