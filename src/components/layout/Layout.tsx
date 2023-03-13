import { PropsWithChildren } from 'react';

import useTheme from 'hooks/useTheme';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen" style={{ backgroundColor: `${theme === 'light' ? '#fff' : '#212121'}` }}>
      {children}
    </div>
  );
};

export default Layout;
