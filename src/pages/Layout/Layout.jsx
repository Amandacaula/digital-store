import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Layout.css";

function Layout({ children }) {
  const { pathname } = useLocation();


  // Ao trocar de página, volta a rolagem para o topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);



  return (
    <div className="layout">
      <Header/>

      <main className="layout_content">
        {children}
      </main>
      
      <Footer/>
      
    </div>
  );
}

export default Layout;