import s from '../popup/popup.module.css';

const Popup = ({ active, setActive, children }) => {
  const handlePopupOpen = () => {
    setActive(!active);
  };

  return (
    <div className={active ? `${s.modal} ${s.active}` : `${s.modal}`} onClick={handlePopupOpen}>
      <div
        className={active ? `${s.modal__content} ${s.active}` : `${s.modal__content}`}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Popup;
