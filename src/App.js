import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import EmployeeHome from "./Pages/EmployeeHome";
import CustomerDetails from "./Pages/CustomerDetails";
import ELogin from "./Pages/ELogin";
import CLogin from "./Pages/CLogin";
import Landingpage from "./Pages/Landingpage";
import CustomerTransactionDetails from "./Pages/CustomerTransactionDetails";
import CustomerHome from "./Pages/CustomerHome";
import Createcust from "./Pages/Createcust";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/ELogin" element={<ELogin />} />
          <Route path="/EmployeeHome" element={<EmployeeHome />} />
          <Route path="/Createcust" element={<Createcust />} />
          <Route path="/CustomerHome" element={<CustomerHome />} />
          <Route path="/CustomerDetails" element={<CustomerDetails />} />
          <Route path="/CLogin" element={<CLogin />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
