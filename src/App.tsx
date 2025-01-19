import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HideableLayout from "./common/HideableLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
        <HideableLayout hideFooterRoutes={["/login", "/signup"]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/product/:id" element={<Detail />} />
          </Routes>
        </HideableLayout>
      </Router>
  );
}

export default App;
