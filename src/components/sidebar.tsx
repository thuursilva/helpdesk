import { NavLink, useLocation } from 'react-router'
import type { ISidebar } from '../interface/sidebar'
import { Bars3Icon, TvIcon, TicketIcon, UserGroupIcon, ChartBarIcon, PencilSquareIcon, ClipboardDocumentListIcon, Cog6ToothIcon } from "@heroicons/react/24/outline"



function Sidebar({ isOpen, onToggle }: ISidebar) {
    const location = useLocation()

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: TvIcon, path: '/dashboard' },
        { id: 'tickets', label: 'Tickets', icon: TicketIcon, badge: '5', path: '/tickets' },
        { id: 'clients', label: 'Clientes', icon: UserGroupIcon, path: '/clients' },
        { id: 'stats', label: 'Estatísticas', icon: ChartBarIcon, path: '/stats' },
        { id: 'documentation', label: 'Documentação', icon: PencilSquareIcon, path: '/documentation' },
        { id: 'reports', label: 'Relatórios', icon: ClipboardDocumentListIcon, path: '/reports' },
        { id: 'configuration', label: 'Configuração', icon: Cog6ToothIcon, path: '/configuration' },
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
                    <Bars3Icon className='w-7' />
                </button>
            </div>

            {/* Sidebar navigation*/}
            <nav className='mt-6'>
                <ul className='space-y-2 px-3'>
                    {menuItems.map((item) => {
                        const IconComponent = item.icon
                        const isActive = location.pathname === item.id

                        return (
                            <li key={item.id}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `w-full flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 group ${isActive
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <IconComponent className='w-7' />
                                            {isOpen && (
                                                <>
                                                    <span className='ml-3 font-medium'>{item.label}</span>
                                                    {item.badge && (
                                                        <span className={`ml-4 px-2 py-1 text-xs rounded-full ${isActive
                                                            ? 'bg-white text-blue-600'
                                                            : 'bg-red-500 text-white'
                                                            }`}>
                                                            {item.badge}
                                                        </span>
                                                    )}
                                                </>
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </div>
    )
}

export default Sidebar