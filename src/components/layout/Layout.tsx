import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="h-full">{children}</div>;
};

export default Layout;
