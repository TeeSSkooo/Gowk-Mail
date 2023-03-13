import { Link } from 'react-router-dom';

import useAuth from 'hooks/useAuth';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="h-full py-[30px]">
      <div className="profile-container text-white">
        <div className="flex flex-col items-center gap-[30px] py-[30px] px-[15px] rounded-[7px] bg-[#1565c0] sm:flex-row sm:items-start">
          <div>
            <img className="max-w-full rounded-[50%]" src={user?.photoURL!} alt="Avatar" />
          </div>
          <div className="flex-auto">
            <div className="mb-[20px] flex justify-between items-center">
              <div className=" text-3xl font-bold">{user?.displayName}</div>
              <Link
                className="px-[8px] py-[4px] rounded-[7px] text-base bg-[#ffffff30] sm:px-[12px] sm:py-[6px] sm:text-lg"
                to="/chat"
              >
                To chat room
              </Link>
            </div>
            <div className="mb-[10px] text-base leading-6 sm:text-lg">
              <span className="font-semibold">Email: </span>
              {user?.email}
            </div>
            <div className="mb-[10px] text-base leading-6 sm:text-lg">
              <span className="font-semibold">Created at: </span>
              {user?.metadata.creationTime}
            </div>
            <div className="mb-[10px] text-base leading-6 sm:text-lg">
              <span className="font-semibold">Last sign in: </span>
              {user?.metadata.lastSignInTime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
