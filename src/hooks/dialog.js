import React, { createContext, useContext, useState } from "react";

const dialogContext = createContext();

const useProvideDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [props, setProps] = useState({});
  const [current, setCurrent] = useState('');
  const openDialog = (dialog, props) => {
    setIsOpen(true);
    setCurrent(dialog);
    setProps(props);
  }
  const closeDialog = () => {
    setIsOpen(false);
    setProps({});
    setCurrent('')
  }
  return {
    isOpen,
    openDialog,
    closeDialog,
    props,
    current
  };
};

const ProvideDialog = ({ children }) => {
  const dialog = useProvideDialog();
  return <dialogContext.Provider value={dialog}>{children}</dialogContext.Provider>;
};

const useDialog = () => {
  return useContext(dialogContext);
};

export { useProvideDialog, ProvideDialog, useDialog };
