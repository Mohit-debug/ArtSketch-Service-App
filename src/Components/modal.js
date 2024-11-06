import React from 'react';

const Modal = {};
const Container = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center z-50" onClick={onClose}>
      <div className="relative flex justify-center w-auto h-auto lg:h-4/5 lg:w-full bg-transparent pt-12" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const CardForm = ({ children, onSubmit, title, onClose, gap, maxWidth }) => {
  return (
    <div
      className={`card w-full ${
        maxWidth ? `max-w-[${maxWidth}px]` : 'max-w-[400px]'
      } rounded-[19px] p-4  overflow-y-auto bg-gradient-to-b from-[#090909be] via-[#4c4c4c] to-[#050504ae]`}
      onSubmit={onSubmit}
      style={{
        maxWidth: maxWidth ? maxWidth : 700 + 'px'
      }}
    >
      <div className="flex justify-between pb-6">
        <h1 className="font-semibold text-xl">{title}</h1>
      </div>{' '}
      <div className={`flex flex-col gap-${gap}`}>{children}</div>
    </div>
  );
};

Modal.Container = Container;
Modal.CardForm = CardForm;

export default Modal;