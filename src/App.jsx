import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import HomeRoute from "@routes/HomeRoute";
const AdminRoute = lazy(() => import("@routes/AdminRoute"));

import "./App.sass";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route
          path="/admin"
          element={
            <Suspense>
              <AdminRoute />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
