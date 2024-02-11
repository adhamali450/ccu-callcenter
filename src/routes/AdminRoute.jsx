import { useState } from "react";

import AdminLogin from "@pages/AdminLogin";
import AdminPanel from "@pages/AdminPanel";

import AdminAuthContext from "@contexts/AdminAuthContext";

const AdminRoute = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AdminAuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {loggedIn ? <AdminPanel /> : <AdminLogin />}
    </AdminAuthContext.Provider>
  );
};

export default AdminRoute;
