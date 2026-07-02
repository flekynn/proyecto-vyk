import "./styles/AccountSidebar.css";

function AccountSidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <div className={`sidebar account-sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Mi Cuenta</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="sidebar-content">
          <div className="account-section">
            <p>Inicia sesión para hacer compras en la página.</p>
            <button className="login-btn">Iniciar Sesión</button>
            <p>¿No tenés una cuenta? Registrate aquí</p>
            <button className="register-btn">Crear Cuenta</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountSidebar;
