import { signOut } from 'firebase/auth';
import { NavLink, Link } from 'react-router-dom';

import ThemeSwitcher from 'components/theme-switcher/ThemeSwitcher';

import useAppDispatch from 'hooks/useAppDispatch';
import useAuth from 'hooks/useAuth';
import useTheme from 'hooks/useTheme';
import { openModal } from 'store/slices/chatSlice';

import profile from 'assets/profile.svg';

const Header: React.FC = () => {
  const { isAuth, auth } = useAuth();
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  const showModal = () => dispatch(openModal());

  const logOut = () => signOut(auth);

  return (
    <header
      className="text-white bg-[#085fc2]"
      style={{ backgroundColor: `${theme === 'light' ? '#085fc2' : '#4c428c'}` }}
    >
      <div className="header-container min-h-[70px] flex justify-between items-center">
        <Link className="text-xl font-bold min-[400px]:text-3xl" to="/">
          Gowk
          <span style={{ color: `${theme === 'light' ? '#2dabff' : '#8d7df3'}` }}>Mail</span>
        </Link>
        <div className="flex items-center gap-[10px] min-[400px]:gap-[25px]">
          <ThemeSwitcher />
          {isAuth ? (
            <div className="flex gap-[10px] items-center min-[400px]:gap-[20px]">
              <NavLink to="/profile">
                <img src={profile} alt="Profile" />
              </NavLink>
              <button
                className="px-[6px] py-[3px] rounded-[7px] bg-[#ffffff30] min-[400px]:px-[12px] min-[400px]:py-[6px] min-[400px]:text-lg"
                onClick={logOut}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              className="px-[6px] py-[3px] rounded-[7px] bg-[#ffffff30] min-[400px]:px-[12px] min-[400px]:py-[6px] min-[400px]:text-lg"
              onClick={showModal}
            >
              Sign Up
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
