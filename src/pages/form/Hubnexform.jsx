import React from "react";
import Form from "../../components/forms/Form";
function Hubnexform({ formVisible, setFormVisible }) {
  function closeForm() {
    setFormVisible(!formVisible);
  }

  return (
    <div>
      <div className="w-full h-screen fixed left-0 top-0 z-[500] flex items-center justify-center bg-black/50">
        <div className="absolute w-full h-full bg-black/30 -z-30"></div>
        <div className="relative">
          <span
            className="absolute right-5 top-5 cursor-pointer z-1000"
            onClick={closeForm}
          >
            <img src="/icons/cross.svg" alt="crossIcons" className="invert" />
          </span>
          <Form closeForm={closeForm} />
        </div>
      </div>
    </div>
  );
}

export default Hubnexform;
