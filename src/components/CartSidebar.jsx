import "./styles/CartSidebar.css";

function CartSidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <div className={`sidebar cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Mi Carrito</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="sidebar-content">
          <div className="cart-empty">
            <p>Tu carrito está vacío</p>
            <button className="continue-shopping">Continuar comprando</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartSidebar;
