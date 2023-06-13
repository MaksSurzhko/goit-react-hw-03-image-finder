
import React from "react";
import mcss from '../modal/mcss.module.css';

const Modal = ({ active, setActive, children }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={active ? `${mcss.modal} ${mcss.active}` : mcss.modal} onClick={() => setActive(false)}>
      <div className={mcss.modalCont} onClick={handleClick}>
        {children}
      </div>
    </div>
  );
};

export default Modal;


