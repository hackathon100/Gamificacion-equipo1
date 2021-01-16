import React from "react";
import { Pane, Button, Heading } from "evergreen-ui";
import { CleanLayout } from "../layouts";
import { useAuth } from "../hooks";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const auth = useAuth();
  if (auth.user) {
    history.push('/')
  }
  return (
    <CleanLayout>
      <Pane
        display="flex"
        width="50%"
        padding={16}
        background="tint2"
        borderRadius={3}
      >
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={600}>Space School</Heading>
        </Pane>
        <Pane>
          {/* Below you can see the marginRight property on a Button. */}
          <Button isLoading={auth.loading} onClick={auth.signin} appearance="primary">
            Iniciar sesion
          </Button>
        </Pane>
      </Pane>
    </CleanLayout>
  );
};

export { Login };
