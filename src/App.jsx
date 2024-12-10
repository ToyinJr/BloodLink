import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./tailwind.css";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Home, Groupdonation, About } from "./Components/pages"; // Import new components
import DonorProfile from "./Components/pages/DonorProfile";
// import { DonateBlood, ReceiveBlood, Login, SignUp } from "./Components/pages"; //Pages not yet available
import ReceiveBlood from "./Components/pages/ReceiveBlood";
import ImpactDashboard from "./Components/pages/ImpactDashboard";
import Login from "./Components/pages/Login";
import Signup from "./Components/pages/Signup";
import RequestForm from "./Components/pages/RequestForm";
import Verification from "./Components/pages/Verification";
import LoginForm from "./Components/pages/LoginForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donate-blood" element={<DonorProfile />} /> Donate Blood
        route
        <Route path="/receive-blood" element={<ReceiveBlood />} /> Receive Blood
        route
        <Route path="/groupdonation" element={<Groupdonation />} />{" "}
        <Route path="/ImpactDashboard" element={<ImpactDashboard />} />{" "}
        {/* Group Donation route */}
        <Route path="/about" element={<About />} /> {/* About route */}
        {<Route path="/login" element={<Login/>} />}
        {<Route path="/signup" element={<Signup />} />}
        <Route path="/requestform" element={<RequestForm />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/donor-login" element={<Login />} />
        <Route path="/LoginForm" element={<LoginForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
