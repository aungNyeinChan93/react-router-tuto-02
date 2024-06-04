import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Product from "./components/Product";
import Login from "./components/Login";
import Error from "./components/Error";
import Dashboard from "./components/Dashboard";
import UserPage from "./components/UserPage";
import UserDetail from "./components/UserDetail";
import ShareLayout from "./components/ShareLayout";
import SingleProduct from "./components/SingleProduct";
import { mydata } from "./data";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/product" element={<Product mydata={mydata} />}/>
          <Route path="product/:productID" element={<SingleProduct />} />

          <Route path="/about" element={<About />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="user" element={<UserPage />} />
            <Route path="user/:name" element={<UserDetail />} />
          </Route>
          
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
