import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <AnimatePresence>
      <motion.dialog
        ref={dialog}
        className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
        <form method="dialog" className="mt-4 text-right">
          <Button>Close</Button>
        </form>
      </motion.dialog>
    </AnimatePresence>,
    document.getElementById("modal-root")
  );
});

export default Modal;
