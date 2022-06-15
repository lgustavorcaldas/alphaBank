import { GlobalStyle } from "./style/style.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Card from "./pages/Card/Card";
import Container from "./components/Container/Container"
import StoreProvider from './components/Store/Provider'
import RoutesPrivate from './components/Routes/Private/Private'
import Navbar from "./components/Navbar/Navbar";

// import TransactionArea from "./pages/Transaction/TransactionArea.jsx";

export default function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <StoreProvider>
          <Navbar />
          <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <RoutesPrivate path="/" component={Container} />
              <RoutesPrivate path="/card" component={Card} />
          </Switch>
      </StoreProvider>
    </BrowserRouter>
    </>
  );
}