import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-gray-800 text-white py-4 px-3">
        <h2 className="text-lg font-semibold">Sidebar</h2>
        <button onClick={onClose} className="text-white focus:outline-none">
          Fechar
        </button>
      </div>
      <div className="bg-gray-700 p-4">
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;