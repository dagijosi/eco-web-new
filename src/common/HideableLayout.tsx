import { useLocation } from "react-router-dom";
import Layout from "./Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface HideableLayoutProps {
  hideHeaderRoutes?: string[];
  hideLeftNavRoutes?: string[];
  hideRightNavRoutes?: string[];
  hideFooterRoutes?: string[];
  children: React.ReactNode;
}

const HideableLayout: React.FC<HideableLayoutProps> = ({ hideHeaderRoutes = [], hideLeftNavRoutes = [], hideRightNavRoutes = [], hideFooterRoutes = [], children }) => {
  const location = useLocation();
  const checkRoute = (routes: string[]) => routes.includes(location.pathname);

  const shouldHideHeader = checkRoute(hideHeaderRoutes);
  const shouldHideLeftNav = checkRoute(hideLeftNavRoutes);
  const shouldHideRightNav = checkRoute(hideRightNavRoutes);
  const shouldHideFooter = checkRoute(hideFooterRoutes);

  return (
    <Layout 
      header={<Header />} 
      footer={!shouldHideFooter && <Footer />} 
      hideHeader={shouldHideHeader} 
      hideLeftNav={shouldHideLeftNav} 
      hideRightNav={shouldHideRightNav} 
      hideFooter={shouldHideFooter}
    >
      {children}
    </Layout>
  );
};

export default HideableLayout;
