import "./App.css";
import Navbar from "./components/navbar";
import List from "./components/list";
import General from "./components/general";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import UserDetail from "./components/userdetail";
import Footer from "./components/footer";
import LocalUserTable from "./components/localUserTable";
import UserForm from "./components/UserForm";
import Error from "./components/error";
import PrivateRoute from "./components/PrivateRoute";
import ParticlesBg from "./components/ParticlesBg";
import FlexBoxTest from "./components/FlexBoxTest";

function App() {
  const allowPrivateRoutes =
    import.meta.env.VITE_ALLOW_PRIVATE_ROUTES === "true";

  return (
    <>
      <ParticlesBg />
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* home route */}
          <Route path="/" element={<General pagetype="Home" />} />
          
          {/* about route */}
          <Route path="/about" element={<General pagetype="About" />} />

          {/* general route */}
          <Route path="/general" element={<General pagetype="General" />} />

          {/* list route */}
          <Route path="/list" element={<List />} />

          {/* route for show all user in tabular form */}
          <Route
            path="/table"
            element={
              <PrivateRoute allowed={allowPrivateRoutes}>
                <LocalUserTable />
              </PrivateRoute>
            }
          />

          {/* route for show details of single user  */}
          <Route
            path="/user/:id"
            element={<UserDetail pagetype="Single User Detail" />}
          />

          {/* route for gallery */}
          <Route path="/gallery" element={<FlexBoxTest />} />

          {/* route for contact form  */}
          <Route path="/contact" element={<UserForm />} />

          {/* route for handling error */}
          <Route path="/error" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
