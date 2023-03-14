import useTheme from 'hooks/useTheme';
import useAppDispatch from 'hooks/useAppDispatch';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const dispatch = useAppDispatch();

  const changeTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  return (
    <button
      className="pr-[10px] relative border-r text-base font-semibold sm:pr-[25px] sm:text-lg"
      onClick={changeTheme}
    >
      {theme}
    </button>
  );
};

export default ThemeSwitcher;
