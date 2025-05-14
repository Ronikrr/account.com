 
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className='flex h-screen' >
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 p-10 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default MainLayout