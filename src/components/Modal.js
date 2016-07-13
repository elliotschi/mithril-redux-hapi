import m from 'mithril';

const Modal = {
  view(ctrl, props) {
    const { isOpen, onClose, children } = props;

    return isOpen ? (
      <div className="modal">
        <div>
          {children}
        </div>

        <div
          className="backdrop"
          onClick={onClose}
          >
          backdrop
        </div>
      </div>
    );
  }
}

export default Modal;