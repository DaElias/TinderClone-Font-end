import React, { useState } from "react";
import Nav from "../components/Nav";

const Dashboard = () => {
  return (
    <>
      <Nav minimal={true} setIsSignUp={() => {}} showAuthModal={false} />
    </>
  );
};

export default Dashboard;
