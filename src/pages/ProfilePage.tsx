import { Link } from 'react-router-dom';

import useAuth from 'hooks/useAuth';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="h-full py-[30px] bg-[url('assets/chat-bg.svg')]">
      <div className="profile-container text-white">
        <div className="flex items-start gap-[30px] py-[30px] px-[15px] rounded-[7px] bg-[#2196f3]">
          <div>
            <img className="max-w-full rounded-[50%]" src={user?.photoURL!} alt="Avatar" />
          </div>
          <div className="flex-auto">
            <div className="mb-[20px] flex justify-between items-center">
              <div className=" text-3xl font-bold">{user?.displayName}</div>
              <Link className="px-[12px] py-[6px] rounded-[7px] text-lg bg-[#ffffff30]" to="/chat">
                To chat room
              </Link>
            </div>
            <div className="mb-[10px] text-lg">
              <span className="font-semibold">Email: </span>
              {user?.email}
            </div>
            <div className="mb-[10px] text-lg">
              <span className="font-semibold">Created at: </span>
              {user?.metadata.creationTime}
            </div>
            <div className="mb-[10px] text-lg">
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
