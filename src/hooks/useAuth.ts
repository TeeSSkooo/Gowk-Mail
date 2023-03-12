import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const useAuth = () => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  return {
    isAuth: Boolean(user?.email),
    auth,
    loading,
    user,
  };
};

export default useAuth;
