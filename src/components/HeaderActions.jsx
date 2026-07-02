import { useState } from "react";
import "./styles/HeaderActions.css";
import SearchSidebar from "./SearchSidebar";
import AccountSidebar from "./AccountSidebar";
import CartSidebar from "./CartSidebar";

function HeaderActions() {
  const [activeBar, setActiveBar] = useState(null);

  const toggleBar = (bar) => {
    setActiveBar(activeBar === bar ? null : bar);
  };

  const closeBar = () => {
    setActiveBar(null);
  };

  return (
    <>
      <div className="header-actions">
        <button 
          className="action-btn search-btn" 
          title="Búsqueda"
          onClick={() => toggleBar("search")}
        >
          🔍
        </button>
        <button 
          className="action-btn account-btn" 
          title="Mi Cuenta"
          onClick={() => toggleBar("account")}
        >
          👤
        </button>
        <button 
          className="action-btn cart-btn" 
          title="Carrito"
          onClick={() => toggleBar("cart")}
        >
          🛒
        </button>
      </div>

      <SearchSidebar isOpen={activeBar === "search"} onClose={closeBar} />
      <AccountSidebar isOpen={activeBar === "account"} onClose={closeBar} />
      <CartSidebar isOpen={activeBar === "cart"} onClose={closeBar} />
    </>
  );
}

export default HeaderActions;
