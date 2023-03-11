import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const ProfilePage: React.FC = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);

  return (
    <div className="profile-container text-white">
      <div className="flex items-start gap-[30px] py-[30px] px-[15px] rounded-[7px] bg-[#2196f3]">
        <div>
          <img className="max-w-full rounded-[50%]" src={user?.photoURL!} alt="Avatar" />
        </div>
        <div className="flex-auto">
          <div className="mb-[20px] text-3xl font-bold">{user?.displayName}</div>
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
  );
};

export default ProfilePage;
