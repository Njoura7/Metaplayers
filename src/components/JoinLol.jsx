import React, { useState } from "react";

const JoinLol = () => {
  const [showModal, setShowModal] = useState(false);
  const [placeholder1, setPlaceholder1] = useState("");
  const [placeholder2, setPlaceholder2] = useState("");

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // do something with the values of placeholder1 and placeholder2
    console.log(placeholder1, placeholder2);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <div className="modal">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Placeholder 1"
              value={placeholder1}
              onChange={(event) => setPlaceholder1(event.target.value)}
            />
            <input
              type="text"
              placeholder="Placeholder 2"
              value={placeholder2}
              onChange={(event) => setPlaceholder2(event.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          <button onClick={handleModalClose}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default JoinLol;