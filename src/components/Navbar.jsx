import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to='/' className='w-10 h-10 rounded-1g bg-white
    items-center justify-center flex font-bold'>
                <p className="pink-to-red-gradient_text">BI</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-pink-600' : 'text-white'}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-pink-600' : 'text-white'}>
                    Projects
                </NavLink>
                <NavLink to="/certificates" className={({ isActive }) => isActive ? 'text-pink-600' : 'text-white'}>
                    Certificates
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar