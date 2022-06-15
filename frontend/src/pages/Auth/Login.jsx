import { Link, useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import "./Auth.css";
import Message from "../../components/Message/Message";
import Logo from "../../images/Vector.svg";
import StoreContext from "../../components/Store/Context"

const Login = () => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  const { loading, error } = useSelector( (state) => state.auth );

  const handleSubmit = async ( e ) => {
    e.preventDefault();

    const userLoginApi = {
      cpf,
      password,
    };

    const { token } = await axios.post('http://localhost:4000/login', userLoginApi)
    .then( async ( resposta ) => {
      if (resposta.data.auth) {              
        let userID = await JSON.parse(window.atob(resposta.data.token.split('.')[1])).id;
        return { token: userID }
      } else {
        console.log('Login falhou!')
      }
    })

    if(token){
      setToken(token);
      return history.push('/');
    }    
  };
  
  return (
    <>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form onSubmit={handleSubmit} className="login-form">
              <span className="logo">
                <img src={Logo} alt="Logo" />
              </span>
              <div className="wrap-input">
                <input
                  className={cpf !== "" ? "has-val input" : "input"}
                  type="text"
                  onChange={(e) => setCpf(e.target.value)}
                  value={cpf}
                />
                <span className="focus-input" data-placeholder="CPF"></span>
              </div>
              <div className="wrap-input">
                <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <span className="focus-input" data-placeholder="Senha"></span>
              </div>
              {!loading && <input className="login-form-btn" type="submit" value="Entrar" />}
              <div className="container-cadastro-form-btn">
                <Link className="conta" to="/register">
                  <button className="cadastro-form-btn">
                    Cadastrar
                  </button>        
                </Link>
              </div>
            <div className="text-center">
              <a className="txt" href="#">
              Esqueceu a Senha?
              </a>
            </div>
              {loading && <input type="submit" disabled value="Aguarde..." />}
              {error && <Message msg={error} type="error" />}
            </form>
          </div>
          <p>
            Não tem uma conta? <Link to="/register">Clique aqui</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
