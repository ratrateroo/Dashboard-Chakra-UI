import React, { Fragment } from "react";
import { Routes, Outlet, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/auth" element={<AuthLayout />} />
      </Routes>
      <Outlet />
    </Fragment>
  );
}

export default App;
