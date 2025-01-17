import React from 'react';

interface LayoutProps {
  header: React.ReactNode;
  leftNav?: React.ReactNode;
  rightNav?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  hideHeader?: boolean;
  hideLeftNav?: boolean;
  hideRightNav?: boolean;
  hideFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ header, leftNav, rightNav, footer, children, hideHeader, hideLeftNav, hideRightNav, hideFooter }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeader && header}
      <div className="flex md:flex-row flex-col flex-1">
        {!hideLeftNav && leftNav && <nav className="bg-gray-200 p-4 w-full md:w-1/4">{leftNav}</nav>}
        <main className="flex-1 p-4">{children}</main>
        {!hideRightNav && rightNav && <nav className="bg-gray-200 p-4 w-full md:w-1/4">{rightNav}</nav>}
      </div>
      {!hideFooter && footer}
    </div>
  );
};

export default Layout;
