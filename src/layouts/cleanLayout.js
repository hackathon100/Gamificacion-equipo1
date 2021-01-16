import { Pane } from "evergreen-ui";
import React from "react";

const CleanLayout = ({ children }) => {
  return (
    <Pane
      height="100%"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="default"
    >
      {children}
    </Pane>
  );
};

export { CleanLayout };
