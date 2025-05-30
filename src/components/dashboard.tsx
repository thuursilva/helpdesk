
function Dashboard () {

    return (
        <div className='flex-1 flex flex-col overflow-hidden'>

        <main className='flex-1 overflow-y-auto p-6'>

          <div className='bg-white rounded-lg shadow-sm p-6'>
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>Bem-vindo ao Helpdesk</h3>
            <p className='text-gray-600'>Esta é a tela inicial onde o conteúdo será exibido.</p>
          </div>

          <div className='bg-white rounded-lg shadow-sm p-6 mt-6'>

            <h3 className='text-xl font-semibold'>Atendimentos</h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            <div className='bg-red-100 border border-red-200 rounded-lg p-5 hover:cursor-pointer'>
              <h4 className='font-semibold text-red-800'>Tickets Abertos</h4>
              <p className='text-2xl font-bold text-red-600 mt-2'>7</p>
            </div>

            <div className='bg-orange-100 border border-orange-200 rounded-lg p-5 hover:cursor-pointer'>
              <h4 className='font-semibold text-orange-800'>Tickets Atrasados</h4>
              <p className='text-2xl font-bold text-orange-600 mt-2'>1</p>
            </div>

            <div className='bg-purple-100 border border-purple-200 rounded-lg p-5 hover:cursor-pointer'>
              <h4 className='font-semibold text-purple-800'>Tickets Em espera</h4>
              <p className='text-2xl font-bold text-purple-600 mt-2'>2</p>
            </div>

            <div className='bg-blue-100 border border-blue-200 rounded-lg p-5 hover:cursor-pointer'>
              <h4 className='font-semibold text-blue-800'>Tickets Pendentes</h4>
              <p className='text-2xl font-bold text-blue-600 mt-2'>12</p>
            </div>

            <div className='bg-green-100 border border-green-200 rounded-lg p-5 hover:cursor-pointer'>
              <h4 className='font-semibold text-green-800'>Tickets Resolvidos</h4>
              <p className='text-2xl font-bold text-green-600 mt-2'>12</p>
            </div>

            <div className='bg-gray-200 border border-gray-300 rounded-lg p-5 hover:cursor-pointer'>
              <h4 className='font-semibold text-gray-800'>Tickets Fechados</h4>
              <p className='text-2xl font-bold text-gray-600 mt-2'>24</p>
            </div>

          </div>

          </div>

          <div className='bg-white rounded-lg shadow-sm p-6 mt-6'>

            <h3 className='text-xl font-semibold'>Avaliações de Atendimentos</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>

              <div className='bg-blue-100 border border-blue-200 rounded-lg p-5 hover:cursor-pointer'>
                <h4 className='font-semibold text-blue-800'>Pesquisas de Satisfação Aguardando Resposta</h4>
                <p className='text-2xl font-bold text-blue-600 mt-2'>2</p>
              </div>

              <div className='bg-green-100 border border-green-200 rounded-lg p-5 hover:cursor-pointer'>
                <h4 className='font-semibold text-green-800'>Pesquisas de Satisfação Respondidas</h4>
                <p className='text-2xl font-bold text-green-600 mt-2'>10</p>
              </div>

            </div>

          </div>

        </main>

      </div>
    )
}

export default Dashboard