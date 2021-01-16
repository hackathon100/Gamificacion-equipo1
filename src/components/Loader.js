import React from "react";
import { Spinner } from "evergreen-ui";
import { CleanLayout } from "../layouts";

const Loader = () => {
  return (
    <CleanLayout>
      <Spinner />
    </CleanLayout>
  );
};

export {Loader}