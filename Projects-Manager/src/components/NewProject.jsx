import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import manLogoProject from "../assets/man-with-blank-sign.png"

export default function NewProject({ handleAddProject, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    handleAddProject({
      id: enteredTitle + Math.random().toString(),
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[45rem] mt-16 mx-auto">
        <menu className="flex item-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="px-6 py-2 text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" ref={title} type="text" />
          <Input label="Description" textarea ref={description} />
          <Input label="Due Date" ref={dueDate} type="date" />
        </div>
        <img
          src={manLogoProject}
          alt="manLogoProject"
          className="w-52 h-52 object-contain mx-auto mt-8 "
        />
      </div>
    </>
  );
}
