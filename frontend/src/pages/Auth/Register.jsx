import "./Auth.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import Message from "../../components/Message/Message";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../images/Vector.svg";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory('')

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if( password !== confirmPassword || password === "" ) return console.log("Erro senhas não coincidem");

    const createNewUser = {
      name: name,
      cpf: cpf,
      birth_date: dataNascimento,
      password: password
    };

    await axios.post('http://localhost:4000/createNewUser', createNewUser)
    console.log("Chegou");
    history.push("/login")
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form onSubmit={handleSubmit} className="login-form">
            <span className="logo">
              <img src={Logo} alt="Logo" />
            </span>

            <div className="wrap-input">
              <input
                className={name !== "" ? "has-val input" : "input"}
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>
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
                className={dataNascimento !== "" ? "has-val input" : "input"}
                type="date"
                onChange={(e) => setDataNascimento(e.target.value)}
                value={dataNascimento}
              />
              <span className="focus-input" data-placeholder=""></span>
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

            <div className="wrap-input">
              <input
                className={confirmPassword !== "" ? "has-val input" : "input"}
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              <span
                className="focus-input"
                data-placeholder="Confirmar senha"
              ></span>
            </div>

            <input type="submit" value="Cadastrar"/>

            {loading && <input type="submit" disabled value="Aguarde..." />}
            { error && <Message msg={error} type="error" /> }
          </form>
          <p className="conta">
            Já tem conta?{" "}
            <Link className="conta" to="/login">
              Clique aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
