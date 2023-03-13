import { Link } from 'react-router-dom';

import SignUpModal from 'components/sign-up-modal/SignUpModal';

import useAuth from 'hooks/useAuth';
import useTheme from 'hooks/useTheme';

import banner from 'assets/banner.png';

const HomePage: React.FC = () => {
  const { isAuth, user } = useAuth();
  const { theme } = useTheme();

  return (
    <>
      <div className="home-container py-[30px]" style={{ color: `${theme === 'light' ? '#2dabff' : '#8d7df3'}` }}>
        <img className="w-[250px] mx-auto min-[400px]:w-[350px]" src={banner} alt="Banner" />
        {isAuth ? (
          <h1 className="text-center text-3xl leading-10 font-semibold">
            Welcome <i>{user?.displayName}!</i> Let's{' '}
            <Link className="underline" to="/chat">
              chatting!
            </Link>
          </h1>
        ) : (
          <h1 className="text-center text-3xl font-semibold">Sign up to have access to the chat</h1>
        )}
      </div>
      <SignUpModal />
    </>
  );
};

export default HomePage;
