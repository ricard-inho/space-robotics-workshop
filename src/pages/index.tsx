// import React, { useState, useEffect } from "react";
import * as React from "react";

import { navigate } from "gatsby";

const IndexPage = () => {
  // Hardwire the year redirector until the new year goes live.
  // const currentYear = new Date().getFullYear();
  // const redirectYear = process.env.GATSBY_REDIRECT_YEAR || currentYear; // Default to the current year
  const redirectYear = "2025";
  const targetPage = `/spacerobotics${redirectYear}/`;

  React.useEffect(() => {
    navigate(targetPage);
  }, [targetPage]);

  return <p>Redirecting to Space Robotics {redirectYear} ...</p>;
};

export default IndexPage;
