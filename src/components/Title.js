import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Title = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{props.name}</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default Title;
