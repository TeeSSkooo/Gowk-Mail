import useTheme from 'hooks/useTheme';
import useAppDispatch from 'hooks/useAppDispatch';

import sun from 'assets/sun.svg';
import moon from 'assets/moon.svg';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const dispatch = useAppDispatch();

  const changeTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  return (
    <button className="pr-[10px] relative border-r font-semibold sm:pr-[25px]" onClick={changeTheme}>
      <img src={`${theme === 'light' ? sun : moon}`} alt={`${theme === 'light' ? 'Sun' : 'Moon'}`} />
    </button>
  );
};

export default ThemeSwitcher;
