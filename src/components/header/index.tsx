
import { Link } from 'react-router-dom';
import logImg from '../../assets/laudelino.png'
import {FiUser, FiLogIn} from 'react-icons/fi'
export function Header() {
  const signed = true;
  const loadingAuth = false;

  return(
    <div className="w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4">
      <header className="flex max-w-7xl w-full items-center justify-between px-4 mx-auto">
        <Link to="/">
          <img
          src={logImg}
            alt="Logo do site"
          />
        </Link>

        {!loadingAuth && signed && (
          <Link to="/dashboard">
          <div className="border-2 rounded-full p-1 border-gray-900">
            <FiUser size={24} color="#000"/>
          </div>

        </Link>
        )}
        {!loadingAuth && !signed && (
          <Link to="/login">
          <div className="border-2 rounded-full p-1 border-gray-900">
            <FiLogIn size={24} color="#000"/>
          </div>
        </Link>
        )}
      </header>
    </div>
  )
}
