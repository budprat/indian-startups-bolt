import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-indigo-600">
            Indian Startups
          </Link>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/profile" className="btn btn-secondary">Profile</Link>
                <button onClick={logout} className="btn btn-primary">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-secondary">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
