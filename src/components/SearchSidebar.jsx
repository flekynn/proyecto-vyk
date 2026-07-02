import "./styles/SearchSidebar.css";

function SearchSidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <div className={`sidebar search-sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Buscar</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="sidebar-content">
          <input 
            type="text" 
            placeholder="Busca un producto..." 
            className="search-input"
          />
          <button className="search-btn-sidebar">Buscar</button>
        </div>
      </div>
    </>
  );
}

export default SearchSidebar;
