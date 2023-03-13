import { Link } from 'react-router-dom';

import SignUpModal from 'components/sign-up-modal/SignUpModal';

import useAuth from 'hooks/useAuth';

import banner from 'assets/banner.png';

const HomePage: React.FC = () => {
  const { isAuth, user } = useAuth();

  return (
    <>
      <div className="home-container py-[30px]">
        <img className="w-[250px] mx-auto min-[400px]:w-[350px]" src={banner} alt="Banner" />
        {isAuth ? (
          <h1 className="text-center text-3xl leading-10 text-[#2196f3] font-semibold">
            Welcome <i>{user?.displayName}!</i> Let's{' '}
            <Link className="underline" to="/chat">
              chatting!
            </Link>
          </h1>
        ) : (
          <h1 className="text-center text-3xl text-[#2196f3] font-semibold">Sign up to have access to the chat</h1>
        )}
      </div>
      <SignUpModal />
    </>
  );
};

// // {isAuth ? (
// //   <div className="py-[30px]">
// //     <h1 className="text-center text-3xl text-[#2196f3] font-semibold">
// //       Welcome <i>{user?.displayName}!</i> Let's{' '}
// //       <Link className="underline" to="/chat">
// //         chatting!
// //       </Link>
// //     </h1>
// //   </div>
// // ) : (
// //   <div className="py-[30px]">
// //     <img className="mb-[10px] max-w-[350px] max-h-[350px] object-cover mx-auto" src={banner} alt="Banner" />
// //     <h1 className="text-center text-3xl text-[#2196f3] font-semibold">Sign up to have access to the chat</h1>
// //   </div>
// )}

export default HomePage;
