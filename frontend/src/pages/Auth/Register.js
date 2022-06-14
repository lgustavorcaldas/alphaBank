import "./Auth.css";
import { Link } from "react-router-dom";
import Message from "../../components/Message/Message";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../../slices/authSlice";
import Logo from "../../images/Vector.svg";

const Register = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      cpf,
      dataNascimento,
      password,
      confirmPassword,
    };

    console.log(user);

    dispatch(register(user));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

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
              <span
                className="focus-input"
                data-placeholder=""
              ></span>
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

            {
              !loading && 
              <Link className="conta" to="/login">
                <input type="submit" value="Cadastrar" />
              </Link>
            }
            {loading && <input type="submit" disabled value="Aguarde..." />}
            {error && <Message msg={error} type="error" />}
          </form>
          <p className="conta">
            Já tem conta? <Link className="conta" to="/login">Clique aqui</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
