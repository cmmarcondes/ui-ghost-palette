import React, { createContext, useCallback, useContext, useState } from "react";
import Modal from "../compositions/Modal";

const MessagModalContext = createContext({});

const MessagModalContextProvider = ({ children, ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  function toggleState() {
    setIsModalOpen(!isModalOpen);
  }
  const handleMessageModal = useCallback(
    ({ state, title = "", message = "" }) => {
      setMessage(message);
      setTitle(title);
      setIsModalOpen(state);
    },
    []
  );

  return (
    <MessagModalContext.Provider
      value={{
        handleMessageModal,
      }}
      {...props}
    >
      <Modal
        title={title}
        message={message}
        isModalOpen={isModalOpen}
        toggleState={toggleState}
      />
      {children}
    </MessagModalContext.Provider>
  );
};

export default MessagModalContextProvider;

export function useMessagModalContext() {
  const context = useContext(MessagModalContext);

  if (!context) {
    throw new Error(
      "useMessagModalContext must be used within a MessagModalContextProvider."
    );
  }

  const { handleMessageModal } = context;

  return {
    handleMessageModal,
  };
}
