import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import { closeModal } from 'store/slices/chatSlice';

import google from 'assets/google.svg';
import close from 'assets/close.svg';

import styles from './SignUpModal.module.css';

const SignUpModal: React.FC = () => {
  const { showModal } = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();

  const hideModal = () => dispatch(closeModal());

  const signUp = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then(() => dispatch(closeModal()))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full bg-[#00000088] transition-all duration-300"
        style={showModal ? { opacity: '1', visibility: 'visible' } : { opacity: '0', visibility: 'hidden' }}
        onClick={hideModal}
      ></div>
      <div className={styles.modal} style={showModal ? { top: '50%' } : { top: '-100%' }}>
        <h2 className="text-center text-3xl">Sign Up</h2>
        <button className="absolute top-[20px] right-[20px]" onClick={hideModal}>
          <img src={close} alt="Close" />
        </button>
        <button
          className="relative block p-[15px] w-full rounded-[7px] bg-[#4285f4] transition-all hover:bg-[#4286f4d7]"
          onClick={signUp}
        >
          <div className="hidden absolute top-1/2 left-[15px] p-[5px] rounded-[7px] bg-white translate-y-[-50%] min-[400px]:inline-block">
            <img src={google} alt="Google" />
          </div>
          <div className="text-white text-center">Sign up with Google</div>
        </button>
      </div>
    </>
  );
};

export default SignUpModal;
