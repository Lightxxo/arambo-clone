// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./layout/Layout";
// import Landing from "../pages/landing/Landing";
// import Dashboard from "../pages/dashboard/Dashboard";
// import Login from "../pages/login/Login";
// import NotFound from "../pages/not-found/NotFound";
// import PrivateRoute from "./routes/PrivateRoute";
// import SuspenseWrapper from "./routes/SuspenseWrapper";
import { useEffect } from "react";
import "./index.css"



function App() {
    useEffect(() => {
    // remove 'dark' class from html and body
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark");
  }, []);
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<Layout />}>
    //       <Route index element={<Landing />} />
    //       <Route
    //         path="dashboard"
    //         element={
    //           <PrivateRoute>
    //             <SuspenseWrapper>
    //               <Dashboard />
    //             </SuspenseWrapper>
    //           </PrivateRoute>
    //         }
    //       />
    //       <Route path="login" element={<Login />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    <div>
      {/* temporary fallback content */}
      Placeholder
    </div>
  );
}

export default App;
