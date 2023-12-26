import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Test from "./components/Test";

const App = () => {
    return (
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route 
          path="/user"
          element={
            <PrivateRoute> 
              <Test />
            </PrivateRoute>
          }
          />
        </Routes> 

      </BrowserRouter>
  );
}

export default App;
