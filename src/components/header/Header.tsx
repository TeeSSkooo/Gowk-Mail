import { signOut } from 'firebase/auth';
import { NavLink, Link, useNavigate } from 'react-router-dom';

import useAppDispatch from 'hooks/useAppDispatch';
import useAuth from 'hooks/useAuth';
import { openModal } from 'store/slices/chatSlice';

import profile from 'assets/profile.svg';

const Header: React.FC = () => {
  const { isAuth, auth } = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const showModal = () => dispatch(openModal());

  const logOut = () => {
    signOut(auth);
    navigate('/');
  };

  return (
    <header className="text-white bg-[#2196f3]">
      <div className="header-container min-h-[70px] flex justify-between items-center">
        <Link className="text-3xl font-bold" to="/">
          Online<span className="text-[#1565c0]">Chat</span>
        </Link>
        <div>
          {isAuth ? (
            <div className="flex gap-[20px] items-center">
              <NavLink to="/profile">
                <img src={profile} alt="Profile" />
              </NavLink>
              <button className="px-[12px] py-[6px] rounded-[7px] text-lg bg-[#ffffff30]" onClick={logOut}>
                Sign Out
              </button>
            </div>
          ) : (
            <button className="px-[12px] py-[6px] rounded-[7px] text-lg bg-[#ffffff30]" onClick={showModal}>
              Sign Up
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
