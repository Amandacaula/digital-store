import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Layout.css";

function Layout({ children }) {
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