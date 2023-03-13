import { signOut } from 'firebase/auth';
import { NavLink, Link } from 'react-router-dom';

import useAppDispatch from 'hooks/useAppDispatch';
import useAuth from 'hooks/useAuth';
import { openModal } from 'store/slices/chatSlice';

import profile from 'assets/profile.svg';

const Header: React.FC = () => {
  const { isAuth, auth } = useAuth();
  const dispatch = useAppDispatch();

  const showModal = () => dispatch(openModal());

  const logOut = () => signOut(auth);

  return (
    <header className="text-white bg-[#1565c0]">
      <div className="header-container min-h-[70px] flex justify-between items-center">
        <Link className="text-2xl font-bold sm:text-3xl" to="/">
          Gowk<span className="text-[#2da4f3]">Mail</span>
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
