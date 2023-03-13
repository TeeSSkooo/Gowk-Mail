import useTheme from 'hooks/useTheme';
import useAppDispatch from 'hooks/useAppDispatch';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const dispatch = useAppDispatch();

  const changeTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  return (
    <button className="relative pr-[25px] border-r text-lg font-semibold" onClick={changeTheme}>
      {theme}
    </button>
  );
};

export default ThemeSwitcher;
