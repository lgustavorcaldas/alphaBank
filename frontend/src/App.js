import { GlobalStyle } from './style/style.js';
import TransactionArea from './pages/Transaction/TransactionArea.jsx';
import { useAuth } from "./hooks/useAuth";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Container from "./components/Container/Container"

export default function App() {
  const { auth, loading } = useAuth();

  if (loading) {
    return <p>Carregando...</p>;
  }
    return(
      <Container />

    )
  // return (
  //   <div className="App">
  //     <GlobalStyle />
  //     <BrowserRouter>
  //       <>
  //         <Routes>
  //           <Route
  //             path="/"
  //             element={auth ? <Home /> : <Navigate to="/login" />}
  //           />
  //           <Route
  //             path="login"
  //             element={!auth ? <Login /> : <Navigate to="/" />}
  //           />
  //           <Route
  //             path="register"
  //             element={!auth ? <Register /> : <Navigate to="/" />}
  //           />
            
  //         </Routes>
  //       </>
        
  //     </BrowserRouter>
  //   </div>
  // );
}