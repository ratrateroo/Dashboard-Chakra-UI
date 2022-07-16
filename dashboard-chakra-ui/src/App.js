import React, { Fragment } from "react";
import { Routes, Outlet, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/auth" element={<AuthLayout />} />
      </Routes>
    </Fragment>
  );
}

export default App;
