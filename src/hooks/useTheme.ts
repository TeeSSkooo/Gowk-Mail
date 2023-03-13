import useAppSelector from './useAppSelector';
import { setTheme } from 'store/slices/chatSlice';

const useTheme = () => {
  const { theme } = useAppSelector((state) => state.chat);

  return { theme, setTheme };
};

export default useTheme;
