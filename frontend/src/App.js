import { GlobalStyle } from "./style/style.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
//<<<<<<< HEAD
import Container from "./components/Container/Container"
//=======
//>>>>>>> d743aea43632c492df4b7740e909493e841939e5

import StoreProvider from './components/Store/Provider'
import RoutesPrivate from './components/Routes/Private/Private'

// import Navbar from "./components/Navbar/Navbar";
// import TransactionArea from "./pages/Transaction/TransactionArea.jsx";


export default function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <StoreProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <RoutesPrivate path="/" component={Container} />
          </Switch>
      </StoreProvider>
    </BrowserRouter>
    </>
  );
}