import { useEffect } from "react";
import { CloseIcon } from "../Icons/Icons";
import "./Drawer.css";


/* Painel lateral que abre por cima da página (usado no celular).*/
 
function Drawer({ isOpen, onClose, title, showCloseButton = false, children }) {
  // Enquanto o painel estiver aberto: trava a rolagem da página
  // e permite fechar com a tecla "Esc"
  useEffect(() => {
    if (!isOpen) return;


    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }


    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);


   
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);


  return (
    <div className={`drawer ${isOpen ? "drawer--open" : ""}`} aria-hidden={!isOpen}>
      <div className="drawer__overlay" onClick={onClose} />


      <aside className="drawer__panel" role="dialog" aria-label={title}>
        <div className="drawer__header">
          <h2 className="drawer__title">{title}</h2>
          {showCloseButton && (
            <button className="drawer__close" onClick={onClose} aria-label="Fechar">
              <CloseIcon />
            </button>
          )}
        </div>
        {children}
      </aside>
    </div>
  );
}


export default Drawer;
